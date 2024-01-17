import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const ns = ['about', 'translation'];
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
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    lng: 'ru',
    saveMissing: true,
    debug: true,
    resources,
  });

export default i18n;
