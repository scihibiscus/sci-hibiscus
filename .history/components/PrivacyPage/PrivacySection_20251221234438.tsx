import React from "react";
import Lenis from "lenis";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/privacysection.module.scss";

const PrivacySection = () => {
  //Translations
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.ps__section}>
      <div className={`container ${styles.ps__container}`}>
        <div className={styles.ps__left}>
          <h3 className={styles.ps__h3}>{t("PrivacyPage:table")}</h3>
          <div className={styles.psl__list}>
            <div className={styles.list}>
              <span className={styles.lspan}>01.</span>
              <p className={styles.lp}>{t("PrivacyPage:tableone")}</p>
            </div>
            <div className={styles.list}>
              <span className={styles.lspan}>02.</span>
              <p className={styles.lp}>{t("PrivacyPage:tabletwo")}</p>
            </div>
            <div className={styles.list}>
              <span className={styles.lspan}>03.</span>
              <p className={styles.lp}>{t("PrivacyPage:tablethree")}</p>
            </div>
            <div className={styles.list}>
              <span className={styles.lspan}>04.</span>
              <p className={styles.lp}>{t("PrivacyPage:tablefour")}</p>
            </div>
            <div className={styles.list}>
              <span className={styles.lspan}>05.</span>
              <p className={styles.lp}>{t("PrivacyPage:tablefive")}</p>
            </div>
            <div className={styles.list}>
              <span className={styles.lspan}>06.</span>
              <p className={styles.lp}>{t("PrivacyPage:tablesix")}</p>
            </div>
          </div>
        </div>
        <div className={styles.ps__right}>
          <div className={styles.psr__one}>
            <h3 className={styles.ps__h3}>{t("PrivacyPage:tableone")}</h3>
            <div className={styles.pso}>
              <p>{t("PrivacyPage:one")}</p>
              <p>{t("PrivacyPage:two")}</p>
              <p className={styles.p__bold}>{t("PrivacyPage:three")}</p>
            </div>
          </div>
          <div className={styles.psr__one}>
            <h3 className={styles.ps__h3}>{t("PrivacyPage:tabletwo")}</h3>
            <div className={styles.pso}>
              <p>{t("PrivacyPage:four")}</p>
              <ul className={styles.ul}>
                <li>{t("PrivacyPage:five")}</li>
                <li>{t("PrivacyPage:six")}</li>
                <li>{t("PrivacyPage:seven")}</li>
              </ul>
            </div>
          </div>
          <div className={styles.psr__one}>
            <h3 className={styles.ps__h3}>{t("PrivacyPage:tablethree")}</h3>
            <div className={styles.pso}>
              <p>{t("PrivacyPage:eight")}</p>
              <p>{t("PrivacyPage:nine")}</p>
              <ul className={styles.ul}>
                <li>{t("PrivacyPage:ten")}</li>
                <li>{t("PrivacyPage:eleven")}</li>
                <li>{t("PrivacyPage:twelve")}</li>
              </ul>
              <p>{t("PrivacyPage:thirteen")}</p>
            </div>
          </div>
          <div className={styles.psr__one}>
            <h3 className={styles.ps__h3}>{t("PrivacyPage:tablefour")}</h3>
            <div className={styles.pso}>
              <p>{t("PrivacyPage:fourteen")}</p>
              <p>{t("PrivacyPage:fifteen")}</p>
            </div>
          </div>
          <div className={styles.psr__one}>
            <h3 className={styles.ps__h3}>{t("PrivacyPage:tablefive")}</h3>
            <div className={styles.pso}>
              <p>{t("PrivacyPage:sixteen")}</p>
            </div>
          </div>
          <div className={styles.psr__one}>
            <h3 className={styles.ps__h3}>{t("PrivacyPage:tablesix")}</h3>
            <div className={styles.pso}>
              <h4 className={styles.ps__h4}>{t("PrivacyPage:seventeen")}</h4>
              <p>{t("PrivacyPage:eighteen")}</p>
              <ul className={styles.ul}>
                <li>{t("PrivacyPage:nineteen")}</li>
                <li>{t("PrivacyPage:twenty")}</li>
                <li>{t("PrivacyPage:twentyone")}</li>
                <li>{t("PrivacyPage:twentytwo")}</li>
              </ul>
              <p>{t("PrivacyPage:twentythree")}</p>
            </div>
            <div className={styles.pso}>
              <h4 className={styles.ps__h4}>{t("PrivacyPage:twentyfour")}</h4>
              <p>{t("PrivacyPage:twentyfive")}</p>
              <ul className={styles.ul}>
                <li>{t("PrivacyPage:twentysix")}</li>
              </ul>
              <p>{t("PrivacyPage:twentyseven")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySection;
