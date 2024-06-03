import { selectByTestId } from '../../e2e/helpers/selectByTestId';

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
  namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line no-undef
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
