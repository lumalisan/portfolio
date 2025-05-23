'use client';

import { useState, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { logotext } from '@/assets';
import { navLinks } from '../constants';
import MobileNavbar from './MobileNavbar';
import { useNavbarVisible } from '../hooks';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [active, setActive] = useState<string>('');
  const isNavbarVisible = useNavbarVisible();

  return (
    <header role='banner'>
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:fixed focus:left-0 focus:top-0 focus:z-50 focus:bg-beige focus:p-4 focus:text-purple'
      >
        Skip to main content
      </a>
      <nav
        className={cn(
          isNavbarVisible ? 'top-0' : '-top-32',
          'xxs:h-[12vh] fixed z-20 flex w-full items-center bg-blue bg-opacity-90 px-6 py-2 backdrop-blur-sm backdrop-filter transition-all duration-300 lg:px-16'
        )}
        role='navigation'
        aria-label='Main navigation'
      >
        <div className='mx-auto flex w-full max-w-7xl items-center justify-between'>
          {/* Link with logo */}
          <Link
            href='#intro'
            className='flex items-center gap-2'
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
            aria-label='Go to top of page'
          >
            <Image
              src={logotext}
              alt='Lisandro Rocha logo'
              className='-ml-[0.6rem] w-[100px] object-contain sm:w-[150px]'
            />
          </Link>

          {/* Desktop nav item list */}
          <ul
            className='mt-2 hidden list-none flex-row gap-8 lg:flex'
            role='menubar'
          >
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={cn(
                  active === nav.title ? 'text-beige' : 'text-black',
                  'nav-links cursor-pointer whitespace-nowrap text-2xl font-medium tracking-wide transition duration-300 hover:text-beige'
                )}
                onClick={() => setActive(nav.title)}
                role='none'
              >
                <Link
                  href={`#${nav.id}`}
                  role='menuitem'
                  aria-current={active === nav.title ? 'page' : undefined}
                >
                  <span className='text-beige'>{nav.number} </span>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => window.open('/resume.pdf', '_blank')}
            className='hidden whitespace-nowrap rounded-lg border-2 border-black p-2 text-2xl
                    font-semibold tracking-wide text-black transition
                    duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-black lg:block'
            aria-label='Open Resume in new tab'
          >
            Resume
          </button>

          {/* Mobile nav item list */}
          <MobileNavbar
            active={active}
            setActive={setActive}
            navLinks={navLinks}
          />
        </div>
      </nav>
    </header>
  );
};

export default memo(Navbar);
