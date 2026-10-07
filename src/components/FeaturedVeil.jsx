import { motion } from "framer-motion";
import { featured } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";
import Media from "./Media.jsx";
import SoftImage from "./SoftImage.jsx";
import "./FeaturedVeil.css";

export default function FeaturedVeil() {
  const reveal = useReveal();
  const [primary, secondary] = featured.details;

  return (
    <section className="featured" aria-labelledby="featured-title">
      <motion.div className="wrap featured-layout" {...reveal}>
        <div className="featured-copy">
          <p className="eyebrow">{featured.index}</p>
          <h2 id="featured-title">{featured.name}</h2>
          <p className="featured-headline">{featured.headline}</p>
          <p className="featured-body" lang="ko">
            {featured.description}
          </p>
          <ul className="keywords">
            {featured.keywords.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>
        </div>

        <div className="featured-main">
          <SoftImage className="featured-main-frame">
            <Media
              src={featured.main.src}
              alt={featured.main.alt}
              placeholder={featured.main.placeholder}
              fit="contain"
            />
          </SoftImage>
        </div>

        <div className="featured-details">
          <div className="detail detail-a">
            <Media
              src={primary.src}
              alt={primary.alt}
              placeholder={primary.placeholder}
              fit="cover"
            />
          </div>
          <div className="detail detail-b">
            <Media
              src={secondary.src}
              alt={secondary.alt}
              placeholder={secondary.placeholder}
              fit="cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
