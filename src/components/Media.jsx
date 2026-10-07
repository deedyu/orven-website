import { useState } from "react";

export default function Media({
  src,
  alt,
  className = "",
  placeholder = false,
  priority = false,
  fit = "cover",
}) {
  const [failed, setFailed] = useState(false);

  if (placeholder || failed) {
    return (
      <div
        className={`media-fallback ${className}`.trim()}
        role="img"
        aria-label={alt}
      >
        <span>{src}</span>
      </div>
    );
  }

  return (
    <img
      className={`fit-${fit} ${className}`.trim()}
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      onError={() => setFailed(true)}
    />
  );
}
