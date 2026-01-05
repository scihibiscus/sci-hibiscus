import type { Metadata } from "next";
import localFont from "next/font/local";
import TranslationsProvider from "@/utils/TranslationsProvider";
import initTranslations from "../i18n";
import CookieConsent from "@/components/ReUsables/CookieConsent";
import "../../styles/globals.scss";

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { locale } = await params;
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: t("Navigation:homemetatitle"),
    description: t("Navigation:metadesc"),
    applicationName: "Sci Hibiscus",
    twitter: {
      card: "summary_large_image",
    },
  };
}

const regular = localFont({
  src: "../fonts/HelveticaNowDisplay-Regular.ttf",
  variable: "--regular-font",
});

const medium = localFont({
  src: "../fonts/HelveticaNowDisplay-Medium.ttf",
  variable: "--medium-font",
});

const bold = localFont({
  src: "../fonts/HelveticaNowDisplay-Bold.ttf",
  variable: "--bold-font",
});

type Props = {
  params: Promise<{ locale: string }>;
};

/**Translations */
const i18nNamespaces = [
  "Navigation",
  "HomePage",
  "ProjectsPage",
  "BuylandPage",
  "BlogPage",
  "ServicesPage",
  "PrivacyPage",
  "AboutPage",
  "CareerPage",
  "ContactPage",
];

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // ① Await the promise:
  const { locale } = await params;

  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang={locale}>
      <body
        className={`${regular.variable} ${medium.variable} ${bold.variable}`}
      >
        <TranslationsProvider
          resources={resources}
          locale={locale}
          namespaces={i18nNamespaces}
        >
          {children}
          <CookieConsent />
        </TranslationsProvider>
      </body>
    </html>
  );
}
