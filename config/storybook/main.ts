import type { StorybookConfig } from '@storybook/react-webpack5';

const target = 'browserslist:browserslist config, not maintained node versions';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal(config) {
    config.target = target;

    return config;
  },
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', 'storybook-addon-mock'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};

export default config;
