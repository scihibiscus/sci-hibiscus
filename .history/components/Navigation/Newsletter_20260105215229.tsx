import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/Navigation/newsletter.module.scss";

const Newsletter = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const formRef = useRef<HTMLFormElement | null>(null);

  const [buttonText, setButtonText] = useState(t("Navigation:subscribe"));

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //Form Data
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string | null;

    // Change button text and show "Submitting..."
    setButtonText(t("ContactPage:sending"));
    setIsSubmitting(true);

    try {
      const response = await fetch(`/${currentLocale}/api/newsletter`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email
        }),
      });
      if (response.ok) {
        // On success, update button text
        setButtonText(t("Navigation:success"));
        // Reset form after a successful submission
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        // If API response is not ok, show error
        setButtonText("Error");
      }
    } catch (error) {
      console.error("Error during form submission", error);
      setButtonText("Error");
      setIsSubmitting(false);
      
    } finally {
      // After 3 seconds, reset the button text to "Submit form"
      setIsSubmitting(false); // Enable the button again
      setTimeout(() => {
        setButtonText(t("Navigation:subscribe"));
      }, 5000);
    }
  };

  return (
    <form
      className={styles.form}
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <div className={styles.main__input}>
        <span className={styles.email}>Email</span>
        <div className={styles.input__wrap}>
          <input
            className={styles.input}
            type="email"
            name="Email"
            placeholder="email@domain.com"
            required
            onBlur={handleFocus}
            data-focused={focused.toString()}
          />
          <button type="submit" className={styles.button}>
            {buttonText}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Newsletter;
