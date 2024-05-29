import '@testing-library/jest-dom';
import 'cross-fetch/polyfill';
import { TextEncoder } from 'node:util';

/* eslint-disable class-methods-use-this */
global.ResizeObserver = class {
  observe() {}

  unobserve() {}

  disconnect() {}
};

global.TextEncoder = TextEncoder;

jest.mock('axios', () => ({
  create: () => ({
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
    interceptors: {
      request: {
        use: jest.fn(),
      },
    },
  }),
}));
