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

        <div role='region' aria-label='About me section'>
          <p className='reveal-animation text-xl leading-8 text-beige/90'>
            Hello! I&apos;m Lisandro, and my interest in web development traces
            back to my early days, tinkering with my father&apos;s computer.
            This childhood curiosity ignited a journey that led me to become a
            computer engineer, graduating from the
            <Link
              href={'https://www.uib.es/es/'}
              className='text-blue transition-colors duration-300 hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-200'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Visit University of the Balearic Islands website (opens in new tab)'
            >
              {' '}
              University of the Balearic Islands (UIB)
            </Link>
            . Throughout my professional journey, I&apos;ve had the privilege of
            working in diverse companies, where I&apos;ve not only implemented
            my skills and knowledge but also continuously improved them.
            <br />
            <br />
            In addition to my professional experiences, I&apos;ve embarked on
            various personal projects, aiming to enhance my abilities and delve
            into emerging web technologies. This dynamic blend of academic
            background, professional engagement, and personal exploration fuels
            my passion for creating innovative and impactful web solutions.
            <br />
            <br />
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <div
            className='mt-6 grid gap-4 [grid-template-columns:repeat(auto-fill,_minmax(150px,_1fr))]'
            role='list'
            aria-label='Technologies I work with'
          >
            {technologies.map((item) => (
              <TechCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default About;
