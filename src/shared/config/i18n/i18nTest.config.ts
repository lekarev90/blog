import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// eslint-disable-next-line no-void
void i18n
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
    debug: false,
    resources: { ru: { translationsNS: {} } },
  });

export default i18n;
