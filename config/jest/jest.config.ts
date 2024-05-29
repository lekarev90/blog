import path from 'path';

export default {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleDirectories: ['node_modules', '<rootDir>src'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
  rootDir: '../../',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  modulePaths: ['<rootDir>src'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/testSetup.ts'],
  moduleNameMapper: {
    '\\.s?(css|png|jpg)$': 'identity-obj-proxy',
    '\\.svg$': path.resolve(__dirname, 'JestEmptyComponent.tsx'),
    '^@/(.*)$': '<rootDir>src/$1',
  },
  globals: {
    __IS_DEV__: true,
    __API__: '',
  },
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '<rootDir>/reports',
        filename: 'report_unit.html',
        inlineSource: true,
      },
    ],
  ],
};
