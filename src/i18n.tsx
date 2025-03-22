import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import translationEnglish from "./Translations/English/translation.json";
import translationSpanish from "./Translations/Danish/translation.json";

const resources = {
    en: {
       translation: translationEnglish,
   },
    dn: {
       translation: translationSpanish,
   },
    
}



i18next
.use(initReactI18next)
.init({
  resources,
  lng:"en", //default language
});

export default i18next;