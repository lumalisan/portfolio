import { useEffect, useState } from 'react';

export default function useNavbarVisible() {
  const [navbarVisible, setNavbarVisible] = useState<boolean>(true);

  useEffect(() => {
    let prevScrollpos = window.scrollY;

    const handleScroll = () => {
      let currentScrollPos = window.scrollY;

      if (prevScrollpos > currentScrollPos) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }

      prevScrollpos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return navbarVisible;
}
