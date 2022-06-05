/// <reference types="cypress" />

describe("homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays heading", () => {
    cy.get("h1").should("be.visible");
  });
});
