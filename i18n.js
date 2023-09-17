import {initReactI18next} from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-http-backend';

import en from './public/locales/en/translation.json';
import tr from './public/locales/tr/translation.json';

const resources = {
  en: {
    translation: en,
  },
  tr: {
    translation: tr,
  },
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    // debug: process.env.NODE_ENV === 'development',
    supportedLngs: ['en', 'tr'],
  });

export default i18n;
