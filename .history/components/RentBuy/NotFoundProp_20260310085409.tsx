import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/RentBuyPage/propertyhero.module.scss";

const NotFoundProp = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <div className={styles.not__found}>
      <h3 className={styles.nf__h3}>{t("ServicesPage:nfheader")}</h3>
      <p className={styles.nf__p}>{t("ServicesPage:nfheader")}</p>
      <div className={styles.nf__cta}>

      </div>
    </div>
  );
};

export default NotFoundProp;
