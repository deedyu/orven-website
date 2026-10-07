import { useCart } from "../context/CartContext.jsx";

export default function AddToCart({ item }) {
  const { lines, setQty } = useCart();
  const qty = lines.find((line) => line.id === item.id)?.qty || 0;

  return (
    <div className="qty-step">
      <button
        type="button"
        aria-label={`${item.name} 하나 빼기`}
        disabled={qty === 0}
        onClick={() => setQty(item, qty - 1)}
      >
        −
      </button>
      <span aria-live="polite">{qty}</span>
      <button
        type="button"
        aria-label={`${item.name} 하나 담기`}
        onClick={() => setQty(item, qty + 1)}
      >
        +
      </button>
    </div>
  );
}
