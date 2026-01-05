import React from "react";
import { useTranslation } from "react-i18next";
import Contact
import styles from "../../styles/ProjectsPage/procontact.module.scss";

const OtherContact = () => {
  const { t } = useTranslation();

  const contactData = [
    {
      head: "Email",
      link: "mailto:sci_hibiscus@ymail.com",
      head1: "sci_hibiscus@ymail.com",
      text: t("ContactPage:sendemail"),
    },
    {
      head: t("ContactPage:phonelabel"),
      link: "tel:+237222222437",
      head1: "+237 2 22 22 24 37",
      text: t("ContactPage:teltext"),
    },
    {
      head: t("ContactPage:loca"),
      head1: "Hibiscus Center Park, Quartier Fouda",
      text: t("ContactPage:need"),
    },
  ];

  return (
    <div className={styles.oc__section}>
      <div className={`container ${styles.oc__container}`}>
        <h3>{t("ProjectsPage:contact")}</h3>
        <div className={styles.contact__bottom}>
          {contactData.map((data, i) => (
            <ContactWrap key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherContact;
