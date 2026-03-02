import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Whatsapp from "@/utils/Icons/Whatsapp";
import styles from "../../styles/ReUsables/button.module.scss";

const WhatsappButton = ({
  property,
  backColor,
  textColor,
  border
}: {
  property: string;
  backColor: string;
  textColor: string;
}) => {
  const buttonStyle = {
    "--background": backColor,
    "--color": textColor,
  } as React.CSSProperties;

  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const message = t("ServicesPage:message", { property });
  const encoded = encodeURIComponent(message);

  const url = `https://wa.me/237699105056?text=${encoded}`;

  return (
    <Link
      href={url}
      target="_blank"
      className={styles.button2}
      style={buttonStyle}
    >
      <span>{t("ServicesPage:reserve")}</span>
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
