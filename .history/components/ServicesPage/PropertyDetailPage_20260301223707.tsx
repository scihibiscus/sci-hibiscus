import React from "react";
import Footer from "../Navigation/Footer";
import TranslateLoader from "../Navigation/TranslateLoader";

const PropertyDetailPage = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  //Translating State
  const [localState, setLocalState] = useState("Initial State");
  const [animFinished, setAnimFinished] = useState(false);

  const [lenis, setLenis] = useState<Lenis | null>(null);
  const newsletterRef = useRef<HTMLDivElement | null>(null);
  return <div>PropertyDetailPage</div>;
};

export default PropertyDetailPage;
