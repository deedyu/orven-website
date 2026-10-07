import { motion } from "framer-motion";
import { brand, fragrances } from "../data/content.js";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import useReveal, { ease } from "../hooks/useReveal.js";
import Media from "./Media.jsx";
import SoftImage from "./SoftImage.jsx";
import "./Collection.css";

export default function Collection() {
  const reduce = usePrefersReducedMotion();
  const head = useReveal();

  return (
    <section className="collection" id="editorial" aria-labelledby="collection-title">
      <div className="wrap">
        <motion.header className="collection-head" {...head}>
          <p className="eyebrow">{brand.collectionEyebrow}</p>
          <h2 id="collection-title">
            {brand.collectionTitle.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
        </motion.header>

        <div className="frag-list">
          {fragrances.map((item) => (
            <motion.article
              key={item.id}
              className={`frag frag--${item.id}`}
              tabIndex={0}
              aria-label={`${item.index} ${item.name}`}
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 22 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "0px 0px -10% 0px" },
                    transition: { duration: 0.9, ease },
                  })}
            >
              <div className="frag-visual">
                <SoftImage>
                  <Media
                    src={item.src}
                    alt={item.alt}
                    placeholder={item.placeholder}
                    fit="contain"
                  />
                </SoftImage>
              </div>
              <div className="frag-copy">
                <p className="frag-index">{item.index}</p>
                <h3>{item.name}</h3>
                <p className="frag-family" lang="ko">
                  {item.family}
                </p>
                <dl className="pyramid">
                  <div>
                    <dt>Top</dt>
                    <dd lang="ko">{item.pyramid.top}</dd>
                  </div>
                  <div>
                    <dt>Heart</dt>
                    <dd lang="ko">{item.pyramid.heart}</dd>
                  </div>
                  <div>
                    <dt>Base</dt>
                    <dd lang="ko">{item.pyramid.base}</dd>
                  </div>
                </dl>
                <p className="frag-keys" lang="ko">
                  {item.keywords.join(" · ")}
                </p>
                <div
                  className="swatches"
                  role="img"
                  aria-label={item.colorNames.join(", ")}
                >
                  {item.colors.map((color) => (
                    <span key={color} style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
