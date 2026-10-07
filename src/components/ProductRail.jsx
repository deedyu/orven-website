import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { catalog } from "../data/content.js";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import useReveal, { ease } from "../hooks/useReveal.js";
import Media from "./Media.jsx";
import AddToCart from "./AddToCart.jsx";
import "./ProductRail.css";

export default function ProductRail({ id, titleId, title, tag, label }) {
  const reduce = usePrefersReducedMotion();
  const head = useReveal();
  const scrollerRef = useRef(null);
  const items = catalog.filter((item) => item.tags?.includes(tag) && !item.placeholder);

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

      <div
        className="rail-scroller"
        ref={scrollerRef}
        tabIndex={0}
        role="region"
        aria-label={label}
        onKeyDown={onKeyDown}
      >
        {items.map((item) => (
          <motion.article
            key={item.id}
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
        ))}
      </div>
    </section>
  );
}
