import { lazy } from 'react';

export const ArticlesEditPageAsync = lazy(async () => new Promise((resolve) => {
  setTimeout(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    resolve(import('./ArticlesEditPage'));
  }, 1500);
}));
