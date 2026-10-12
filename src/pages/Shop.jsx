import { useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { catalog, isNewArrival, pages, shopNav } from "../data/content.js";
import { useCart } from "../context/CartContext.jsx";
import { BagIcon } from "../components/Icons.jsx";
import Media from "../components/Media.jsx";
import "./Pages.css";

const sorts = [
  { id: "new", label: "최신순" },
  { id: "popular", label: "인기순" },
];

const catalogOrder = new Map(catalog.map((item, index) => [item.id, index]));

function sortItems(items, sort) {
  const order = (item) => catalogOrder.get(item.id) ?? 0;
  const next = [...items];
  if (sort === "new") {
    next.sort((a, b) => order(b) - order(a));
  } else if (sort === "popular") {
    const rank = (item) => (item.tags?.includes("best") ? 0 : 1);
    next.sort((a, b) => rank(a) - rank(b) || order(a) - order(b));
  } else {
    next.sort((a, b) => order(a) - order(b));
  }
  return next;
}

export default function Shop() {
  const { category = "all" } = useParams();
  const [params] = useSearchParams();
  const { add } = useCart();
  const query = (params.get("q") || "").trim().toLowerCase();
  const current = shopNav.find((item) => item.id === category) || shopNav[0];
  const [sort, setSort] = useState("new");

  const items = useMemo(() => {
    const filtered = catalog.filter((item) => {
      const byCategory =
        category === "all" ||
        (category === "new" ? isNewArrival(item) : item.tags?.includes(category));
      if (!byCategory) return false;
      if (!query) return true;
      const hay = [item.name, item.product, item.family, item.notes].filter(Boolean).join(" ").toLowerCase();
      return hay.includes(query);
    });
    return sortItems(filtered, sort);
  }, [category, query, sort]);

  return (
    <section className="page wrap" aria-labelledby="shop-title">
      <h1 id="shop-title">{current.label}</h1>
      {query && <p className="page-lead">“{query}”</p>}
      <div className="shop-tools">
        <div className="shop-sort" role="group" aria-label="정렬">
          {sorts.map((option) => (
            <button
              key={option.id}
              type="button"
              className={sort === option.id ? "is-selected" : ""}
              aria-pressed={sort === option.id}
              onClick={() => setSort(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      {items.length === 0 ? (
        <p className="page-copy">{query ? pages.searchEmpty : pages.shopEmpty}</p>
      ) : (
        <div className="shop-list">
          {items.map((item) => {
            const title = [item.name, item.product].filter(Boolean).join(" ");
            return (
              <article key={item.id} className="shop-card">
                <div className="shop-visual">
                  <Link to={`/product/${item.id}`}>
                    <Media
                      src={item.src}
                      alt={item.alt}
                      placeholder={item.placeholder}
                      fit="contain"
                    />
                  </Link>
                  <button
                    type="button"
                    className="shop-add"
                    aria-label={`${title} 하나 담기`}
                    onClick={() => add(item, 1)}
                  >
                    <BagIcon />
                  </button>
                </div>
                <div className="shop-copy">
                  <div className="shop-title">
                    <h2>
                      <Link to={`/product/${item.id}`}>{title}</Link>
                    </h2>
                    {item.volume && <p className="shop-volume">{item.volume}</p>}
                  </div>
                  {item.price && <p className="shop-price">{item.price}</p>}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
