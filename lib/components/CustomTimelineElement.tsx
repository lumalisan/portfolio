import { memo, useRef } from "react"
import { useInView } from "framer-motion"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { VerticalTimelineElement } from "react-vertical-timeline-component"

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
    position
}: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
        amount: 0.5
    })

    return (
        <div ref={ref} className="mb-5">
            <VerticalTimelineElement
                contentStyle={{
                    background: '#363062',
                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                }}
                contentArrowStyle={{ borderRight: '7px solid  #363062' }}
                //@ts-ignore
                date={
                    <h3 className={`${position === 'left' ? 'ml-5' : 'mr-5'} text-xl font-bold`}>
                        {date}
                    </h3>
                }
                iconStyle={{
                    background: '#363062',
                    color: '#F5E8C7',
                    boxShadow: '0 0 0 4px #afafafd2, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)'
                }}
                icon={<FontAwesomeIcon icon={icon} />}
                visible={isInView}
                position={position}
            >
                <h3 className="text-beige text-xl font-bold tracking-wide">{jobTitle}</h3>
                <h4 className="text-beige/70 text-lg font-medium">{companyName}</h4>
                <p className='text-beige text-base'>{jobDescription}</p>
            </VerticalTimelineElement>
        </div>
    )
}

export default memo(CustomTimelineElement);