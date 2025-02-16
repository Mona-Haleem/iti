import { createContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [Language, setLanguage] = useState("ltr");
  return (
    <LanguageContext.Provider value={{ Language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
