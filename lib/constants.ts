import {
  faCar,
  faChartSimple,
  faHouseUser,
  faShield,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons';
import { faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import {
  astroIcon,
  mongoDbIcon,
  nextJsIcon,
  tailwindCssIcon,
  typeScriptIcon,
} from '@/assets/icons';
import { NavLink } from './types/navLink';

export const navLinks: NavLink[] = [
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

export const technologies = [
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

export const experienceData = [
  {
    date: 'March 2024 - Present',
    icon: faCar,
    jobTitle: 'React Frontend Developer',
    companyName: 'Centauro Rent a Car (PrimeIT)',
    jobDescription:
      "Hired by PrimeIT, but working with one of Spain's largest car rental companies. My responsibilities include developing their new website, built from scratch using TailwindCSS, and maintaining their three web applications used at a European level.",
  },
  {
    date: 'March 2023 - February 2024',
    icon: faHouseUser,
    jobTitle: 'Frontend Team Leader & Developer',
    companyName: 'PlattesGroup',
    jobDescription:
      'Led the frontend team in developing a real estate management platform from the ground up using NextJS and TailwindCSS. Additionally, provided ongoing support for other created platforms.',
  },
  {
    date: 'January 2022 - February 2023',
    icon: faChartSimple,
    jobTitle: 'Full Stack Developer',
    companyName: 'PlattesGroup',
    jobDescription:
      'Developed a DMS platform from scratch using React and Vite, with integration to support the Zoho Creator-based accounting platform.',
  },
  {
    date: 'September - December 2021',
    icon: faSitemap,
    jobTitle: 'Junior Full Stack Developer',
    companyName: 'PlattesGroup',
    jobDescription:
      'Developed a Zoho Creator-based accounting platform from scratch, seamlessly integrating and mapping accounting data to DATEV for enhanced efficiency.',
  },
  {
    date: 'June - August 2021',
    icon: faShield,
    jobTitle: 'Junior Full Stack Developer',
    companyName: 'Juniper',
    jobDescription:
      'As a member of the enhancement team, I took on the responsibility of identifying and rectifying vulnerabilities, with a primary focus on addressing issues like SQL injection. Additionally, I played a pivotal role in the seamless translation of code from VB to C#, ensuring the continued robustness and compatibility of the software.',
  },
];

export const projects = [
  {
    title: 'E-Commerce Website',
    body: 'An e-commerce platform built with Next.js, TailwindCSS, and MongoDB for easy online shopping. It features a dynamic homepage, secure payments, clear product details, and a handy cart. The admin panel simplifies management, while TypeScript and sleek animations deliver a smooth, engaging design.',
    links: {
      deploy: 'https://www.jardindetramas.com/',
    },
  },
  {
    title: 'Musicfy',
    body: 'In Progress - Building a Spotify-like app with Astro/React. Features include player control, song navigation, playlists, and more. Utilizing Typescript, animations, TailwindCSS, and other technologies.',
    links: {
      github: 'https://github.com/lumalisan/musicfy',
      deploy: 'https://chillmusicfy.netlify.app/',
    },
  },
];
