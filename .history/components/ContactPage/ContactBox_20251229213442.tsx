"use client";

import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import FormInput from "./FormInput";
import styles from "../../styles/ContactPage/contactsection.module.scss";

const ContactBox = () => {
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      label: t("ContactPage:namelabel"),
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "example@domain.com",
      errorMessage: t("ContactPage:emailerror"),
      required: true,
      inputState: true,
      label: "Email",
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "+237 690-000-000",
      required: true,
      minlength: 5,
      inputState: true,
      label: t("ContactPage:phonelabel"),
    },
    {
      id: 4,
      name: "subject",
      type: "text",
      placeholder: t("ContactPage:subjectplace"),
      errorMessage: t("ContactPage:subjecterror"),
      required: true,
      minlength: 5,
      inputState: true,
      label: t("ContactPage:subjectlabel"),
    },
    {
      id: 5,
      name: "message",
      type: "text",
      placeholder: t("ContactPage:tellmore"),
      errorMessage: t("ContactPage:messageerror"),
      required: true,
      minlength: 70,
      inputState: false,
      label: "Message",
    },
  ];

  const firstFour = FormFields.slice(0, 4); // Gets the first 4 items
  const lastField = FormFields[4];

  return (
    <div className={styles.contactbox}>
      <div className={styles.cb__content}>
        <div className={styles.cb__top}>
          <h3 className={styles.cb__h3}>{t("ContactPage:message")}</h3>
          <p className={styles.cb__p}>{t("ContactPage:reply")}</p>
        </div>
        <div className={styles.cb__bottom}>
          <form ref={formRef} className={styles.form}>
            <div className={styles.form__form}>
              {firstFour.map((data, i) => (
                <FormInput
                  data={data}
                  key={`fs${i}`}
                  isSubmitting={isSubmitting}
                />
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
