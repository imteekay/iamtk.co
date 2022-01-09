describe('Home', () => {
  describe('on iPhone X', () => {
    it('verifies all links and content', () => {
      cy.viewport('iphone-x');
      cy.visit('/');
    });
  });

  describe('on desktop', () => {
    it('verifies all links and content', () => {
      cy.visit('/');
    });
  });
});
