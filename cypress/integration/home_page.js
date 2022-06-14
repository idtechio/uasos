/* eslint-disable no-undef */

describe("The home page when user is not signed in", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  after(() => {
    cy.logout();
  });

  it("successfully loads and contains headers", () => {
    cy.get("h1").should(
      "contain",
      "We help to find shelter for the victims of the war in Ukraine"
    );
    cy.get("h1").should("contain", "Partners supporting the initiative");
    cy.get("h1").should("contain", "How does it work?");
    cy.get("h1").should("contain", "Would you like to help?");
  });

  it("sign in button redirects to sign in page", () => {
    cy.contains("Create an account").click();
    cy.url().should("include", "/signin");
  });

  it("Public shelter button redirects to public shelters page", () => {
    cy.contains("Public shelters").click();
    cy.url().should("include", "/public-shelters");
  });

  it("See all partners button redirects to partners page", () => {
    cy.contains("See all partners").click();
    cy.url().should("include", "/partners");
  });

  it("Propose a shelter button redirects to sign in page if user is not logged in", () => {
    cy.contains("Propose a shelter").click();
    cy.url().should("include", "/signin");
  });
});

describe("The home page when user is signed in", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });

  afterEach(() => {
    cy.logout();
  });

  it("Propose a shelter button redirects to create host page if user is logged in", () => {
    cy.contains("Propose a shelter").click();
    cy.url().should("include", "/host");
  });
});
