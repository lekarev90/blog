import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

void i18n
    .use(detector)
    .use(backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        fallbackLng: 'ru', // use en if detected lng is not available
        fallbackNS: 'translate',
        lng: 'ru',
        saveMissing: true, // send not translated keys to endpoint
        debug: __IS_DEV__,
        backend: {
            // for all available options read the backend's repository readme file
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
    })

export default i18n
