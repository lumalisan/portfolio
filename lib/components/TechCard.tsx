import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  title: string;
  icon: IconDefinition | JSX.Element;
}

const TechCard = ({ title, icon }: Props) => {
  const isIconDefinition = (
    icon: IconDefinition | JSX.Element
  ): icon is IconDefinition => {
    return (icon as IconDefinition).iconName !== undefined;
  };

  return (
    <div
      className='flex min-h-[10rem] w-full flex-col items-center justify-center gap-3 rounded-3xl border-2
        border-beige bg-navy text-center text-beige transition duration-300 hover:-translate-y-1 hover:bg-transparent hover:shadow-md hover:shadow-beige xs:w-[10rem]'
    >
      {isIconDefinition(icon) ? (
        <FontAwesomeIcon icon={icon} className='h-12 w-12' />
      ) : (
        <div className='h-12 w-12'>{icon}</div>
      )}
      <h3 className='text-lg font-bold'>{title}</h3>
    </div>
  );
};

export default TechCard;
