import { selectByTestId } from '../helpers/selectByTestId';

describe('Routing', () => {
  describe('User unauthorized', () => {
    it('Visit profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('main-page')).should('exist');
    });
  });

  describe('User authorized', () => {
    it('Visit profile page', () => {
      cy.login(Cypress.env('testUser'), Cypress.env('testUserPassword'));
      cy.visit('/profile/1');
      cy.get(selectByTestId('profile-page')).should('exist');
    });
  });
});
