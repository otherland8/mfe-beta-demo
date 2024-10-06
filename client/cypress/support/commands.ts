/// <reference types="cypress" />

import { mount } from "cypress/react";

Cypress.Commands.add("mount", mount);

Cypress.Commands.add(
	"dataCy",
	{ prevSubject: ["optional"] },
	(
		subject: Cypress.JQueryWithSelector<HTMLElement> | void,
		identifier: string,
		options?: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Shadow>,
	) => {
		const selector = `[data-cy*="${identifier}"]`;
		return subject ? cy.wrap(subject).find(selector, options) : cy.get(selector, options);
	},
);
