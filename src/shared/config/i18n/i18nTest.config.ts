import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const ns = ['about', 'translation', 'profile', 'article-details', 'comments'];
const supportedLngs = ['en', 'ru'];
const resources = ns.reduce((acc: Record<any, any>, n) => {
  supportedLngs.forEach((lng) => {
    if (!acc[lng]) acc[lng] = {};
    acc[lng] = {
      ...acc[lng],
      // eslint-disable-next-line global-require,import/no-dynamic-require
      [n]: require(`../../../../public/locales/${lng}/${n}.json`),
    };
  });

  return acc;
}, {});

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
    resources,
  });

export default i18n;
