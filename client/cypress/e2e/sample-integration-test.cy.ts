context("Sample integration test", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("should visit page", () => {
		cy.url().should("contain", "");
	});
});
