import i18n, { InitOptions } from "i18next";

// import LanguageDetector from "i18next-browser-languagedetector";
import resources from "../../../../config/i18n/translations";

const options = {
    resources,
    supportedLngs: Object.keys(resources),
    ns: ["mainModule"],
    defaultNS: "mainModule",
    // load: "languageOnly",
    saveMissing: true,
    interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },

    useSuspense:
        typeof process !== "undefined" ? process && !process.release : "",
} as InitOptions<unknown>;

// initialize if not already initialized
if (!i18n.isInitialized) {
    i18n.init(options);
}

export default i18n;
