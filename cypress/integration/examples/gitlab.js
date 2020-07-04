/// <reference types="cypress" />
context("Gitlab", () => {
  beforeEach(() => {
    cy.visit("https://about.gitlab.com/");
  });
  it("sign in", () => {
    cy.wait(5000);
    cy.get(
      ".navbar-right > ul > .sign-up-container > :nth-child(2) > .main-nav-link"
    ).click();
    cy.get("#user_login").type("jirawan1932543");
    cy.get("#user_password").type("Ji1223355hujjvf");
    cy.get("#new_user > .submit-container > .btn").click();
    cy.get(".project-name").click();
    cy.contains('Issues').trigger('mouseover')
    // cy.get(".shortcuts-issues > .nav-icon-container > svg").trigger('mouseover');
  });
});
