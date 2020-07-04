// likely want to do this in a support file
// so it's applied to all spec files
// cypress/support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

/// <reference types="cypress" />

context("Dusit", () => {
  beforeEach(() => {
    cy.visit("https://std2018.vec.go.th/web/");
  });
  it("sign in", () => {
    cy.visit("https://student.vec.go.th/web/Login.htm?mode=indexStudent");
    cy.get('#un').type("6131060017");
    cy.get('#pw').type("1100201520688");
    cy.get('.btn-group > .btn').click();
    cy.get('[data-original-index="9"] > a > .text').click();
    cy.get('.col-sm-10 > .btn').click();
    cy.get('.sidebar-menu > :nth-child(2) > a').click();
    cy.get('.row > :nth-child(1) > a').click();
    cy.get('[data-original-title="คู่มือการใช้งานระบบ"] > a').click();

  });
});
