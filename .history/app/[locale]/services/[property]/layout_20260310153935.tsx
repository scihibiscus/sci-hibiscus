import type { Metadata } from "next";
import initTranslations from "@/app/i18n";


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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
