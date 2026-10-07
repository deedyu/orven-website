import { newCollection } from "../data/content.js";
import Media from "./Media.jsx";
import "./NewCollection.css";

export default function NewCollection() {
  return (
    <section className="new-collection" aria-labelledby="new-collection-title">
      <h2 id="new-collection-title">New Collection</h2>
      <Media
        src={newCollection.src}
        alt={newCollection.alt}
        fit="contain"
      />
    </section>
  );
}
