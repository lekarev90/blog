import '../../../../shared/config/i18n/i18nStorybook';
import { Story, StoryContext } from '@storybook/react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const WithI18Decorator = (Story: Story, context: StoryContext) => {
  const {
    globals: { locale },
  } = context;
  const { i18n } = useTranslation();

  useEffect(() => {
    const isRu = locale === 'ru';

    i18n.changeLanguage(isRu ? 'en' : 'ru');
  }, [locale, i18n]);

  return <Story />;
};
