import {
  faCar,
  faChartSimple,
  faHouseUser,
  faShield,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import {
  astroIcon,
  jestIcon,
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
    title: 'Astro',
    icon: astroIcon,
  },
  {
    title: 'Jest',
    icon: jestIcon,
  },
  {
    title: 'Node.js',
    icon: faNodeJs,
  },
  {
    title: 'MongoDB',
    icon: mongoDbIcon,
  },
];

export const experienceData = [
  {
    date: 'March 2024 - Present',
    icon: faCar,
    jobTitle: 'React Frontend Developer',
    companyName: 'Prime IT',
    jobDescription:
      'Built and launched a new web platform for a major Spanish car rental company using Next.js and TailwindCSS. Maintained and optimized 3+ enterprise-level applications, improving load times and accessibility compliance. Ensured cross-browser compatibility and high accessibility standards. Ensured cross-browser support and implemented Jest + React Testing Library for full test coverage.',
  },
  {
    date: 'March 2023 - February 2024',
    icon: faHouseUser,
    jobTitle: 'Frontend Team Leader & Developer',
    companyName: 'PlattesGroup',
    jobDescription:
      'Led small team in developing a real estate management platform from scratch using NextJS and TailwindCSS. Provided constant support for other developed platforms as well.',
  },
  {
    date: 'January 2022 - February 2023',
    icon: faChartSimple,
    jobTitle: 'Full Stack Developer',
    companyName: 'PlattesGroup',
    jobDescription:
      'Created a DMS platform from scratch with React and Vite integration to support the Zoho Creator-based accounting platform.',
  },
  {
    date: 'September - December 2021',
    icon: faSitemap,
    jobTitle: 'Junior Full Stack Developer',
    companyName: 'PlattesGroup',
    jobDescription:
      'Created Zoho Creator-based accounting platform from scratch and integrated and mapped accounting data to DATEV for greater efficiency.',
  },
  {
    date: 'June - August 2021',
    icon: faShield,
    jobTitle: 'Junior Full Stack Developer',
    companyName: 'Juniper',
    jobDescription:
      'As an enhancement team member, I was assigned to identify and correct vulnerabilities with main emphasis on resolving issues such as SQL injection. I also played a major role in error-free conversion from VB to C# so that the software remained as strong and compatible as ever.',
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
