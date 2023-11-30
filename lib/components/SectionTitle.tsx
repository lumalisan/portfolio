interface Props {
    sectionNumber: string;
    title: string;
    titleColor: 'purple' | 'navy' | 'blue' | 'beige' | 'black';
}

const SectionTitle = ({ sectionNumber, title, titleColor }: Props) => {
    return (
        <div className='flex items-center whitespace-nowrap'>
            <h2 className={`text-3xl font-bold text-${titleColor}`}>
                <span className={`text-${titleColor}/50`}>{sectionNumber + ' '}</span>
                {title}
            </h2>
            <span className={`block relative h-[1px] w-full max-w-lg ml-5 bg-${titleColor}`}></span>
        </div>
    )
}

export default SectionTitle