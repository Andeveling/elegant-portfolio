import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    resources: {
      es: {
        translation: {
          title: 'Bienvenido a react',
        },
      },
      en: {
        translation: {
          title: 'welcome to react ',
        },
      },
    },
  })
