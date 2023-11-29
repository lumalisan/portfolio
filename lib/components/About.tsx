'use client'

import Link from 'next/link';
import TechCard from './TechCard';
import { faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { astroIcon, mongoDbIcon, nextJsIcon, tailwindCssIcon, typeScriptIcon } from '@/assets/icons';

const technologies = [
  {
    title: 'JavaScript',
    icon: faJs,
  },
  {
    title: 'TypeScript',
    icon: typeScriptIcon,
  },
  {
    title: 'React',
    icon: faReact,
  },
  {
    title: 'Next.js',
    icon: nextJsIcon,
  },
  {
    title: 'Tailwind CSS',
    icon: tailwindCssIcon,
  },
  {
    title: 'Node.js',
    icon: faNodeJs,
  },
  {
    title: 'MongoDB',
    icon: mongoDbIcon,
  },
  {
    title: 'Astro',
    icon: astroIcon,
  },
];

const About = () => {
  return (
    <div className="max-w-4xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10">
      <div className='flex items-center whitespace-nowrap'>
        <h2 className={'text-3xl font-bold text-beige'}>
          <span className='text-beige/50'>01.{' '}</span>
          About Me
        </h2>
        <span className='block relative h-[1px] w-full max-w-lg ml-5 bg-beige'></span>
      </div>

      <p
        className="mt-4 text-beige/90 text-xl leading-8">
        Hello! I&apos;m Lisandro, and my interest in web development traces back to my early days,
        tinkering with my father&apos;s computer. This childhood curiosity ignited a journey that
        led me to become a computer engineer, graduating from the
        <Link href={'https://www.uib.es/es/'} className='text-blue hover:text-sky-200 transition-colors duration-300'> University of the Balearic Islands (UIB)</Link>.
        Throughout my professional journey, I&apos;ve had the privilege of working
        in diverse companies, where I&apos;ve not only implemented my skills and knowledge but
        also continuously improved them.
        <br/><br/>
        In addition to my professional experiences, I&apos;ve embarked on various personal projects,
        aimingto enhance my abilities and delve into emerging web technologies. This dynamic blend of
        academic background, professional engagement, and personal exploration fuels my passion for
        creating innovative and impactful web solutions.
        <br/><br/>
        Here are a few technologies I&apos;ve been working with recently:
      </p>

      <div className="mt-6 flex flex-wrap xs:gap-8 gap-2">
        {technologies.map((item) => (
          <TechCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default About
