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
