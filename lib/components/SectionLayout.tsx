import { MutableRefObject, ReactElement } from 'react';

interface Props {
  children: ReactElement | ReactElement[];
  sectionRef?: MutableRefObject<any>;
}

const SectionLayout = ({ children, sectionRef }: Props) => {
  return (
    <div
      ref={sectionRef}
      className='relative z-0 mx-auto max-w-4xl px-6 py-24 sm:px-16 sm:py-40'
    >
      {children}
    </div>
  );
};

export default SectionLayout;
