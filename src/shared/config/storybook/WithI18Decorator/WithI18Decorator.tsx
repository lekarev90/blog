import '../../i18n/i18nTest.config';
import { useEffect } from 'react';

import { StoryFn, StoryContext } from '@storybook/react';
import { useTranslation } from 'react-i18next';

export const WithI18Decorator = (Story: StoryFn, context: StoryContext) => {
  const {
    globals: { locale },
  } = context;
  const { i18n } = useTranslation();

  useEffect(() => {
    const isRu = locale === 'ru';

    i18n.changeLanguage(isRu ? 'ru' : 'en');
  }, [locale, i18n]);

  return <Story />;
};
