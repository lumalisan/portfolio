'use client';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import SectionLayout from './SectionLayout';
import SectionTitle from './SectionTitle';
import CustomTimelineElement from './CustomTimelineElement';
import { experienceData } from '../constants';

const Experience = () => {
  return (
    <SectionLayout>
      <SectionTitle
        sectionNumber='02.'
        title='Experience'
        titleColor='purple'
      />
      <VerticalTimeline
        className='vertical-timeline-custom-line'
        lineColor='#435585'
      >
        {experienceData.map((item, index) => (
          <CustomTimelineElement
            key={item.jobTitle + item.companyName}
            position={index % 2 === 0 ? 'left' : 'right'}
            {...item}
          />
        ))}
      </VerticalTimeline>
    </SectionLayout>
  );
};

export default Experience;
