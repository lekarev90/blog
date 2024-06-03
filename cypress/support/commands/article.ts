import { IArticle } from '../../../src/entities/Article';

const defaultArticleId = '123456654321';

const defaultArticle = {
  id: defaultArticleId,
  title: 'AI да IT',
  subtitle: 'ИИ изменяет IT',
  img: 'https://picsum.photos/300/300?random=718',
  views: '971',
  createdAt: '06.08.2020',
  types: ['IT', 'MEDICINE'],
  blocks: [],
  userId: '5',
};

export const createArticle = (article?: IArticle) => {
  cy.request<IArticle>({
    method: 'POST',
    url: `${Cypress.env('api_server')}/articles`,
    headers: {
      Authorization: 'some',
    },
    body: article || defaultArticle,
  }).then((resp) => resp.body);
};

export const removeArticle = (articleId?: string) => {
  cy.request({
    method: 'DELETE',
    headers: {
      Authorization: 'some',
    },
    url: `${Cypress.env('api_server')}/articles/${articleId || defaultArticleId}`,
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: IArticle): Chainable<IArticle>;
      removeArticle(articleId?: string): Chainable<void>;
    }
  }
}
