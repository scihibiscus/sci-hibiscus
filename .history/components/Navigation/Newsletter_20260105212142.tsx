import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/Navigation/newsletter.module.scss";

const Newsletter = () => {
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement | null>(null);

  const [buttonText, setButtonText] = useState(t("ContactPage:send"));

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      setFocused(false);
    }
  }, [isSubmitting]);

  const handleFocus = () => {
    if (!isSubmitting) {
      // Skip onBlur during form reset/submission
      setFocused(true);
    }
  };

  return (
    <form action="" className={styles.form}>
      <div className={styles.main__input}>
        <span className={styles.email}>Email</span>
        <div className={styles.input__wrap}>
          <input
            className={styles.input}
            type="email"
            name="Email"
            placeholder="email@domain.com"
          />
          <button type="submit" className={styles.button}>
            {t("Navigation:subscribe")}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Newsletter;
