import React from "react";
import Whatsapp from "@/utils/Icons/Whatsapp";
import styles from "../../styles/ReUsables/button.module.scss";

const WhatsappButton = ({
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

  return (
    <div className={styles.button2}>
      <span>{text}</span>
      <div className={styles.bicon}>
        <div className={styles.bicon__wrapper}>
          <div className={styles.icons}>
            <Whatsapp />
          </div>
          <div className={styles.icons}>
            <Whatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsappButton;
