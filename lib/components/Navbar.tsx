'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { logotext } from '@/assets';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useClickAway } from '@uidotdev/usehooks';
import { navLinks } from '../constants';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const clickAwayRef = useClickAway(() => {
    setToggle(false);
  });

  return (
    <nav
      className={
        'xxs:h-[12vh] fixed top-0 z-20 flex w-full items-center bg-blue px-6 py-2 opacity-[0.97] lg:px-16'
      }
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
        >
          <Image
            src={logotext}
            alt='logo'
            className='-ml-[0.6rem] w-[100px] object-contain sm:w-[150px]'
          />
        </Link>

        {/* Desktop nav item list */}
        <ul className='mt-2 hidden list-none flex-row gap-8 lg:flex'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={classNames(
                active === nav.title ? 'text-beige' : 'text-black',
                'nav-links cursor-pointer whitespace-nowrap text-2xl font-medium tracking-wide transition duration-300 hover:text-beige'
              )}
              onClick={() => setActive(nav.title)}
            >
              <Link href={`#${nav.id}`}>
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
        >
          Resume
        </button>

        {/* Mobile nav item list */}
        <AnimatePresence>
          <motion.div
            className='flex w-screen flex-1 items-center justify-end lg:hidden'
            animate={toggle ? 'open' : 'closed'}
            initial={false}
          >
            {/*  <!--  Start Dropdown trigger --> */}
            <div
              className='cursor-pointer object-contain text-2xl text-black sm:text-3xl'
              onClick={() => setToggle(!toggle)}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
            {/*  <!--  End Dropdown trigger --> */}
            {/*  <!-- Start Menu list --> */}
            <motion.div
              //@ts-ignore
              ref={clickAwayRef}
              className={
                'menu absolute left-0 top-0 z-10 h-[100vh] w-screen bg-blue p-6'
              }
              variants={{
                open: {
                  clipPath: 'circle(100.0% at 90% 5%)',
                  transition: {
                    type: 'spring',
                    bounce: 0,
                    duration: 0.5,
                    delayChildren: 0.1,
                    staggerChildren: 0.05,
                  },
                },
                closed: {
                  clipPath: 'circle(0% at 90% 5%)',
                  transition: {
                    type: 'spring',
                    bounce: 0,
                    duration: 0.2,
                  },
                },
              }}
              style={{ pointerEvents: toggle ? 'auto' : 'none' }}
            >
              {/* Close Icon */}
              <div className='flex justify-end'>
                <div
                  className='object-contain text-4xl text-black sm:text-5xl'
                  onClick={() => setToggle(!toggle)}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </div>
              {/* Links list */}
              <ul className='mt-[1rem] flex list-none flex-col items-end justify-end gap-[2rem]'>
                {navLinks.map((nav) => (
                  <motion.li
                    key={nav.id}
                    className={classNames(
                      active === nav.title ? 'text-beige' : 'text-black',
                      'whitespace-nowrap text-[40px] font-bold leading-10 tracking-wide sm:text-6xl sm:leading-[5rem]'
                    )}
                    variants={itemVariants}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <Link href={`#${nav.id}`}>
                      <span className='text-beige'>{nav.number} </span>
                      {nav.title}
                    </Link>
                  </motion.li>
                ))}
                <motion.li variants={itemVariants}>
                  <button
                    onClick={() => window.open('/resume.pdf', '_blank')}
                    className='whitespace-nowraptransition rounded-lg border-4 border-black p-2 text-[40px]
                              font-bold leading-10 tracking-wide text-black duration-300
                              hover:-translate-y-1 hover:shadow-md hover:shadow-black
                              sm:text-6xl sm:leading-[5rem]'
                  >
                    Resume
                  </button>
                </motion.li>
              </ul>
            </motion.div>
            {/*  <!-- End Menu list --> */}
          </motion.div>
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
