import React from "react";
import Link from "next/link";
import Arrow from "@/utils/Icons/Arrow";
import styles from "../../styles/ReUsables/button.module.scss";

const Button = ({
  text,
  backColor,
  hoverColor,
  textColor,
  thColor,
  iconColor,
  ihColor,
}: {
  text: string;
  backColor: string;
  hoverColor: string;
  textColor: string;
  thColor: string;
  iconColor: string;
  ihColor: string;
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
    <Link href="/" className={styles.button} style={}>
      <span>{text}</span>
      <div className={styles.bicon}>
        <div className={styles.bicon__wrapper}>
          <div className={styles.icons}>
            <Arrow />
          </div>
          <div className={styles.icons}>
            <Arrow />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Button;
