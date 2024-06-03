describe('Edit profile card', () => {
  let profileId: string;

  beforeEach(() => {
    cy.login().then(({ id }) => {
      profileId = id;
      cy.visit(`/profile/${id}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('Card loaded with correct data', () => {
    cy.getByTestId('profile_card_username').should('have.value', Cypress.env('testUser'));
  });

  it('Edit card', () => {
    const newName = 'Igor';
    const newLastname = 'Ivanov';

    cy.updateProfile(newName, newLastname);
    cy.getByTestId('profile_card_firstName').should('have.value', newName);
    cy.getByTestId('profile_card_lastName').should('have.value', newLastname);
  });
});
