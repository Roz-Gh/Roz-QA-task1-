/// <reference types="cypress"/>   /
describe('1', () => {
    it('r', () => {
        cy.visit("https://demo.productionready.io/#/register")
      cy.get(".text-xs-center a")
      cy.get("li.nav-item").first()
      cy.get("li.nav-item").find(".nav-link").contains("Sign up")
      cy.get("fieldset.form-group").first().next().next(2)
    cy.contains("span","© 2025. An interactive learning project from Thinkster. Code licensed under MIT.")
 cy.get(".logo-font")
 cy.get(".btn").click
 cy.get("h1")
 cy.get("div > a.navbar-brand ")
 
    });
    
    
});
