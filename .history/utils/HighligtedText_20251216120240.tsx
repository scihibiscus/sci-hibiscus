// components/HighlightText.jsx
import React from "react";


export default function HighlightText({ text = "", words = [], className = "highlight" }) {
  if (!text || !words || words.length === 0) return <>{text}</>;

  // Échapper les mots pour construire une regex sûre
  const escaped = words
    .filter(Boolean)
    .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

  if (escaped.length === 0) return <>{text}</>;

  // Regex qui capture les mots ciblés (pour conserver les séparateurs)
  const pattern = `(${escaped.join("|")})`;
  const splitRegex = new RegExp(pattern, "gi"); // g + i pour toutes occurrences, insensible à la casse
  const exactRegex = new RegExp(`^(${escaped.join("|")})$`, "i"); // pour tester chaque fragment

  const parts = text.split(splitRegex);

  return (
    <>
      {parts.map((part, i) =>
        exactRegex.test(part) ? (
          <span key={i} className={className}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
