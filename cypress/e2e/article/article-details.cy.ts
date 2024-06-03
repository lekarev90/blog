describe('Create article', () => {
  let articleId = '';
  let articleTitle = '';

  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('/articles');
      cy.createArticle().then(({ id, title }) => {
        articleId = id;
        articleTitle = title;

        cy.visit(`/articles/${id}`);
      });
    });
  });

  afterEach(() => {
    cy.removeArticle(articleId);
  });

  it('Article exist', () => {
    cy.getByTestId('ArticleDetails').should('exist');
    cy.getByTestId('ArticleDetails.Title').should('have.text', articleTitle);
  });

  it('Pass comment', () => {
    const commentText = 'comment text';
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment(commentText);

    cy.getByTestId('CommentCard');
    cy.getByTestId('CommentCard.Text').should('have.text', commentText);
  });

  it('Rate', () => {
    const rateCount = 5;
    cy.getByTestId('RatingCard').scrollIntoView();

    cy.setRate(rateCount, 'some feedback');

    cy.get('[data-selected=true]').should('have.length', rateCount);
  });
});
