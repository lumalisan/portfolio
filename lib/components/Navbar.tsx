'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { logotext } from '@/assets';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useClickAway } from '@uidotdev/usehooks';

const navLinks = [
  {
    id: 'about',
    number: '01.',
    title: 'About',
  },
  {
    id: 'experience',
    number: '02.',
    title: 'Experience',
  },
  {
    id: 'projects',
    number: '03.',
    title: 'Projects',
  },
  {
    id: 'contact',
    number: '04.',
    title: 'Contact',
  },
];

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const Navbar = () => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const clickAwayRef = useClickAway(() => {
    setToggle(false);
  });

  return (
    <nav className={'lg:px-16 px-6 w-full flex items-center py-2 fixed top-0 z-20 bg-blue opacity-[0.97] xxs:h-[12vh]'}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Link with logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logotext}
            alt="logo"
            className="sm:w-[150px] w-[100px] -ml-[0.6rem] object-contain"
          />
        </Link>

        {/* Desktop nav item list */}
        <ul className="list-none hidden lg:flex flex-row gap-8 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={
                classNames(
                  active === nav.title ? 'text-beige' : 'text-black',
                  'hover:text-beige text-2xl font-medium tracking-wide cursor-pointer nav-links whitespace-nowrap transition duration-300'
                )
              }
              onClick={() => setActive(nav.title)}>
              <Link href={`#${nav.id}`}>
                <span className='text-beige'>{nav.number}{' '}</span>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => window.open('/resume.pdf', '_blank')}
          className="p-2 text-2xl text-black font-semibold tracking-wide border-2 border-black
                  hover:text-beige hover:border-beige hover:shadow-md hover:shadow-beige
                    hover:-translate-y-1 rounded-lg whitespace-nowrap transition duration-300 lg:block hidden"
        >
          Resume
        </button>

        {/* Mobile nav item list */}
        <AnimatePresence>
          <motion.div
            className="lg:hidden flex flex-1 w-screen justify-end items-center"
            animate={toggle ? 'open' : 'closed'}
            initial={false}
          >
            {/*  <!--  Start Dropdown trigger --> */}
            <div
              className="sm:text-3xl text-2xl text-black object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
            {/*  <!--  End Dropdown trigger --> */}
            {/*  <!-- Start Menu list --> */}
            <motion.div
              //@ts-ignore
              ref={clickAwayRef}
              className={'p-6 bg-blue absolute top-0 left-0 w-screen h-[100vh] z-10 menu'}
              variants={{
                open: {
                  clipPath: 'circle(100.0% at 90% 5%)',
                  transition: {
                    type: 'spring',
                    bounce: 0,
                    duration: 0.5,
                    delayChildren: 0.1,
                    staggerChildren: 0.05
                  }
                },
                closed: {
                  clipPath: 'circle(0% at 90% 5%)',
                  transition: {
                    type: 'spring',
                    bounce: 0,
                    duration: 0.2
                  }
                }
              }}
              style={{ pointerEvents: toggle ? 'auto' : 'none' }}
            >
              {/* Close Icon */}
              <div className="flex justify-end">
                <div
                  className="sm:text-5xl text-4xl text-black object-contain"
                  onClick={() => setToggle(!toggle)}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </div>
              {/* Links list */}
              <ul className="list-none flex flex-col gap-[2rem] items-end justify-end mt-[1rem]">
                {navLinks.map((nav) => (
                  <motion.li
                    key={nav.id}
                    className={
                      classNames(
                        active === nav.title ? 'text-beige' : 'text-black',
                        'sm:text-6xl text-[40px] sm:leading-[5rem] leading-10 tracking-wide whitespace-nowrap font-bold'
                      )
                    }
                    variants={itemVariants}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <Link href={`#${nav.id}`}>
                      <span className='text-beige'>{nav.number}{' '}</span>
                      {nav.title}
                    </Link>
                  </motion.li>
                ))}
                <motion.li variants={itemVariants}>
                  <button
                    onClick={() => window.open('/resume.pdf', '_blank')}
                    className="p-2 sm:text-6xl text-[40px] text-black font-bold sm:leading-[5rem] leading-10 tracking-wide
                              border-4 border-black hover:text-beige hover:border-beige hover:shadow-md hover:shadow-beige
                              hover:-translate-y-1 rounded-lg whitespace-nowrap transition duration-300"
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
