import { postsList } from 'cypress/helpers/postsList';
import { seriesList } from 'cypress/helpers/seriesList';

describe('Home', () => {
  it('verifies links and content', () => {
    cy.viewport('iphone-x');
    cy.visit('/');

    cy.contains('TK Kinoshita').should('exist');

    postsList.forEach(({ title }) => {
      cy.get('#writings').within(() => {
        cy.contains(title).should('exist');
        cy.contains(title).click();
      });

      cy.get('[data-testid="home-link"]').click();
    });
  });

  it('verifies series content', () => {
    cy.viewport('iphone-x');
    cy.visit('/');

    seriesList.forEach(({ title }) => {
      cy.get('#series').within(() => {
        cy.contains(title).should('exist');
        cy.contains(title).click();
      });

      cy.get('[data-testid="home-link"]').click();
    });
  });
});
