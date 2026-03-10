import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/image2.jpg";
import WhatsappButton from "./WhatsappButton";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import VideoJS from "../ReUsables/VideoJS";
import styles from "../../styles/RentBuyPage/propabout.module.scss";
import { GlobalError } from "next/dist/build/templates/app-page";

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

const PropertyGallery = ({ property }: { property: PropertyProps }) => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const gallery = [
    {
      type: "img",
      src: IMAGE,
    },
    {
      type: "vid",
      src: "/video/video.mp4",
    },
    {
      type: "img",
      src: IMAGE,
    },
    {
      type: "vid",
      src: "/video/video.mp4",
    },
    {
      type: "img",
      src: IMAGE,
    },
    {
      type: "vid",
      src: "/video/video.mp4",
    },
    {
      type: "img",
      src: IMAGE,
    },
  ];

  //Contact Details
  const properter = property.name;
  const message = t("ServicesPage:message", { properter });
  const buttontext = t("ServicesPage:reserve");

  return (
    <div className={`section ${styles.pa__section2}`}>
      <div className={`container ${styles.pa__container2}`}>
        <HiglightedSpan text={t("ServicesPage:gallery")} />
        <div className={styles.project__gallery}>
          {property.gallery.map((gal, i) => {
            if (gal.type === "image") {
              return (
                <div className={styles.gallery__images} key={i}>
                  <Image
                    fill
                    quality={100}
                    src={
                      urlFor(gal.mainimage).width(1920).url() ||
                      urlFor(GlobalError).url()
                    }
                    alt="Bureau du Park"
                    placeholder="blur"
                  />
                </div>
              );
            } else {
              const videoJsOptions = {
                autoplay: true,
                muted: true,
                loop: true,
                controls: false,
                playsinline: true,
                responsive: true,
                fluid: true,
                sources: [
                  {
                    src: gal.src, // dynamic per item
                    type: "video/mp4",
                  },
                ],
              };

              return (
                <div key={i} className={styles.video__wrapper}>
                  <VideoJS options={videoJsOptions} />
                </div>
              );
            }
          })}
        </div>
        <div className={styles.whatsapp}>
          <WhatsappButton
            buttontext={buttontext}
            textmessage={message}
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
