import { motion } from "framer-motion";
import { brand, campaign } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";
import Media from "./Media.jsx";
import SoftImage from "./SoftImage.jsx";
import "./Campaign.css";

export default function Campaign() {
  const reveal = useReveal();

  return (
    <section className="campaign" id="campaign" aria-labelledby="campaign-title">
      <div className="wrap">
        <motion.div className="campaign-copy" {...reveal}>
          <h2 id="campaign-title">
            {brand.campaignTitle.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
          <p>{brand.campaignSupport}</p>
        </motion.div>
        <SoftImage className="campaign-visual">
          <Media
            src={campaign.src}
            alt={campaign.alt}
            placeholder={campaign.placeholder}
            fit="cover"
          />
        </SoftImage>
        <p className="campaign-caption">{campaign.name}</p>
      </div>
    </section>
  );
}
