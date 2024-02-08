import { createContext, useContext, useState } from "react";
import enTranslations from "../../assets/translations/en";
import frTranslations from "../../assets/translations/fr";

const LanguageContext = createContext();

const availableLanguages = ["en", "fr"];

const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const setLanguage = (language) => {
    if (availableLanguages.includes(language)) {
      setCurrentLanguage(language);
    } else {
      console.warn(
        `Language ${language} is not available. Defaulting to 'en'.`
      );
      setCurrentLanguage("en");
    }
  };

  const getTranslation = (key) => {
    const translations =
      currentLanguage === "en" ? enTranslations : frTranslations;
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, setLanguage, getTranslation }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  return useContext(LanguageContext);
};

export { LanguageProvider, useLanguage };
