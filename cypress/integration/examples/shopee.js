/// <reference types="cypress" />
context('Shopee', () => {
    beforeEach(() => {
        cy.visit('https://www.shopee.co.th')
      })
      it('click thai lang', () => {
        cy.get(':nth-child(1) > .shopee-button-outline').click()
        cy.get('.shopee-popup__close-btn > .shopee-svg-icon').click()
        cy.get('.shopee-searchbar-input__input').click()
        cy.get('.shopee-searchbar-input__input').type('mi band 5{enter}')
        // cy.get('.btn').click()
      })
})
