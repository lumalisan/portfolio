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
  cypressIcon,
  jestIcon,
  mcpIcon,
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
    title: 'Cypress',
    icon: cypressIcon,
  },
  {
    title: 'MCP',
    icon: mcpIcon,
  },
];

export const experienceData = [
  {
    date: 'March 2024 - Present',
    icon: faCar,
    jobTitle: 'React Frontend Developer',
    companyName: 'Prime IT',
    jobDescription:
      'Developed and released a new web platform in Next.js and TailwindCSS for a large Spanish car hire company. Ensured that 3+ enterprise applications were kept manageable and consistent with accessibility standards and page load times. Guaranteed cross-browser compatibility and full test coverage with Jest + React Testing Library.',
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
    body: 'An e-commerce platform built with Next.js, TailwindCSS, and MongoDB so you can browse with ease. Has a beautiful home page design, secure payment options, clear product details and a handy cart. The admin panel makes for easy management, while TypeScript and smooth animations provide a first-class experience.',
    links: {
      deploy: 'https://www.jardindetramas.com/',
    },
  },
  {
    title: 'Musicfy',
    body: 'Spotify like app with Astro/React. Features include player control, song navigation, playlists, and more. Created using Typescript, animations, TailwindCSS, Supabase w/ PostgresSQL, Astro endpoints, accessibility and responsiveness in mind. Try it on mobile for a great experience!',
    links: {
      github: 'https://github.com/lumalisan/musicfy',
      deploy: 'https://chillmusicfy.netlify.app/',
    },
  },
  {
    title: 'Portfolio',
    body: 'My personal portfolio website (yes, this one) built with Next.js, TailwindCSS, TypeScript and Framer Motion. All made with a focus on performance and accessibility. It features a responsive design that looks great on all devices, try it on your phone!',
    links: {
      github: 'https://github.com/lumalisan/portfolio',
    },
  },
  {
    title: 'MCP Collection',
    body: 'A collection of custom-built Model Context Protocol (MCP) servers, showcasing how LLMs can securely and efficiently access diverse data sources and tools. Features practical examples, like an MCP for the Pokémon API, designed to provide structured context and enhance LLM capabilities for more intelligent AI applications.',
    links: {
      github: 'https://github.com/lumalisan/mcp-collection',
    },
  },
];

export const metadataValues = {
  title: 'Lisandro Rocha - Full-stack Developer Portfolio',
  description:
    'Portfolio of Lisandro Rocha, a Full-stack Developer specializing in building exceptional digital experiences with React, TypeScript, and modern web technologies.',
  creatorName: 'Lisandro Rocha Tau',
  siteUrl: 'https://lisandrorocha.vercel.app',
  ogImageUrl: '/images/og-image.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Lisandro Rocha Portfolio',
  email: 'lumalisan@gmail.com',
};
