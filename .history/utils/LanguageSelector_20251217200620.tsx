import React from "react";
import styles from "../styles/Navigation/languageselector.module.scss";

const LanguageSelector = ({
  backColor,
  hoverColor,
  textColor,
  thColor,
  setLocalState,
}: {
  backColor: string;
  hoverColor: string;
  textColor: string;
  thColor: string;
  setLocalState,
}) => {
  const buttonStyle = {
    "--background": backColor,
    "--backhover": hoverColor,
    "--color": textColor,
    "--colorhover": thColor,
  } as React.CSSProperties;
  return (
    <div className={styles.languageselector} style={buttonStyle}>
      <span className={styles.language}>EN</span>
    </div>
  );
};

export default LanguageSelector;
