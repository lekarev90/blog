import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(async () => new Promise((resolve) => {
  setTimeout(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    resolve(import('./ArticleDetailsPage'));
  }, 1500);
}));
