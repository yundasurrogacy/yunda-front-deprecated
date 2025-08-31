import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../../public/locales/en/common.json'
import zh from '../../public/locales/zh/common.json'

// 只用同步资源，不用 http-backend 和 browser-languagedetector

i18n.use(initReactI18next).init({
  resources: {
    en: { common: en },
    zh: { common: zh },
  },
  fallbackLng: 'en',
  supportedLngs: ['en', 'zh'],
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  ns: ['common'],
  defaultNS: 'common',
  react: { useSuspense: false },
})

export default i18n
