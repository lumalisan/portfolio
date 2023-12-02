import ProjectCard from './ProjectCard';
import SectionLayout from './SectionLayout';
import SectionTitle from './SectionTitle';

const projects = [
  {
    title: 'Título del proyecto',
    body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum arcu sollicitudin, volutpat natoque etiam urna ligula erat cum posuere a. A convallis dapibus commodo nunc porta consequat primis non in montes vulputate, cras risus enim ultrices lacinia quam varius mus natoque libero, velit curae nam proin pretium phasellus dui purus cum facilisi.',
    links: {
      github: '#',
      deploy: '#',
    },
  },
  {
    title: 'Título del proyecto 2',
    body: 'Aliquam taciti diam varius natoque tempor mus mattis, pretium magna lacinia id fames habitasse etiam suscipit, neque at dictumst ridiculus erat facilisis. Cursus tristique vivamus hac suspendisse iaculis metus, felis massa nisi viverra ultrices justo eleifend.',
    links: {
      github: '#',
      deploy: '#',
    },
  },
  {
    title: 'Título del proyecto 3',
    body: 'Aptent ullamcorper tortor nibh porttitor. Sodales etiam euismod lectus viverra convallis velit mollis fermentum et risus nulla magnis, imperdiet hac hendrerit at sociosqu aliquam enim pulvinar justo class ornare. A dictum platea urna purus vehicula, netus cubilia vulputate pretium, habitant egestas taciti augue.',
    links: {
      github: '#',
      deploy: '#',
    },
  },
  {
    title: 'Título del proyecto 4',
    body: 'Qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.',
    links: {
      github: '#',
      deploy: '#',
    },
  },
];

const Projects = () => {
  return (
    <div className='bg-navy'>
      <SectionLayout>
        <SectionTitle sectionNumber='03.' title='Projects' titleColor='beige' />

        {/* Grid Layout */}
        <div className='grid gap-4 [grid-template-columns:repeat(auto-fill,_minmax(300px,_1fr))]'>
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
