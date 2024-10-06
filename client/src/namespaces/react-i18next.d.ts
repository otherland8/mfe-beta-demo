import { defaultNamespace, resources } from "~/utilities/react-i18next";

declare module "i18next" {
	interface CustomTypeOptions {
		defaultNS: typeof defaultNamespace;
		resources: (typeof resources)["en-GB"];
	}
}
