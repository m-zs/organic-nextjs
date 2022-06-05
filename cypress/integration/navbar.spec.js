/// <reference types="cypress" />

describe("navbar", () => {
  describe("desktop", () => {
    it("should display navigation", () => {
      cy.visit("/");
      cy.get("header").should("be.visible");
    });

    it("should change locale to pl", () => {
      cy.visit("/");
      cy.get("button").trigger("mouseover");
      cy.get("[data-locale=pl]").trigger("click");

      cy.location("pathname").should("eql", "/pl");
    });

    it("should change locale to en (default)", () => {
      cy.visit("/pl");
      cy.get("button").trigger("mouseover");
      cy.get("[data-locale=en]").trigger("click");

      cy.location("pathname").should("eql", "/");
    });
  });

  describe("mobile", () => {
    beforeEach(() => {
      cy.viewport(500, 800);
      cy.visit("/");
    });

    it("should display interactive hamburger button", () => {
      cy.get("nav").should("not.be.visible");
      cy.get("[data-testid=menu-toggle-btn]").trigger("click");
      cy.get("nav").should("be.visible");
    });
  });
});
