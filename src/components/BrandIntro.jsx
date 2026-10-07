import { motion } from "framer-motion";
import { brand } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";
import "./BrandIntro.css";

export default function BrandIntro() {
  const reveal = useReveal();

  return (
    <section className="brand" id="about" aria-labelledby="about-title">
      <motion.div className="wrap brand-grid" {...reveal}>
        <div>
          <p className="eyebrow">
            {brand.name} · {brand.korean}
          </p>
          <h2 id="about-title">
            {brand.introTitle.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
        </div>
        <div className="brand-text" lang="ko">
          <p className="brand-copy">{brand.introBody}</p>
          <p className="brand-core">{brand.core}</p>
        </div>
      </motion.div>
    </section>
  );
}
