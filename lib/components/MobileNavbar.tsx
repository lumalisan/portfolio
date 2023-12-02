import { Dispatch, SetStateAction, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useClickAway } from '@uidotdev/usehooks';
import classNames from 'classnames';
import { NavLink } from '../types/navLink';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

interface Props {
  active: string;
  navLinks: NavLink[];
  setActive: Dispatch<SetStateAction<string>>;
}

const MobileNavbar = ({ active, navLinks, setActive }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const clickAwayRef = useClickAway(() => {
    setToggle(false);
  });

  return (
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
  );
};

export default MobileNavbar;
