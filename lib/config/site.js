import { TfiYoutube } from 'react-icons/tfi';
import { FaRedditAlien, FaTiktok, FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter, FaSquareThreads, FaWeixin } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiWechatChannelsLine } from 'react-icons/ri';

const baseSiteConfig = {
	name: 'FSAE LUZ',
	description: 'This is the official website of the fsae team from La Universidad del Zulia.',
	url: 'https://fsaeluz.netlify.app/',
	ogImage: '/fsae.png',
	metadataBase: '/',
	keywords: [
		'fsae',
		'universidad del zulia',
		'formula sae',
		'formula',
		'luz',
		'fsae luz',
	],
	authors: [
		{
			name: 'andre boza',
			url: 'https://fsaeluz.netlify.app/',
		},
	],
	icons: {
		icon: '/fsae.png',
		shortcut: '/fsae.png',
		apple: '/fsae.png',
	}
};

export const SiteConfig = {
	en: {
		name: 'FSAE LUZ',
		description: 'This is the official website of the fsae team from La Universidad del Zulia.',
		url: 'https://fsaeluz.netlify.app/',
		ogImage: '/fsae.png',
		metadataBase: '/',
		keywords: [
		'fsae',
		'universidad del zulia',
		'formula sae',
		'formula',
		'luz',
		'fsae luz',
	],
		authors: [
			{
				name: 'andre',
				url: 'https://fsaeluz.netlify.app/',
			},
		],
		icons: {
			icon: '/fsae.png',
			shortcut: '/fsae.png',
			apple: '/fsae.png',
		},
		openGraph: {
			type: 'website',
			locale: 'en_US',
			url: baseSiteConfig.url,
			title: 'FSAE LUZ',
			description: 'Universidad del Zulia fsae oficial website',
			siteName: 'FSAE LUZ',
			image: 'https://fsaeluz.netlify.app/fsae.png', 
		},
		twitter: {
			card: 'summary_large_image',
			title: 'FSAE LUZ',
			description: 'This is the official website of the fsae team from La Universidad del Zulia.',
			images: [`${baseSiteConfig.url}/og.png`],
			creator: baseSiteConfig.creator,
		},

	telegram:{
			type: 'website',
			locale: 'en_US',
			url: baseSiteConfig.url,
			title: 'FSAE LUZ',
			description: 'Universidad del Zulia fsae oficial website',
			siteName: 'FSAE LUZ',
		},
	},
	zh: {
		name: 'inWind落地页模板',
		description: '这是一个免费、开源且功能强大的 saas 项目登陆页面模板，它将帮助您更快地启动。',
		url: 'https://landingpage.inwind.cn',
		ogImage: '/fsae.png',
		metadataBase: '/',
		keywords: [
			'落地页模板',
			'落地页样板',
			'开源的落地页',
			'next.js 落地页',
			'免费的落地页',
			'令人惊叹的落地页',
		],
		authors: [
			{
				name: 'andre',
				url: 'https://fsaeluz.netlify.app/',
			},
		],
		icons: {
			icon: '/fsae.png',
			shortcut: '/fsae.png',
			apple: '/fsae.png',
		},
		openGraph: {
			type: 'website',
			locale: 'zh',
			url: baseSiteConfig.url,
			title: 'FSAE LUZ',
			description: 'Universidad del Zulia fsae oficial website',
			siteName: 'FSAE LUZ',
		},
		twitter: {
			card: 'summary_large_image',
			title: 'inWind落地页模板',
			description: '这是一个免费、开源且功能强大的 saas 项目登陆页面模板，它将帮助您更快地启动。',
			images: [`${baseSiteConfig.url}/og.png`],
			creator: baseSiteConfig.creator,
		},
	},
	es: {
		name: 'FSAE LUZ',
		description: 'Esta es la página oficial de la seccional formula sae de la universidad del zulia.',
		url: 'https://fsaeluz.netlify.app/',
		ogImage: '/fsae.png',
		metadataBase: '/',
		keywords: [
			'fsae',
		'universidad del zulia',
		'formula sae',
		'formula',
		'luz',
		'fsae luz',
		],
		authors: [
			{
				name: 'andre',
				url: 'https://fsaeluz.netlify.app/',
			},
		],
		icons: {
			icon: '/fsae.png',
			shortcut: '/fsae.png',
			apple: '/fsae.png',
		},
		openGraph: {
			type: 'website',
			locale: 'es',
			url: baseSiteConfig.url,
			title: 'FSAE LUZ',
			description: 'Esta es la página oficial de la seccional formula sae de la universidad del zulia',
			siteName: 'FSAE LUZ',
			image: 'https://fsaeluz.netlify.app/fsae.png', // Absolute URL for Telegram/OG
		},
		twitter: {
			card: 'summary_large_image',
			title: 'FSAE LUZ',
			description: 'Esta es la página oficial de la seccional formula sae de la universidad del zulia.',
			images: [`${baseSiteConfig.url}/og.png`],
			creator: baseSiteConfig.creator,
		},
		
	telegram:{
			type: 'website',
			locale: 'es',
			url: baseSiteConfig.url,
			title: 'FSAE LUZ',
			description: 'Esta es la página oficial de la seccional formula sae de la universidad del zulia.',
			siteName: 'FSAE LUZ',
		},
	},
	fr: {
		name: 'Modèle de page de destination inWind',
		description: "Il s'agit d'un modèle de page de destination gratuit, open source et puissant pour le projet Saas, il vous aidera à accélérer votre démarrage.",
		url: 'https://landingpage.inwind.cn',
		ogImage: '/fsae.png',
		metadataBase: '/',
		keywords: [
			'modèle de page de destination',
			'modèle de page de destination',
			"page d'accueil open source",
			'Page de destination next.js',
			'page de destination gratuite',
			'superbe page de destination',
		],
		authors: [
			{
				name: 'andre',
				url: 'https://fsaeluz.netlify.app/',
			},
		],
		icons: {
			icon: '/fsae.png',
			shortcut: '/fsae.png',
			apple: '/fsae.png',
		},
		openGraph: {
			type: 'website',
			locale: 'fr',
			url: baseSiteConfig.url,
			title: 'FSAE LUZ',
			description: 'Universidad del Zulia fsae oficial website',
			siteName: 'FSAE LUZ',
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Modèle de page de destination inWind',
			description: "Il s'agit d'un modèle de page de destination gratuit, open source et puissant pour le projet Saas, il vous aidera à accélérer votre démarrage.",
			images: [`${baseSiteConfig.url}/og.png`],
			creator: baseSiteConfig.creator,
		},
	},
	ja: {
		name: 'inWind ランディングページテンプレート',
		description: 'これは、SaaS プロジェクト用の無料かつオープンソースの強力なランディング ページ テンプレートであり、スタートアップの迅速化に役立ちます。',
		url: 'https://landingpage.inwind.cn',
		ogImage: '/fsae.png',
		metadataBase: '/',
		keywords: [
			'ランディングページテンプレート',
			'ランディングページの定型文',
			'オープンソースランディングページ',
			'next.js ランディング ページ',
			'無料のランディングページ',
			'素晴らしいランディングページ',
		],
		authors: [
			{
				name: 'andre',
				url: 'https://fsaeluz.netlify.app/',
			},
		],
		icons: {
			icon: '/fsae.png',
			shortcut: '/fsae.png',
			apple: '/fsae.png',
		},
		openGraph: {
			type: 'website',
			locale: 'js',
			url: baseSiteConfig.url,
			title: 'FSAE LUZ',
			description: 'Universidad del Zulia fsae oficial website',
			siteName: 'FSAE LUZ',
		},
		twitter: {
			card: 'summary_large_image',
			title: 'inWind ランディングページテンプレート',
			description: 'これは、SaaS プロジェクト用の無料かつオープンソースの強力なランディング ページ テンプレートであり、スタートアップの迅速化に役立ちます。',
			images: [`${baseSiteConfig.url}/og.png`],
			creator: baseSiteConfig.creator,
		},
	},
	ru: {
		name: 'Шаблон целевой страницы inWind',
		description: 'Это бесплатный, открытый и мощный шаблон целевой страницы для saas-проекта, он поможет вам ускорить ваш стартап.',
		url: 'https://landingpage.inwind.cn',
		ogImage: '/fsae.png',
		metadataBase: '/',
		keywords: [
			'шаблон целевой страницы',
			'шаблон целевой страницы',
			'целевая страница с открытым исходным кодом',
			'целевая страница next.js',
			'бесплатная целевая страница',
			'потрясающая целевая страница',
		],
		authors: [
			{
				name: 'andre',
				url: 'https://fsaeluz.netlify.app/',
			},
		],
		icons: {
			icon: '/fsae.png',
			shortcut: '/fsae.png',
			apple: '/fsae.png',
		},
		openGraph: {
			type: 'website',
			locale: 'ru',
			url: baseSiteConfig.url,
			title: 'FSAE LUZ',
			description: 'Universidad del Zulia fsae oficial website',
			siteName: 'FSAE LUZ',
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Шаблон целевой страницы inWind',
			description: 'Это бесплатный, открытый и мощный шаблон целевой страницы для saas-проекта, он поможет вам ускорить ваш стартап.',
			images: [`${baseSiteConfig.url}/og.png`],
			creator: baseSiteConfig.creator,
		},
	},
	ar: {
		name: 'قالب صفحة الهبوط inWind',
		description: 'هذا هو قالب صفحة الهبوط القوي والمفتوح المصدر والمجاني لمشروع SaaS، وسوف يساعدك على جعل بدء التشغيل الخاص بك أسرع.',
		url: 'https://landingpage.inwind.cn',
		ogImage: '/fsae.png',
		metadataBase: '/',
		keywords: [
			'قالب صفحة الهبوط',
			'قالب صفحة الهبوط',
			'صفحة الهبوط مفتوحة المصدر',
			'صفحة الهبوط next.js',
			'صفحة هبوط مجانية',
			'صفحة هبوط رائعة',
		],
		authors: [
			{
				name: 'andre',
				url: 'https://fsaeluz.netlify.app/',
			},
		],
		icons: {
			icon: '/fsae.png',
			shortcut: '/fsae.png',
			apple: '/fsae.png',
		},
		openGraph: {
			type: 'website',
			locale: 'ar',
			url: baseSiteConfig.url,
			title: 'FSAE LUZ',
			description: 'Universidad del Zulia fsae oficial website',
			siteName: 'FSAE LUZ',
		},
		twitter: {
			card: 'summary_large_image',
			title: 'قالب صفحة الهبوط inWind',
			description: 'هذا هو قالب صفحة الهبوط القوي والمفتوح المصدر والمجاني لمشروع SaaS، وسوف يساعدك على جعل بدء التشغيل الخاص بك أسرع.',
			images: [`${baseSiteConfig.url}/og.png`],
			creator: baseSiteConfig.creator,
		},
	},
};