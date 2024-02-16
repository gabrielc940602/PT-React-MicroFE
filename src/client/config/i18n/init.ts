import i18n from "../../../server/config-server/render/i18n/init";

if (typeof window !== "undefined") {
    const windowCustom = window as typeof window & { initialLanguage: string };

    i18n.init({
        fallbackLng: windowCustom.initialLanguage,
        ns: ["mainModule"],
        defaultNS: "mainModule",
        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    });
}
export default i18n;
