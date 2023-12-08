import {
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
    date: 'March - October 2023',
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
    title: 'Musicfy',
    body: 'WIP - Spotify-like application made in Astro / React for song playback. Includes Typescript, animations, TailwindCSS, and other amazing technologies. It includes basic functionalities such as volume change, previous and next song, play-pause, fast forward and rewind songs, playlist system with songs, choice of songs from each playlist, aside menu to select playlists, among others.',
    links: {
      github: 'https://github.com/lumalisan/musicfy',
      deploy: 'https://musicfy-v2.netlify.app/',
    },
  },
  {
    title: 'Heroes App',
    body: 'A slightly more advanced project, completed & deployed in June of 2022. The Heroes App is an application that allows you to explore and learn about your favorite heroes and characters. This small application was developed with the purpose of learning a little more about how react, vite, and other technologies work.',
    links: {
      github: 'https://github.com/lumalisan/heroes-app-vite',
      deploy: 'https://heroes-app-vite.netlify.app/',
    },
  },
  {
    title: 'Gif App',
    body: 'One of my first projects, completed & deployed in June of 2022. This app allows you to explore and enjoy the world of animated GIFs. With an easy-to-use interface, you can search and discover GIFs quickly and easily. This small application was developed with the purpose of learning a little more about how react, vite, and other technologies work.',
    links: {
      github: 'https://github.com/lumalisan/gif-expert-vite',
      deploy: 'https://lumalisan.github.io/gif-expert-vite/',
    },
  },
];
