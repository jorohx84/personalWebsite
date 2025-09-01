
import { translations } from "../i18n";

import { createContext, useContext, useState } from "react";


const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => localStorage.getItem("lang") || "de");

  const setLang = (newLang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (keyPath) => {
    return keyPath.split(".").reduce((acc, key) => acc?.[key], translations[lang]) || keyPath;
  };

  return (
    <TranslationContext.Provider value={{ t, lang, setLang }}>
      {children}
    </TranslationContext.Provider>
  );
};


export const useTranslation = () => useContext(TranslationContext);