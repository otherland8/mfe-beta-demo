import "@cy/support/commands";
import "~/css/index.scss";

import { mount } from "cypress/react";

import { initializeTranslationService } from "~/utilities/react-i18next";

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Custom command to get an element by it's `data-cy` attribute
			 * @example cy.dataCy("data-cy-value")
			 * @example cy.dataCy("data-cy-value", { includeShadowDom: true })
			 * @example cy.get("some-element").dataCy("data-cy-value")
			 */
			dataCy(
				value: string,
				options?: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Shadow>,
			): Chainable<JQuery<HTMLElement>>;

			mount: typeof mount;
		}
	}
}

initializeTranslationService();
