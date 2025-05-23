import { Dispatch, SetStateAction, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useClickAway } from '@uidotdev/usehooks';
import { NavLink } from '../types/navLink';
import { cn } from '../utils/cn';

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

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setToggle(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className='flex w-screen flex-1 items-center justify-end lg:hidden'
        animate={toggle ? 'open' : 'closed'}
        initial={false}
      >
        {/* Menu trigger button */}
        <button
          className='cursor-pointer object-contain text-2xl text-black sm:text-3xl'
          onClick={() => setToggle(!toggle)}
          aria-expanded={toggle}
          aria-controls='mobile-menu'
          aria-label='Toggle mobile menu'
        >
          <FontAwesomeIcon icon={faBars} aria-hidden='true' />
        </button>

        {/* Mobile menu panel */}
        <motion.div
          //@ts-ignore
          ref={clickAwayRef}
          id='mobile-menu'
          role='dialog'
          aria-modal='true'
          aria-label='Mobile navigation menu'
          className='menu absolute left-0 top-0 z-10 h-[100vh] w-screen bg-blue p-6'
          onKeyDown={handleKeyDown}
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
          {/* Close button */}
          <div className='flex justify-end'>
            <button
              className='object-contain text-4xl text-black sm:text-5xl'
              onClick={() => setToggle(false)}
              aria-label='Close mobile menu'
            >
              <FontAwesomeIcon icon={faXmark} aria-hidden='true' />
            </button>
          </div>

          {/* Navigation links */}
          <nav>
            <ul
              className='mt-[1rem] flex list-none flex-col items-end justify-end gap-[2rem]'
              role='menu'
              aria-label='Mobile navigation menu'
            >
              {navLinks.map((nav) => (
                <motion.li
                  key={nav.id}
                  className={cn(
                    active === nav.title ? 'text-beige' : 'text-black',
                    'whitespace-nowrap text-[40px] font-bold leading-10 tracking-wide sm:text-6xl sm:leading-[5rem]'
                  )}
                  variants={itemVariants}
                  role='none'
                >
                  <Link
                    href={`#${nav.id}`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                    role='menuitem'
                    aria-current={active === nav.title ? 'page' : undefined}
                  >
                    <span className='text-beige' aria-hidden='true'>
                      {nav.number}{' '}
                    </span>
                    {nav.title}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={itemVariants} role='none'>
                <Link
                  href='/resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='whitespace-nowrap rounded-lg border-4 border-black p-2 text-[40px]
                            font-bold leading-10 tracking-wide text-black transition duration-300
                            hover:-translate-y-1 hover:shadow-md hover:shadow-black
                            sm:text-6xl sm:leading-[5rem]'
                  role='menuitem'
                  aria-label='Open resume in new tab'
                >
                  Resume
                </Link>
              </motion.li>
            </ul>
          </nav>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileNavbar;
