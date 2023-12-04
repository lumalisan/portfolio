import CustomTimeline from './CustomTimeline';
import SectionLayout from './SectionLayout';
import SectionTitle from './SectionTitle';

const Experience = () => {
  return (
    <SectionLayout>
      <SectionTitle
        sectionNumber='02.'
        title='Experience'
        titleColor='purple'
      />
      <CustomTimeline />
    </SectionLayout>
  );
};

export default Experience;
