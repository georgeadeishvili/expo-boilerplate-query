import { getLocales } from 'expo-localization'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en'

const i18nConfig = i18n.use(initReactI18next).init({
	lng: getLocales()[0]?.languageCode || 'en',
	fallbackLng: 'en',
	resources: {
		en,
	},
	compatibilityJSON: 'v3',
	interpolation: {
		escapeValue: false,
		prefix: '${',
		suffix: '}',
	},
	nsSeparator: false,
})

export default i18nConfig
