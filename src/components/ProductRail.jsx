import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { catalog, isNewArrival } from "../data/content.js";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import useReveal, { ease } from "../hooks/useReveal.js";
import Media from "./Media.jsx";
import AddToCart from "./AddToCart.jsx";
import "./ProductRail.css";

function RailCard({ item, reduce }) {
  return (
    <motion.article
      className="rail-item"
      {...(reduce
        ? {}
        : {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "0px 0px -8% 0px" },
            transition: { duration: 0.85, ease },
          })}
    >
      <Link className="rail-open" to={`/product/${item.id}`}>
        <div className="rail-visual">
          <Media
            src={item.src}
            alt={item.alt}
            placeholder={item.placeholder}
            fit="contain"
          />
        </div>
      </Link>
      <div className="rail-line">
        <Link className="rail-meta" to={`/product/${item.id}`}>
          <h3>{item.name}</h3>
          <p lang="ko">{item.product}</p>
          <p>{item.volume}</p>
        </Link>
        <AddToCart item={item} />
      </div>
      <p className="rail-price">
        <Link to={`/product/${item.id}`}>{item.price}</Link>
      </p>
    </motion.article>
  );
}

export default function ProductRail({ id, titleId, title, tag, label, limit, rows = 1 }) {
  const reduce = usePrefersReducedMotion();
  const head = useReveal();
  const scrollerRef = useRef(null);
  const [thumb, setThumb] = useState({ width: 100, left: 0 });
  let items = (
    tag === "new"
      ? catalog.filter((item) => isNewArrival(item))
      : catalog.filter((item) => item.tags?.includes(tag) && !item.placeholder)
  ).slice();
  if (tag === "new") items.reverse();
  if (limit) items = items.slice(0, limit);

  const columns =
    rows === 2
      ? Array.from({ length: Math.ceil(items.length / 2) }, (_, index) =>
          [items[index], items[index + Math.ceil(items.length / 2)]].filter(Boolean),
        )
      : [];

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return undefined;
    const update = () => {
      const width = node.scrollWidth ? (node.clientWidth / node.scrollWidth) * 100 : 100;
      const left = node.scrollWidth ? (node.scrollLeft / node.scrollWidth) * 100 : 0;
      setThumb({ width, left });
    };
    update();
    node.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => {
      node.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [items.length, rows]);

  const onKeyDown = (event) => {
    const node = scrollerRef.current;
    if (!node) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      node.scrollBy({ left: 280, behavior: reduce ? "auto" : "smooth" });
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      node.scrollBy({ left: -280, behavior: reduce ? "auto" : "smooth" });
    }
  };

  return (
    <section className="rail" id={id} aria-labelledby={titleId}>
      <motion.header className="wrap rail-head" {...head}>
        <h2 id={titleId}>{title}</h2>
      </motion.header>

      <div className="rail-scroll">
        <div
          className={rows === 2 ? "rail-scroller is-double" : "rail-scroller"}
          ref={scrollerRef}
          tabIndex={0}
          role="region"
          aria-label={label}
          onKeyDown={onKeyDown}
        >
          {rows === 2
            ? columns.map((column) => (
                <div className="rail-pair" key={column[0].id}>
                  {column.map((item) => (
                    <RailCard key={item.id} item={item} reduce={reduce} />
                  ))}
                </div>
              ))
            : items.map((item) => <RailCard key={item.id} item={item} reduce={reduce} />)}
        </div>
        {thumb.width < 99.5 && (
          <div className="rail-linebar" aria-hidden="true">
            <span style={{ width: `${thumb.width}%`, left: `${thumb.left}%` }} />
          </div>
        )}
      </div>
    </section>
  );
}
