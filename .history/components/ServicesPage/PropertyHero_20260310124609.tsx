"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import WhatsappButton from "./WhatsappButton";
import IMAGE from "../../public/images/image2.jpg";
import { urlFor } from "@/sanity/lib/image";
import styles from "../../styles/RentBuyPage/propertyhero.module.scss";

interface PropertyProps {
  _id: string;
  area: number;
  bath?: number | null;
  parlour?: number | null;
  room?: number | null;
  price: number;
  name: string;
  propertytype: {
    nameen: string;
    namefr: string;
    slug: {
      current: string;
    };
  };
  transaction: {
    nameen: string;
    namefr: string;
    slug: {
      current: string;
    };
  };
  quarter: string;
  city: {
    cityname: string;
    slug: {
      current: string;
    };
  };
  slug: {
    current: string;
  };
  rentpricing: string;
  mainimage: {
    alt: string;
  };
  overview: {
    en: string;
    fr: string;
    _key: string;
  }[];
  otherdetails: {
    en: string;
    fr: string;
    _key: string;
  }[];
  maindetails: {
    keyEn: string;
    keyFr: string;
    valueEn: string;
    valueFr: string;
    _key: string;
  }[];
  gallery: {
    caption: string;
    type: string;
  }[];
}

const PropertyHero = ({ property }: { property: PropertyProps }) => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end start"],
  });

  //Handle Resizing Y value
  const [transform, setTransform] = useState(-120);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 540) {
        setTransform(-60);
      } else if (typeof window !== "undefined" && window.innerWidth < 750) {
        setTransform(-90);
      } else {
        setTransform(-120);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [transform, 0]);

  const keyData = {
    transac: t("ServicesPage:forrent"),
    type: t("ServicesPage:office"),
    rooms: 3,
    bath: 2,
    living: 1,
    area: 60,
  };

  //Contact Details
  const properter = "Bureau du Park";
  const message = t("ServicesPage:message", { properter });
  const buttontext = t("ServicesPage:reserve");

  return (
    <div className={styles.ph__section} ref={container}>
      <div className={styles.hero__image}>
        <motion.div className={styles.h__image} style={{ y }}>
          <Image
            fill
            quality={100}
            src={
              urlFor(property.mainimage).width(1920).url() ||
              urlFor(property.mainimage).url()
            }
            alt={`${property.name} SCI Hibiscus`}
            unoptimized
          />
        </motion.div>
        <div className={styles.hero__gradient}></div>
      </div>
      <div className={styles.hero__content}>
        <div className={`container ${styles.hs__container}`}>
          <div className={styles.hs__content}>
            <div className={styles.hsc__left}>
              <h3 className={styles.hsc__h3}>{property.name}</h3>
              <div className={styles.prop__charac}>
                {property.transaction && (
                  <span className={styles.type}>{cukeyData.transac}</span>
                )}
                {keyData.type && <span>{keyData.type}</span>}
                {keyData.rooms && (
                  <span>
                    {keyData.rooms} {t("ServicesPage:room")}
                  </span>
                )}
                {keyData.bath && (
                  <span>
                    {keyData.bath} {t("ServicesPage:bath")}
                  </span>
                )}
                {keyData.living && (
                  <span>
                    {keyData.living} {t("ServicesPage:living")}
                  </span>
                )}
                {keyData.area && <span>{keyData.area} m²</span>}
              </div>
            </div>
            <div className={styles.hsc__right}>
              <WhatsappButton
                textmessage={message}
                buttontext={buttontext}
                backColor="white"
                textColor="var(--black)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHero;
