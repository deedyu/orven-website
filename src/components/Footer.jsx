import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { brand, contact } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";
import "./Footer.css";

export default function Footer() {
  const reveal = useReveal();

  return (
    <footer className="footer" id="contact">
      <motion.div className="wrap" {...reveal}>
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-name">
              <Link to="/">{brand.name}</Link>
            </p>
            <p className="footer-tagline">{brand.tagline}</p>
          </div>
          <div className="footer-meta">
            <a href={contact.instagram.href} target="_blank" rel="noreferrer">
              {contact.instagram.label}
            </a>
            <a href={contact.email.href}>{contact.email.label}</a>
            <p>{contact.location}</p>
          </div>
        </div>
        <p className="footer-legal">{brand.legal}</p>
      </motion.div>
    </footer>
  );
}
