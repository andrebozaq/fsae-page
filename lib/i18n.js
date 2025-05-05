import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export const locales = ['', 'es', 'en', 'en-US', 'fr', 'ru','zh', 'zh-CN', 'zh-TW', 'zh-HK', 'ja', 'ar'];
export const localeNames = {
	es: '🇪🇸 Español',
	en: '🇺🇸 English'
	// fr: '🇫🇷 Français',
	// ru: '🇷🇺 Русский',
	// zh: '🇨🇳 中文',
	// ja: '🇯🇵 日本語',
	// ar: '🇸🇦 العربية',
	
};
export const defaultLocale = 'en';

// If you wish to automatically redirect users to a URL that matches their browser's language setting,
// you can use the `getLocale` to get the browser's language.
export function getLocale(headers) {
	let languages = new Negotiator({ headers }).languages();

	return match(languages, locales, defaultLocale);
}

const dictionaries = {
	en: () => import('@/locales/en.json').then((module) => module.default),
	zh: () => import('@/locales/zh.json').then((module) => module.default),
	ja: () => import('@/locales/ja.json').then((module) => module.default),
	ar: () => import('@/locales/ar.json').then((module) => module.default),
	es: () => import('@/locales/es.json').then((module) => module.default),
	ru: () => import('@/locales/ru.json').then((module) => module.default),
	fr: () => import('@/locales/fr.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
	if (['zh-CN', 'zh-TW', 'zh-HK'].includes(locale)) {
		locale = 'zh';
	}

	if (!Object.keys(dictionaries).includes(locale)) {
		locale = 'en';
	}

	return dictionaries[locale]();
};
