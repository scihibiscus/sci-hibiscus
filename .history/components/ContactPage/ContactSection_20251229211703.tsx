import React from "react";
import { useTranslation } from "react-i18next";
import ContactBox from "./ContactBox";
import styles from "../../styles/ContactPage/contactsection.module.scss";

const ContactSection = () => {
  const { t } = useTranslation();

  const FormFields = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "John Doe",
      errorMessage: t("ContactPage:nameerror"),
      required: true,
      minlength: 3,
      inputState: true,
      label: t("ContactPage:namelabel")
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "example@domain.com",
      errorMessage: t("Navigation:emailerror"),
      required: true,
      inputState: true,
      label: "Email"
    },
    {
      id: 3,
      name: "reference",
      type: "tel",
      placeholder: t("Navigation:reference"),
      required: false,
      minlength: 5,
      inputState: true,
    },
    {
      id: 4,
      name: "tellmore",
      type: "text",
      placeholder: t("Navigation:tellmore"),
      errorMessage: t("Navigation:messageerror"),
      required: true,
      minlength: 70,
      inputState: false,
    },
  ];

  return (
    <div className={styles.cs__section}>
      <div className={`container ${styles.cs__container}`}>
        <div className={styles.cs__left}>
          <ContactBox />
        </div>
        <div className={styles.cs__right}></div>
      </div>
    </div>
  );
};

export default ContactSection;
