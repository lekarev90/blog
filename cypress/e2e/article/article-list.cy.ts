describe('Articles list', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('/articles');
    });
  });

  it('Articles exist', () => {
    cy.getByTestId('ArticlesList').should('exist');
    cy.getByTestId('ArticlesList.Item.List').should('have.length.greaterThan', 9);
  });
});
