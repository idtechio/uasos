/* eslint-disable no-undef */

describe("The home page", () => {
  it("successfully loads and contains headers", () => {
    cy.visit("/");

    cy.get("h1").should(
      "contain",
      "We help to find shelter for the victims of the war in Ukraine"
    );

    cy.get("h1").should("contain", "Partners supporting the initiative");

    cy.get("h1").should("contain", "How does it work?");

    cy.get("h1").should("contain", "Would you like to help?");
  });

  it("check that all buttons works", () => {
    cy.contains("Create an account").click();

    cy.url().should("include", "/signin");

    cy.contains("Back").click();

    cy.contains("Public shelters").click();

    cy.url().should("include", "/public-shelters");

    cy.visit("/");

    cy.contains("See all partners").click();

    cy.url().should("include", "/partners");

    cy.contains("Back").click();

    cy.contains("Propose a shelter").click();

    cy.url().should("include", "/signin");
  });
});
