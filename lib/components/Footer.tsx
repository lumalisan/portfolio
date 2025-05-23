import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer
      className='flex h-16 w-full place-items-center justify-center bg-indigo-950'
      role='contentinfo'
    >
      <h4 className='text-beige'>
        Made with{' '}
        <FontAwesomeIcon icon={faHeart} aria-label='love' role='img' /> by
        Lisandro Rocha
      </h4>
    </footer>
  );
};

export default Footer;
