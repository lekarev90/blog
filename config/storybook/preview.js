import { NewDesignDecorator } from '../../src/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { WithI18Decorator } from '../../src/shared/config/storybook/WithI18Decorator/WithI18Decorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    defaultValue: 'light',
    description: 'Global theme for components',
    toolbar: {
      icon: 'circlehollow',
      items: [
        {
          value: 'light',
          title: 'Light',
        },
        {
          value: 'dark',
          title: 'Dark',
        },
        {
          value: 'orange',
          title: 'Orange',
        },
      ],
      dynamicTitle: true,
    },
  },
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        {
          value: 'en',
          title: 'English',
        },
        {
          value: 'ru',
          title: 'Russian',
        },
      ],
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  ThemeDecorator,
  StyleDecorator,
  WithI18Decorator,
  RouterDecorator,
  NewDesignDecorator(),
];
