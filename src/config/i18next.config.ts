import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import i18backend from 'i18next-http-backend'

i18n.use(i18backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'es',
})
