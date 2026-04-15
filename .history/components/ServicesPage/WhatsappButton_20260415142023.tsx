import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Whatsapp from "@/utils/Icons/Whatsapp";
import styles from "../../styles/ReUsables/button.module.scss";

const WhatsappButton = ({
  backColor,
  textColor,
  border,
  dropshadow,
  textmessage,
  buttontext
}: {
  backColor: string;
  textColor: string;
  border?: string;
  dropshadow?: string;
  textmessage: string,
  buttontext: string
}) => {
  const buttonStyle = {
    "--background": backColor,
    "--color": textColor,
    "--border": border,
    "--dropshadow": dropshadow
  } as React.CSSProperties;

  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const encoded = encodeURIComponent(textmessage);

  const url = `https://wa.me/237695856350?text=${encoded}`;

  return (
    <Link
      href={url}
      target="_blank"
      className={styles.button2}
      style={buttonStyle}
    >
      <span>{buttontext}</span>
      <div className={styles.bicon2}>
        <div className={styles.bicon__wrapper}>
          <div className={styles.icons}>
            <Whatsapp />
          </div>
          <div className={styles.icons}>
            <Whatsapp />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WhatsappButton;
