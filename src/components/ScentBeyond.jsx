import { motion } from "framer-motion";
import { brand, forms } from "../data/content.js";
import useReveal, { ease } from "../hooks/useReveal.js";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import Media from "./Media.jsx";
import "./ScentBeyond.css";

export default function ScentBeyond() {
  const reveal = useReveal();
  const reduce = usePrefersReducedMotion();

  return (
    <section className="beyond" aria-labelledby="beyond-title">
      <div className="wrap">
        <motion.div {...reveal}>
          <p id="beyond-title" className="beyond-line">
            {brand.beyondLine}
          </p>
          <p className="beyond-note" lang="ko">
            {brand.beyondNote}
          </p>
        </motion.div>
        <div className="beyond-grid">
          {forms.map((item) => (
            <motion.figure
              key={item.id}
              className={`form form-${item.id}`}
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 18 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "0px 0px -8% 0px" },
                    transition: { duration: 0.9, ease },
                  })}
            >
              <div className="form-frame">
                <Media
                  src={item.src}
                  alt={item.alt}
                  placeholder={item.placeholder}
                  fit={item.fit}
                />
              </div>
              <figcaption>
                <span>ORVEN {item.code}</span>
                {item.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <p className="beyond-lip" lang="ko">
          {brand.lipNote}
        </p>
      </div>
    </section>
  );
}
