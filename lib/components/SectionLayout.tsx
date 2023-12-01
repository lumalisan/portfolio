import { MutableRefObject, ReactElement } from 'react'

interface Props {
    children: ReactElement | ReactElement[];
    sectionRef?: MutableRefObject<any>;
}

const SectionLayout = ({ children, sectionRef }: Props) => {
    return (
        <div
            ref={sectionRef}
            className="max-w-4xl mx-auto relative z-0 sm:px-16 px-6 sm:py-40 py-24"
        >
            {children}
        </div>
    )
}

export default SectionLayout