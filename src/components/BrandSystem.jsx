import { motion } from "framer-motion";
import { lines, philosophy, values } from "../data/content.js";
import useReveal, { ease } from "../hooks/useReveal.js";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import "./BrandSystem.css";

export default function BrandSystem() {
  const reveal = useReveal();
  const reduce = usePrefersReducedMotion();

  return (
    <section className="system" aria-labelledby="system-title">
      <div className="wrap">
        <motion.div className="system-lead" {...reveal}>
          <h2 id="system-title">Scent, continued.</h2>
          <div>
            {philosophy.map((paragraph) => (
              <p key={paragraph} lang="ko">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <ol className="values">
          {values.map((item, index) => (
            <motion.li
              key={item.name}
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 16 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "0px 0px -8% 0px" },
                    transition: { duration: 0.8, ease, delay: index * 0.04 },
                  })}
            >
              <span className="value-index">0{index + 1}</span>
              <span className="value-name">{item.name}</span>
              <span className="value-text" lang="ko">
                {item.text}
              </span>
            </motion.li>
          ))}
        </ol>

        <div className="lines">
          <h3>One scent, four lines.</h3>
          <dl>
            {lines.map((line) => (
              <div key={line.name}>
                <dt>{line.name}</dt>
                <dd lang="ko">{line.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
