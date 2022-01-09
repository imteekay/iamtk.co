import { postsList } from 'cypress/helpers/postsList';
import { seriesList } from 'cypress/helpers/seriesList';

describe('Home', () => {
  it('verifies all links and content', () => {
    cy.viewport('iphone-x');
    cy.visit('/');

    cy.contains("Hi, I'm TK!").should('exist');

    postsList.forEach((post) => {
      cy.contains(post.title).should('exist');
      cy.contains(post.title).click();
      cy.get('a').first().click();
    });
  });

  it('verifies series content', () => {
    seriesList.forEach((series) => {
      cy.contains(series.title).should('exist');
      cy.contains(series.title).click();
      cy.get('a').first().click();
    });
  });
});
