import { postsList } from 'cypress/helpers/postsList';
import { seriesList } from 'cypress/helpers/seriesList';

describe('Home', () => {
  it('verifies all links and content', () => {
    cy.viewport('iphone-x');
    cy.visit('/');

    cy.contains("Hi, I'm TK!").should('exist');

    postsList.forEach((post) => {
      cy.get('#writings').within(() => {
        cy.contains(post.title).should('exist');
        cy.contains(post.title).click();
      });

      cy.get('[data-testid="home-link"]').click();
    });
  });

  it('verifies series content', () => {
    cy.viewport('iphone-x');
    cy.visit('/');

    seriesList.forEach((series) => {
      cy.get('#series').within(() => {
        cy.contains(series.title).should('exist');
        cy.contains(series.title).click();
      });

      cy.get('[data-testid="home-link"]').click();
    });
  });
});
