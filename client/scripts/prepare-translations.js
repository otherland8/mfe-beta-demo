/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

const termPatternRegex = /\$(?<term>[\da-zA-Z]+)/g;
const availableLocales = [
	"ca-ES",
	"en-CA",
	"en-GB",
	"en-US",
	"fr-CA",
	"fr-FR",
	"sv-SE",
	"ja-JP",
	"en-AU",
	"es-ES",
	"ko-KR",
	"pl-PL",
];
const encoding = "utf8";

const getLocaleFilePath = (locale) => `./src/strings/strings-${locale}.json`;

(() => {
	availableLocales.forEach((locale) => {
		try {
			console.log(`Preparing translation file with locale ${locale}...`);
			console.log("================================");

			const localeFilePath = getLocaleFilePath(locale);
			const localeString = fs.readFileSync(localeFilePath, encoding);

			let changedLocaleString = localeString;

			const matches = localeString.matchAll(termPatternRegex);

			// eslint-disable-next-line
			for (const match of matches) {
				const { term } = match.groups;
				changedLocaleString = changedLocaleString.split(`$${term}`).join(`{{${term}}}`);
			}

			fs.writeFileSync(localeFilePath, changedLocaleString, encoding);
		} catch (error) {
			console.log(error);
		}

		console.log(`Done preparing translation file with locale ${locale}.
`);
	});
})();
