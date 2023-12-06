import Link from 'next/link';
import { externalLinkIcon, folderIcon, gitHubIcon } from '@/assets/icons';

interface Props {
  title: string;
  body: string;
  links: {
    github: string;
    deploy: string;
  };
}

const ProjectCard = ({ title, body, links }: Props) => {
  return (
    <div
      className='reveal-animation flex flex-col gap-4 rounded-lg bg-beige p-10
                        transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-beige'
    >
      <div className='flex items-end justify-between text-2xl text-navy'>
        {folderIcon}
        <div className='flex items-center gap-4'>
          <Link
            href={links.github}
            target='_blank'
            className='transition duration-300 hover:text-sky-600'
          >
            {gitHubIcon}
          </Link>
          <Link
            href={links.deploy}
            target='_blank'
            className='transition duration-300 hover:text-sky-600'
          >
            {externalLinkIcon}
          </Link>
        </div>
      </div>
      <Link
        href={links.deploy}
        target='_blank'
        className='text-xl font-extrabold text-navy transition-all duration-300 hover:text-sky-600'
      >
        {title}
      </Link>
      <p className='text-lg text-navy'>{body}</p>
    </div>
  );
};

export default ProjectCard;
