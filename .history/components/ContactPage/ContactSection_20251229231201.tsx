import React from "react";
import { useTranslation } from "react-i18next";
import ContactBox from "./ContactBox";
import styles from "../../styles/ContactPage/contactsection.module.scss";

const ContactSection = () => {
  const { t } = useTranslation();

  const contactData = [
    {
      head: "Email",
      link: "mailto:sci_hibiscus@ymail.com",
      head1: "sci_hibiscus@ymail.com",
      text: t("ContactPage:sendemail")
    },
    {
      head: t("ContactPage:phonelabel"),
      link: "tel:+237 2 22 22 24 37",
      head1: "+237 2 22 22 24 37,
      text: t("ContactPage:sendemail")
    },
    {
      head: "Email",
      link: "mailto:sci_hibiscus@ymail.com",
      head1: "sci_hibiscus@ymail.com",
      text: t("ContactPage:sendemail")
    }
  ]
  return (
    <div className={styles.cs__section}>
      <div className={`container ${styles.cs__container}`}>
        <div className={styles.cs__left}>
          <ContactBox />
        </div>
        <div className={styles.cs__right}>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
