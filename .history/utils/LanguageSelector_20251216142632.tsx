import React from "react";
import styles from "../styles/Navigation/languageselector.module.scss";

const LanguageSelector = ({
  backColor,
  hoverColor,
  textColor,
  thColor,
}: {
  backColor: string;
  hoverColor: string;
  textColor: string;
  thColor: string;
}) => {
  const buttonStyle = {
    "--background": backColor,
    "--backhover": hoverColor,
    "--color": textColor,
    "--colorhover": thColor,
    "--iconcolor": iconColor,
    "--iconhover": ihColor,
  } as React.CSSProperties;
  return (
    <div className={styles.languageselector}>
      <span className={styles.language}>EN</span>
    </div>
  );
};

export default LanguageSelector;
