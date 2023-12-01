'use client'

import { faChartSimple, faHouseUser, faShield, faSitemap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import SectionLayout from './SectionLayout';
import SectionTitle from './SectionTitle';
import CustomTimelineElement from './CustomTimelineElement';

const experienceData = [
    {
        date: 'March - October 2023',
        icon: faHouseUser,
        jobTitle: 'Frontend Team Leader & Developer',
        companyName: 'PlattesGroup',
        jobDescription: "Led the frontend team in developing a real estate management platform from the ground up using NextJS and TailwindCSS. Additionally, provided ongoing support for other created platforms."
    },
    {
        date: 'January 2022 - February 2023',
        icon: faChartSimple,
        jobTitle: 'Full Stack Developer',
        companyName: 'PlattesGroup',
        jobDescription: "Developed a DMS platform from scratch using React and Vite, with integration to support the Zoho Creator-based accounting platform."
    },
    {
        date: 'September - December 2021',
        icon: faSitemap,
        jobTitle: 'Junior Full Stack Developer',
        companyName: 'PlattesGroup',
        jobDescription: "Developed a Zoho Creator-based accounting platform from scratch, seamlessly integrating and mapping accounting data to DATEV for enhanced efficiency."
    },
    {
        date: 'June - August 2021',
        icon: faShield,
        jobTitle: 'Junior Full Stack Developer',
        companyName: 'Juniper',
        jobDescription: "As a member of the enhancement team, I took on the responsibility of identifying and rectifying vulnerabilities, with a primary focus on addressing issues like SQL injection. Additionally, I played a pivotal role in the seamless translation of code from VB to C#, ensuring the continued robustness and compatibility of the software."
    }
]

const Experience = () => {
    return (
        <SectionLayout>
            <SectionTitle
                sectionNumber="02."
                title="Experience"
                titleColor="purple"
            />

            <VerticalTimeline className='mt-5 vertical-timeline-custom-line' lineColor='#435585'>
                {
                    experienceData.map((item, index) =>
                        <CustomTimelineElement
                            key={item.jobTitle + item.companyName}
                            position={index % 2 === 0 ? 'left' : 'right'}
                            {...item}
                        />
                    )
                }
            </VerticalTimeline>
        </SectionLayout>
    )
}

export default Experience