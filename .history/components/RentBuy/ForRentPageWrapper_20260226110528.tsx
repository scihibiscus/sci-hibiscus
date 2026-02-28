import React from "react";

const ForRentPageWrapper = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  //Translating State
  const [localState, setLocalState] = useState("Initial State");

  return <div>Wrapper</div>;
};

export default ForRentPageWrapper;
