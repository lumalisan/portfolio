import { ReactElement } from 'react';

interface Props {
  children: ReactElement | ReactElement[];
}

const SectionLayout = ({ children }: Props) => {
  return (
    <div className='relative z-0 mx-auto max-w-4xl px-6 py-24 sm:px-16 sm:py-40'>
      {children}
    </div>
  );
};

export default SectionLayout;
