import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Whatsapp from "@/utils/Icons/Whatsapp";
import styles from "../../styles/ReUsables/button.module.scss";

const WhatsappButton = () => {
  const {t}= useTranslation
  return (
    <Link href={"/"} target="_blank" className={styles.button2}>
      <span>Send message</span>
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
