'use client';

import Link from 'next/link';
import TechCard from './TechCard';
import SectionLayout from './SectionLayout';
import SectionTitle from './SectionTitle';
import { technologies } from '../constants';

const About = () => {
  return (
    <div className='bg-purple'>
      <SectionLayout>
        <SectionTitle sectionNumber='01.' title='About Me' titleColor='beige' />

        <p className='reveal-animation mt-4 text-xl leading-8 text-beige/90'>
          Hello! I&apos;m Lisandro, and my interest in web development traces
          back to my early days, tinkering with my father&apos;s computer. This
          childhood curiosity ignited a journey that led me to become a computer
          engineer, graduating from the
          <Link
            href={'https://www.uib.es/es/'}
            className='text-blue transition-colors duration-300 hover:text-sky-200'
          >
            {' '}
            University of the Balearic Islands (UIB)
          </Link>
          . Throughout my professional journey, I&apos;ve had the privilege of
          working in diverse companies, where I&apos;ve not only implemented my
          skills and knowledge but also continuously improved them.
          <br />
          <br />
          In addition to my professional experiences, I&apos;ve embarked on
          various personal projects, aiming to enhance my abilities and delve
          into emerging web technologies. This dynamic blend of academic
          background, professional engagement, and personal exploration fuels my
          passion for creating innovative and impactful web solutions.
          <br />
          <br />
          Here are a few technologies I&apos;ve been working with recently:
        </p>

        <div className='mt-6 flex flex-wrap gap-2 xs:gap-8'>
          {technologies.map((item) => (
            <TechCard key={item.title} {...item} />
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default About;
