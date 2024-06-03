export const setRate = (starsCount: number, feedbackText: string) => {
  cy.getByTestId(`StarRating.${starsCount}`).click();
  cy.getByTestId('RatingCard.Input').type(feedbackText);
  cy.getByTestId('RatingCard.Send').click();
};
declare global {
  namespace Cypress {
    interface Chainable {
      setRate(starsCount: number, feedbackText: string): Chainable<void>;
    }
  }
}
