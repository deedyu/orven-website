import { createContext, useContext, useMemo, useState } from "react";

const KEY = "orven-cart";
const CartContext = createContext(null);

function readLines() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [lines, setLines] = useState(readLines);

  const value = useMemo(() => {
    const count = lines.reduce((sum, line) => sum + line.qty, 0);
    return {
      lines,
      count,
      add(item, amount = 1) {
        const step = Math.max(1, amount);
        setLines((current) => {
          const found = current.find((line) => line.id === item.id);
          const next = found
            ? current.map((line) =>
                line.id === item.id ? { ...line, qty: line.qty + step } : line,
              )
            : [
                ...current,
                {
                  id: item.id,
                  name: item.name,
                  product: item.product || "",
                  volume: item.volume || "",
                  price: item.price || "",
                  qty: step,
                },
              ];
          localStorage.setItem(KEY, JSON.stringify(next));
          return next;
        });
      },
      setQty(item, qty) {
        const nextQty = Math.max(0, qty);
        setLines((current) => {
          const found = current.find((line) => line.id === item.id);
          let next;
          if (nextQty === 0) {
            next = current.filter((line) => line.id !== item.id);
          } else if (found) {
            next = current.map((line) =>
              line.id === item.id ? { ...line, qty: nextQty } : line,
            );
          } else {
            next = [
              ...current,
              {
                id: item.id,
                name: item.name,
                product: item.product || "",
                volume: item.volume || "",
                price: item.price || "",
                qty: nextQty,
              },
            ];
          }
          localStorage.setItem(KEY, JSON.stringify(next));
          return next;
        });
      },
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
