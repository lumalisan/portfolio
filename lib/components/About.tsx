'use client'

import { faHtml5, faCss3, faJs, faReact, faNodeJs, fa500px } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';
import TechCard from './TechCard';

const technologies = [
  {
    title: 'HTML 5',
    icon: faHtml5,
  },
  {
    title: 'CSS 3',
    icon: faCss3,
  },
  {
    title: 'JavaScript',
    icon: faJs,
  },
  {
    title: 'TypeScript',
    icon: fa500px,
  },
  {
    title: 'React JS',
    icon: faReact,
  },
  {
    title: 'Tailwind CSS',
    icon: fa500px,
  },
  {
    title: 'Node JS',
    icon: faNodeJs,
  }
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
        Hello! I'm Lisandro, and my interest in web development traces back to my early days,
        tinkering with my father's computer. This childhood curiosity ignited a journey that
        led me to become a computer engineer, graduating from the
        <Link href={'https://www.uib.es/es/'} className='text-blue hover:text-sky-200 transition-colors duration-300'> University of the Balearic Islands (UIB)</Link>.
        Throughout my professional journey, I've had the privilege of working
        in diverse companies, where I've not only implemented my skills and knowledge but
        also continuously improved them.
        <br/><br/>
        In addition to my professional experiences, I've embarked on various personal projects,
        aimingto enhance my abilities and delve into emerging web technologies. This dynamic blend of
        academic background, professional engagement, and personal exploration fuels my passion for
        creating innovative and impactful web solutions. I'm excited about the ever-evolving landscape
        of web development and committed to building on my experiences to craft accessible and
        cutting-edge digital products.
        <br/><br/>
        Here are a few technologies I've been working with recently:
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
