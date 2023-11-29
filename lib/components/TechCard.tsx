import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    title: string;
    icon: IconDefinition;
}

const TechCard = ({ title, icon }: Props) => {
    return (
        <div
            className="xs:w-[10rem] w-full min-h-[10rem] flex flex-col gap-3 justify-center items-center text-center
        bg-navy text-beige border-2 border-beige rounded-3xl hover:shadow-md hover:shadow-beige hover:bg-transparent hover:-translate-y-1 transition duration-300"
        >
            <FontAwesomeIcon
                icon={icon}
                className="w-12 h-12"
            />
            <h3 className="text-lg font-bold">
                {title}
            </h3>
        </div>
    );
};

export default TechCard