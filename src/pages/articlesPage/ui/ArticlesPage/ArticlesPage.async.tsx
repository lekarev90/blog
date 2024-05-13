import { lazy } from 'react';

export const ArticlesPageAsync = lazy(async () => new Promise((resolve) => {
  setTimeout(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    resolve(import('./ArticlesPage'));
  }, 1500);
}));
