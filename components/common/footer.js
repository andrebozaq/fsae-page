'use client';
import Image from 'next/image';
import { NavLinksList } from '@/lib/navLinksList';
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { useEffect, useState } from 'react';

export default function Footer() {
	const pathname = usePathname();
	const [langName, setLangName] = useState(defaultLocale);
	const [linkList, setLinkList] = useState([]);

	useEffect(() => {
		const fetchLinksList = async () => {
			if (pathname === '/') {
				setLangName(defaultLocale);
			} else {
				setLangName(pathname.split('/')[1]);
			}
			setLinkList(NavLinksList[`LINK_${langName.toUpperCase()}`] || []);
		};
		fetchLinksList();
	}, [pathname, langName]);

	return (
		<footer className='w-full px-5 py-10 bg-[#202020] text-[#f7f7f7]'>
    <div className='container mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-5 text-sm'>
        {/* Logo and Links Section */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            <a
                aria-label='landing page template'
                className='flex items-center mb-5'
                title='FSAE LUZ'
                href={`/${langName}`}
            >
                <Image
                    width={200}
                    height={200}
                    src={'/fsae.png'}
                    className='transition-all hover:scale-110 w-10 md:w-12 h-10 md:h-12'
                    alt='logo'
                ></Image>
                <h2 className='ml-3 font-bold leading-5 text-lg md:text-xl'>FSAE LUZ</h2>
            </a>
            <div className='flex flex-wrap justify-center md:justify-start gap-x-3 md:gap-x-5 gap-y-2'>
                {linkList.map((link, index) => {
                    return (
                        <a
                            key={index}
                            title={link.name}
                            href={`/${langName}${link.url}`}
                            className='hover:underline'
                        >
                            {link.name}
                        </a>
                    );
                })}
            </div>
        </div>

        {/* Copyright Section */}
        <p className='text-center md:text-right mt-5 md:mt-0'>
            ©{' '}
            <a
                title={'fsaeluz'}
                href='https://www.instagram.com/formulasaeluz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                target='_blank'
                className='hover:underline'
            >
                FSAELUZ
            </a>{' '}
            2025. All rights reserved.
        </p>
    </div>
</footer>
	);
}
