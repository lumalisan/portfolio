import { memo } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useBetterMediaQuery } from '../hooks';
import { cn } from '../utils/cn';

interface Props {
  date: string;
  icon: IconDefinition;
  jobTitle: string;
  companyName: string;
  jobDescription: string;
  position: 'left' | 'right';
}

const CustomTimelineElement = ({
  date,
  icon,
  jobTitle,
  companyName,
  jobDescription,
  position,
}: Props) => {
  const isSmallDevice = useBetterMediaQuery(
    'only screen and (max-width : 1170px)'
  );

  return (
    <div className='reveal-animation mb-5'>
      <VerticalTimelineElement
        contentStyle={{
          background: '#363062',
          borderRadius: '0.5rem',
          boxShadow:
            '0 0 #0000, 0 0 #0000, 0 4px 6px -1px #363062 , 0 2px 4px -2px #363062',
        }}
        contentArrowStyle={{ borderRight: '7px solid  #363062' }}
        //@ts-ignore
        date={
          <h3
            className={cn(
              !isSmallDevice && position === 'left' ? 'ml-5' : 'mr-5',
              isSmallDevice && 'text-beige',
              'text-xl font-bold'
            )}
          >
            {date}
          </h3>
        }
        iconStyle={{
          background: '#363062',
          color: '#F5E8C7',
          boxShadow:
            '0 0 0 4px #afafafd2, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)',
        }}
        icon={<FontAwesomeIcon icon={icon} />}
        position={position}
        visible
      >
        <h3 className='text-xl font-bold tracking-wide text-beige'>
          {jobTitle}
        </h3>
        <h4 className='text-lg font-medium text-beige/70'>{companyName}</h4>
        <p className='text-base text-beige'>{jobDescription}</p>
      </VerticalTimelineElement>
    </div>
  );
};

export default memo(CustomTimelineElement);
