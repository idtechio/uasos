/* eslint-disable no-undef */

describe("The login page", () => {
  const email = "test@example.com";
  const password = "Test2022!";

  beforeEach(() => {
    cy.visit("/signin");
  });

  it("contains title and sign in with social buttons", () => {
    cy.get("div").should("contain", "Log in");
    cy.contains("Sign in with Facebook");
    cy.contains("Sign in with Google");
  });

  it("submit with empty form will show an error", () => {
    cy.get("input")
      .invoke("attr", "placeholder")
      .should("contain", "Address e-mail or phone number");
    cy.contains("Your phone or email is required").should("not.exist");
    cy.get("[data-testid=login-button]").click();
    cy.contains("Your phone or email is required")
      .should("exist")
      .should("be.visible");
  });

  it("submit with not valid value will show an error", () => {
    cy.get("input").type("not valid user data");
    cy.get("[data-testid=login-button]").click();
    cy.contains("Email or phone number");
  });

  it("after submitting email password input should be opened", () => {
    cy.get("input").type(email);
    cy.get("[data-testid=login-button]").click();
    cy.get("input[type=password]")
      .invoke("attr", "placeholder")
      .should("contain", "Password");
  });

  it("after deleting value from email input password input should disappear", () => {
    cy.get("input").type(email);
    cy.get("[data-testid=login-button]").click();
    cy.get("input[type=password]").should("exist");
    cy.get("input[type=text]").clear();
    cy.get("input[type=password]").should("not.exist");
  });

  it("when password input is visible lost password text and button must be visible", () => {
    cy.get("input").type("antontestuasos@gmail.com");
    cy.get("[data-testid=login-button]").click();
    cy.contains("Lost Password?");
    cy.contains("a", "click")
      .invoke("attr", "href")
      .should("contain", "/en/password-reset-init");
  });

  it("click to lost password button redirects to the forget password page", () => {
    cy.get("input").type("antontestuasos@gmail.com");
    cy.get("[data-testid=login-button]").click();
    cy.contains("a", "click").click();
    cy.url().should("contain", "/password-reset-init");
  });

  it("typing password with not enough length will show an error", () => {
    cy.get("input").type(email);
    cy.get("[data-testid=login-button]").click();
    cy.get("input[type=password]").type("1234567");
    cy.contains("Provided invalid password");
  });

  it("typing wrong password will show an error", () => {
    cy.get("input").type(email);
    cy.get("[data-testid=login-button]").click();
    cy.get("input[type=password]").type("12345678");
    cy.get("[data-testid=login-button]").click();
    cy.contains("Provided invalid password");
  });

  //TODO: Add cypress function for login and logout, add logout at the end of this it!
  /*
  it("typing correct password and submit redirects to the dashboard", () => {
    cy.get("input").type(email);
    cy.contains("div", "Log in").click();
    cy.get("input[type=password]").type(password)";
    cy.contains("div", "Log in").click();
    cy.url().should("contain", "/dashboard");
    cy.get("data-cy=menuButton").click();
    cy.contains("Log out").click();
  });
  */

  it("submitting not valid phone number should show an error", () => {
    cy.get("input[type=text]").type("+123456789");
    cy.get("[data-testid=login-button]").click();
    cy.contains("Invalid phone number");
  });

  it("register button send you to register form", () => {
    cy.contains("Register").click();
    cy.url().should("include", "/register");
  });
});
