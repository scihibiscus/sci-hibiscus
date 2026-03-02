import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/image2.jpg";
import WhatsappButton from "./WhatsappButton";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/RentBuyPage/propabout.module.scss";

const PropertyGallery = () => {
  const { t } = useTranslation();

  const gallery = [
    IMAGE,
    IMAGE,
    IMAGE,
    IMAGE,
    IMAGE,
    IMAGE,
    IMAGE,
    IMAGE,
    IMAGE,

  ]

  return (
    <div className={`section ${styles.pa__section}`}>
      <div className={`container ${styles.pa__container2}`}>
        <HiglightedSpan text={t("ServicesPage:gallery")} />
        <div className={styles.gallery}>
          
        </div>
        <div className={styles.whatsapp}>
          <WhatsappButton
            property="Bureau du Park"
            backColor="white"
            textColor="var(--black)"
            border="1px solid rgba(0,0,0,0.15)"
            dropshadow="drop-shadow(0px 0px 5px rgba(0,0,0,0.15))"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;
