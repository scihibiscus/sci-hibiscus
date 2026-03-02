import React from "react";
import Link from "next/link";
import Search from "@/utils/Icons/Search";
import styles from "../../styles/ReUsables/button.module.scss";

const ButtonSearch = ({
  text,
  backColor,
  hoverColor,
  textColor,
  thColor,
  iconColor,
  ihColor,
  link,
}: {
  text: string;
  backColor: string;
  hoverColor: string;
  textColor: string;
  thColor: string;
  iconColor: string;
  ihColor: string;
  link?: string;
}) => {
  const buttonStyle = {
    "--background": backColor,
    "--backhover": hoverColor,
    "--color": textColor,
    "--colorhover": thColor,
    "--iconcolor": iconColor,
    "--iconhover": ihColor,
  } as React.CSSProperties;

  return link ? (
    <Link href={link} className={styles.button} style={buttonStyle}>
      <span>{text}</span>
      <div className={styles.bicon}>
        <div className={styles.bicon__wrapper}>
          <div className={styles.icons}>
            <Search />
          </div>
          <div className={styles.icons}>
            <Search />
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <div className={styles.button} style={buttonStyle}>
      <span>{text}</span>
      <div className={styles.bicon}>
        <div className={styles.bicon__wrapper}>
          <div className={styles.icons}>
            <Search />
          </div>
          <div className={styles.icons}>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonSearch;
