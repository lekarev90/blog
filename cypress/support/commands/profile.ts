import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import { IUser } from '../../../src/entities/User';

const defaultTestUser = Cypress.env('testUser');
const defaultTestUserPassword = Cypress.env('testUserPassword');

export const updateProfile = (newName: string, newLastname: string) => {
  cy.getByTestId('profile_card_editButton').click();

  cy.getByTestId('profile_card_firstName').clear();
  cy.getByTestId('profile_card_firstName').type(newName);

  cy.getByTestId('profile_card_lastName').clear();
  cy.getByTestId('profile_card_lastName').type(newLastname);

  cy.getByTestId('profile_card_saveButton').click();
};

export const login = (username: string = defaultTestUser, password: string = defaultTestUserPassword) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('api_server')}/login`,
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));

    return body;
  });
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: `${Cypress.env('api_server')}/profile/${profileId}`,
    headers: {
      Authorization: 'some',
    },
    body: {
      id: '5',
      firstName: 'Test name',
      lastName: 'Tes 2nd name',
      age: '25',
      currency: 'USD',
      country: 'Spain',
      city: 'Valencia',
      username: 'testUser',
      avatar: 'https://picsum.photos/600/600',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<IUser>;
      resetProfile(profileId: string): Chainable<IUser>;
      updateProfile(newName: string, newLastname: string): Chainable<void>;
    }
  }
}
