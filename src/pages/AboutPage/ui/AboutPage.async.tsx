import { lazy } from 'react';

export const AboutPageAsync = lazy(async () => new Promise((resolve) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  setTimeout(() => { resolve(import('./AboutPage')); }, 1500);
}));
