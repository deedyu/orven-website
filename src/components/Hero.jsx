import { brand, hero } from "../data/content.js";
import Media from "./Media.jsx";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <h1 className="sr-only">{brand.name}</h1>
      <div className="hero-visual">
        <div className="hero-visual-move">
          <Media
            src={hero.src}
            alt={hero.alt}
            placeholder={hero.placeholder}
            priority
            fit="contain"
          />
        </div>
      </div>
    </section>
  );
}
