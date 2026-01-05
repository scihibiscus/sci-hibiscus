import React from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import styles from "../styles/Navigation/languageselector.module.scss";

const LanguageSelector = ({
  backColor,
  hoverColor,
  textColor,
  thColor,
  setLocalState,
}: {
  backColor: string;
  hoverColor: string;
  textColor: string;
  thColor: string;
  setLocalState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const buttonStyle = {
    "--background": backColor,
    "--backhover": hoverColor,
    "--color": textColor,
    "--colorhover": thColor,
  } as React.CSSProperties;

  const { i18n } = useTranslation();
  const currentLocale = (i18n.language || "fr").toLowerCase();
  const currentPathname = usePathname();
  const nextLocale = currentLocale === "fr" ? "en" : "fr";

  const setLocaleCookie = (newLocale: string) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
  };

  const updatePathnameLocalePrefix = (newLocale: string) => {
    // Remplace le préfixe /fr ou /en si présent, sinon ajoute le préfixe
    const allowed = ["fr", "en"];
    let newPathname = currentPathname;

    // Si le pathname commence par /fr ou /en, on remplace, sinon on le préfixe
    const regex = new RegExp(`^/(${allowed.join("|")})(?=/|$)`);
    if (regex.test(currentPathname)) {
      newPathname = currentPathname.replace(regex, `/${newLocale}`);
    } else {
      // éviter double slash
      newPathname = `/${newLocale}${
        currentPathname.startsWith("/") ? "" : "/"
      }${currentPathname}`;
    }

    // Check if the current page is 'projets' or 'projects'
    if (newPathname.includes("/projets") || newPathname.includes("/projects")) {
      // Adjust the pathname based on the new locale
      newPathname =
        newLocale === "fr"
          ? newPathname.replace("/projects", "/projets")
          : newPathname.replace("/projets", "/projects");
    }

    // Check if the current page is 'projets actuels' or 'actual projects'
    if (
      newPathname.includes("/projets-actuels") ||
      newPathname.includes("/current-projects")
    ) {
      // Adjust the pathname based on the new locale
      newPathname =
        newLocale === "fr"
          ? newPathname.replace("/current-projects", "/projets-actuels")
          : newPathname.replace("/projets-actuels", "/current-projects");
    }

    // Check if the current page is 'en plannifcation' or 'in planning'
    if (
      newPathname.includes("/en-planification") ||
      newPathname.includes("/in-planning")
    ) {
      // Adjust the pathname based on the new locale
      newPathname =
        newLocale === "fr"
          ? newPathname.replace("/in-planning", "/projets-actuels")
          : newPathname.replace("/projets-actuels", "/in-planning");
    }

    // Remplace l'URL sans recharger (garde l'historique)
    history.pushState(null, "", newPathname);

    // update i18next language so client strings rerender
    i18n.changeLanguage(newLocale);
  };

  const handleToggle = () => {
    const nextLocale = currentLocale === "fr" ? "en" : "fr";

    // Indiquer état de traduction côté UI (optionnel)
    setLocalState?.("Translating State");

    // Cookie
    setLocaleCookie(nextLocale);

    // Mettre à jour le pathname (préfixe locale)
    updatePathnameLocalePrefix(nextLocale);

    // Changer la langue i18next pour re-render des chaînes
    i18n.changeLanguage(nextLocale);
  };
  return (
    <div
      className={styles.languageselector}
      style={buttonStyle}
      onClick={handleToggle}
    >
      <span className={styles.language}>{nextLocale.toUpperCase()}</span>
    </div>
  );
};

export default LanguageSelector;
