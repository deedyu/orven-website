import { motion } from "framer-motion";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import { ease } from "../hooks/useReveal.js";

export default function SoftImage({ children, className = "" }) {
  const reduce = usePrefersReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ scale: 1.03 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1.3, ease }}
    >
      {children}
    </motion.div>
  );
}
