/// <reference types="cypress" />

describe("homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays heading", () => {
    cy.get("h1").should("be.visible");
  });
});
