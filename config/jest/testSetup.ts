import '@testing-library/jest-dom';
import 'cross-fetch/polyfill';

/* eslint-disable class-methods-use-this */
global.ResizeObserver = class {
  observe() {}

  unobserve() {}

  disconnect() {}
};
