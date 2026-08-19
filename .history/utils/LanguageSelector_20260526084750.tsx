"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
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
  const nextLocale = currentLocale === "fr" ? "en" : "fr";

  const pathname = usePathname(); // path without query
  const router = useRouter();

  const setLocaleCookie = (newLocale: string) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
  };

  // Replace locale prefix and also mapped path segments, return new pathname (no search/hash)
  const computeLocalizedPathname = (newLocale: string): string => {
    // Prefer using window.location.pathname when available (safer for full path).
    const currentFullPath = typeof window !== "undefined" ? window.location.pathname : pathname || "/";

    // Replace or add locale prefix
    // If path starts with /fr or /en
    const allowed = ["fr", "en"];
    const regex = new RegExp(`^/(${allowed.join("|")})(?=/|$)`);
    let newPathname = currentFullPath;

    if (regex.test(currentFullPath)) {
      newPathname = currentFullPath.replace(regex, `/${newLocale}`);
    } else {
      // prefix it
      newPathname = `/${newLocale}${currentFullPath.startsWith("/") ? "" : "/"}${currentFullPath}`;
    }

    // Map of localized segments to swap (fr <-> en)
    const mappings: Array<{ fr: string; en: string }> = [
      { fr: "/projets", en: "/projects" },
      { fr: "/projets-actuels", en: "/current-projects" },
      { fr: "/en-planification", en: "/in-planning" }, // keep your original naming
      { fr: "/offrir-terrain", en: "/offer-land" },
      { fr: "/confidentialite", en: "/privacy-policy" },
      { fr: "/a-propos", en: "/about" },
      { fr: "/emploi", en: "/career" },
      // add more pairs if you have more translated slugs
    ];

    // Replace segments based on target locale
    mappings.forEach((m) => {
      if (newLocale === "fr") {
        // convert en -> fr where present
        if (newPathname.includes(m.en)) newPathname = newPathname.replace(m.en, m.fr);
      } else {
        // convert fr -> en where present
        if (newPathname.includes(m.fr)) newPathname = newPathname.replace(m.fr, m.en);
      }
    });

    return newPathname;
  };

  const handleToggle = () => {
    const next = nextLocale;

    // UI state
    setLocalState?.("Translating State");

    // Cookie
    setLocaleCookie(next);

    // Update i18next first so UI strings re-render quickly (optional)
    i18n.changeLanguage(next);

    // Compute localized pathname (without search/hash)
    const localizedPath = computeLocalizedPathname(next);

    // Preserve search and hash (very important)
    const search = typeof window !== "undefined" ? window.location.search : "";
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    const finalUrl = `${localizedPath}${search}${hash}`;

    // // Use next/router navigation so app router handles it (client-side)
    // router.push(finalUrl);
        // Remplace l'URL sans recharger (garde l'historique)
    history.pushState(null, "", finalUrl);
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
