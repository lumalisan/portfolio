import ProjectCard from './ProjectCard';
import SectionLayout from './SectionLayout';
import SectionTitle from './SectionTitle';
import { projects } from '../constants';

const Projects = () => {
  return (
    <div className='bg-navy'>
      <SectionLayout>
        <SectionTitle sectionNumber='03.' title='Projects' titleColor='beige' />

        {/* Grid Layout */}
        <div className='grid gap-4 [grid-template-columns:repeat(auto-fill,_minmax(250px,_1fr))]'>
          {/* Cards */}
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default Projects;
