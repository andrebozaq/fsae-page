'use client';
import Image from 'next/image';
import { MdMenu } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import { useEffect, useState, useRef } from 'react';
import ThemeToggle from './themeToggle';
import LangSwitch from './langSwitch';

import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { NavLinksList } from '@/lib/navLinksList';

export default function Navbar() {
  const pathname = usePathname();
  const [langName, setLangName] = useState(defaultLocale);
  const [linkList, setLinkList] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the menu is open
  const dropdownRef = useRef(null); // Ref to track the dropdown menu

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

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Track scroll direction and position for navbar visibility (desktop only)
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY === 0) {
            setShowNavbar(true);
          } else if (currentScrollY > lastScrollY) {
            setShowNavbar(false); // Scrolling down, hide navbar
          } else {
            setShowNavbar(true); // Scrolling up, show navbar
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-full relative z-50 bg-base-100 p-5 pb-0 md:mb-5 flex justify-between items-center sticky top-0 left-0 right-0 shadow-md transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <a
        aria-label="landing page template"
        className="flex items-center w-1/2 md:w-1/5"
        title="FSAE LUZ"
        href={`/${langName}`}
      >
        <Image
          width={200}
          height={200}
          src={'/fsae.png'}
          className="transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10"
          alt="logo"
        ></Image>
        <h2 className="ml-3 font-bold leading-5">FSAE LUZ</h2>
      </a>

      <ul className="w-3/5 px-5 font-medium hidden md:flex flex-nowrap items-center justify-around">
        {linkList.map((link, index) => {
          return (
            <li key={index} className="group py-3 text-center">
              <a
                aria-label={link.name}
                className="group relative"
                title={link.name}
                href={`/${langName}${link.url}`}
              >
                {link.name}
                <div className="absolute left-[50%] group-hover:left-0 w-0 group-hover:w-full h-[3px] transition-all duration-300 bg-base-content/90"></div>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="md:w-1/5 flex items-center justify-end gap-2">
        {/* <label className='flex items-center justify-center md:bg-base-100 md:rounded-full w-5 md:w-8 h-5 md:h-8 md:shadow-sm md:hover:shadow-md transition-all'>
                    <a
                        aria-label='get template source code'
                        title='visit my github ;)'
                        href='https://github.com/andrebozaq'
                        target='_blank'
                    >
                        <SiGithub size={14} />
                    </a>
                </label> */}
        <ThemeToggle />
        <LangSwitch />
        <div
          className="relative md:hidden"
          ref={dropdownRef} // Attach ref to the dropdown
        >
          <button
            className="btn btn-ghost p-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu on click
          >
            <MdMenu size={24} />
          </button>
          {isMenuOpen && (
            <ul className="absolute right-0 z-[100] p-2 shadow bg-base-100 opacity-100 rounded-box w-52">
              {linkList.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="py-2 text-center hover:bg-base-200 rounded-md transition-all"
                  >
                    <a
                      aria-label={link.name}
                      className="block text-base font-medium hover:text-base-content/90 transition-all"
                      title={link.name}
                      href={`/${langName}${link.url}`}
                      onClick={() => setIsMenuOpen(false)} // Close menu on link click
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
