import Link from 'next/link';
import { externalLinkIcon, folderIcon, gitHubIcon } from '@/assets/icons';

interface Props {
  title: string;
  body: string;
  links: {
    github?: string;
    deploy: string;
  };
}

const ProjectCard = ({ title, body, links }: Props) => {
  return (
    <article
      className='reveal-animation flex flex-col gap-4 rounded-lg bg-beige p-10
                transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-beige'
      aria-labelledby={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className='flex items-end justify-between text-2xl text-navy'>
        <div aria-hidden='true'>{folderIcon}</div>
        <div
          className='flex items-center gap-4'
          role='group'
          aria-label='Project links'
        >
          {links.github && (
            <Link
              href={links.github}
              target='_blank'
              rel='noopener noreferrer'
              className='transition duration-300 hover:text-sky-600'
              aria-label={`View ${title} source code on GitHub`}
            >
              <span className='sr-only'>GitHub repository for {title}</span>
              {gitHubIcon}
            </Link>
          )}
          {links.deploy && (
            <Link
              href={links.deploy}
              target='_blank'
              rel='noopener noreferrer'
              className='transition duration-300 hover:text-sky-600'
              aria-label={`Visit ${title} live site`}
            >
              <span className='sr-only'>Live site for {title}</span>
              {externalLinkIcon}
            </Link>
          )}
        </div>
      </div>
      <Link
        href={links.deploy}
        target='_blank'
        rel='noopener noreferrer'
        className='text-xl font-extrabold text-navy transition-all duration-300 hover:text-sky-600'
      >
        <h3 id={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
      </Link>
      <p className='text-lg text-navy'>{body}</p>
    </article>
  );
};

export default ProjectCard;
