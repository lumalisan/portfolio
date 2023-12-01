import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className='flex h-16 w-full place-items-center justify-center bg-indigo-950'>
      <h4 className='text-beige'>
        Made with <FontAwesomeIcon icon={faHeart} /> by Lisandro Rocha
      </h4>
    </div>
  );
};

export default Footer;
