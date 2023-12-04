'use client';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import CustomTimelineElement from './CustomTimelineElement';
import { experienceData } from '../constants';

const CustomTimeline = () => {
  return (
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
  );
};

export default CustomTimeline;
