import { use as i18nUse } from "i18next";
import { initReactI18next } from "react-i18next";

import enGB from "~/strings/strings-en-GB.json";

export const defaultNamespace = "translation";

export const resources = {
	"en-GB": { [defaultNamespace]: enGB },
};

export const initializeTranslationService = () =>
	i18nUse(initReactI18next).init({
		resources,
		lng: "en-GB",
		keySeparator: ".",
		nsSeparator: false,
		interpolation: {
			escapeValue: false,
		},
	});
