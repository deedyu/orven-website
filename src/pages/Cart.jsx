import { useState } from "react";
import { Link } from "react-router-dom";
import { catalog, pages } from "../data/content.js";
import { useCart } from "../context/CartContext.jsx";
import Media from "../components/Media.jsx";
import "./Pages.css";

function amount(price) {
  const value = Number(String(price || "").replace(/[^\d]/g, ""));
  return Number.isFinite(value) ? value : 0;
}

function money(value) {
  return `₩ ${value.toLocaleString("ko-KR")}`;
}

export default function Cart() {
  const { lines, setQty } = useCart();
  const [selected, setSelected] = useState(() => new Set());
  const chosen = lines.filter((line) => selected.has(line.id));
  const allSelected = lines.length > 0 && chosen.length === lines.length;
  const merchandise = lines.reduce((sum, line) => sum + amount(line.price) * line.qty, 0);

  const toggleAll = () => {
    setSelected(allSelected ? new Set() : new Set(lines.map((line) => line.id)));
  };

  const toggleOne = (id) => {
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const removeSelected = () => {
    chosen.forEach((line) => setQty(line, 0));
    setSelected(new Set());
  };

  return (
    <section className="page cart-page wrap" aria-labelledby="cart-title">
      <div className="cart-layout">
        <div>
          <h1 id="cart-title">{pages.cartTitle}</h1>
          {lines.length === 0 ? (
            <p className="page-copy">{pages.cartEmpty}</p>
          ) : (
            <>
              <div className="cart-tools">
                <label className="cart-check">
                  <input type="checkbox" checked={allSelected} onChange={toggleAll} />
                  전체 선택
                </label>
                <button type="button" onClick={removeSelected} disabled={chosen.length === 0}>
                  선택삭제
                </button>
              </div>
              <ul className="cart-list">
                {lines.map((line) => {
                  const product = catalog.find((entry) => entry.id === line.id);
                  return (
                    <li key={line.id} className="cart-row">
                      <label className="cart-check">
                        <input
                          type="checkbox"
                          checked={selected.has(line.id)}
                          onChange={() => toggleOne(line.id)}
                          aria-label={`${line.name} 선택`}
                        />
                      </label>
                      <Link className="cart-visual" to={`/product/${line.id}`}>
                        <Media
                          src={product?.src}
                          alt={product?.alt || line.name}
                          placeholder={!product || product.placeholder}
                          fit="contain"
                        />
                      </Link>
                      <div className="cart-info">
                        <p>
                          <Link to={`/product/${line.id}`}>{line.name}</Link>
                        </p>
                        {line.volume && <p className="cart-option">[옵션: {line.volume}]</p>}
                        <p className="cart-unit">{line.price}</p>
                      </div>
                      <div className="cart-qty">
                        <button
                          type="button"
                          aria-label={`${line.name} 하나 빼기`}
                          onClick={() => setQty(line, line.qty - 1)}
                        >
                          −
                        </button>
                        <span>{line.qty}</span>
                        <button
                          type="button"
                          aria-label={`${line.name} 하나 담기`}
                          onClick={() => setQty(line, line.qty + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="cart-remove"
                        aria-label={`${line.name} 삭제`}
                        onClick={() => setQty(line, 0)}
                      >
                        ×
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>

        {lines.length > 0 && (
          <aside className="cart-summary" aria-label="주문 금액">
            <dl>
              <div>
                <dt>총 주문금액</dt>
                <dd>{money(merchandise)}</dd>
              </div>
              <div>
                <dt>총 부가세</dt>
                <dd>{money(0)}</dd>
              </div>
              <div>
                <dt>총 배송비</dt>
                <dd>{money(0)}</dd>
              </div>
              <div className="is-due">
                <dt>결제예정금액</dt>
                <dd>{money(merchandise)}</dd>
              </div>
            </dl>
            <div className="cart-order">
              <button type="button">전체 상품 주문</button>
              <button type="button" disabled={chosen.length === 0}>
                선택 상품 주문
              </button>
              <button type="button" disabled={chosen.length === 0}>
                선택 상품 선물
              </button>
            </div>
          </aside>
        )}
      </div>
    </section>
  );
}
