// components/HighlightText.tsx
import React from "react";
import styles from "../styles/ReUsables/highlight.module.scss"

type Props = {
  text: string;
  words: string[]; // assurez-vous de passer bien un tableau de string
};

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const HighlightText: React.FC<Props> = ({ text, words }) => {
  if (!text) return <>{text}</>;

  // Type guard : on s'assure que chaque élément est bien une string non vide
  const safeWords = words.filter(
    (w): w is string => typeof w === "string" && w.trim().length > 0
  );

  if (safeWords.length === 0) return <>{text}</>;

  const escaped = safeWords.map(escapeRegex);
  const pattern = `(${escaped.join("|")})`;
  const splitRegex = new RegExp(pattern, "gi");
  const exactRegex = new RegExp(`^(${escaped.join("|")})$`, "i");

  const parts = text.split(splitRegex);

  return (
    <>
    <div>
      
    </div>
      {parts.map((part, i) =>
        exactRegex.test(part) ? (
          <span key={i}>{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

export default HighlightText;
