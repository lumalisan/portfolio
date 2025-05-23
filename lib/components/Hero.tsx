import Image from 'next/image';
import { lisandroRochaTau } from '@/assets';
import ScrollingBtnAnimated from './ScrollingBtnAnimated';

const Hero = () => {
  return (
    <section
      className='relative mx-auto flex h-screen w-full flex-col overflow-hidden bg-hero-mobile sm:flex-row sm:bg-hero'
      role='banner'
      aria-labelledby='hero-title'
    >
      {/* Header Text */}
      <div
        className={
          'absolute inset-0 top-[100px] mx-auto flex max-w-7xl flex-row items-start justify-start gap-5 px-6 sm:top-[250px] sm:px-16 lg:top-[150px] lg:gap-20 xl:top-[250px]'
        }
      >
        {/* Small black dot for mobile */}
        <div className='ml-3 mt-5 flex flex-col items-center justify-center'>
          <div className='h-5 w-5 rounded-full bg-black' aria-hidden='true' />
          <div className='bw-gradient h-40 w-1 sm:h-80' aria-hidden='true' />
        </div>

        <div>
          <span
            className={
              'sm:text-md mt-2 block text-base font-medium text-navy md:text-lg 2xl:text-xl'
            }
          >
            Hi, my name is{' '}
          </span>
          <h1
            id='hero-title'
            className={
              'font-poppins mt-2 text-3xl font-black text-black sm:text-4xl md:text-5xl 2xl:text-7xl 2xl:leading-[5rem]'
            }
          >
            Lisandro Rocha
          </h1>
          <h2
            className={
              'font-poppins mt-2 text-3xl font-black text-black/90 sm:text-4xl md:text-5xl 2xl:text-7xl 2xl:leading-[5rem]'
            }
          >
            I build things for the web.
          </h2>
          <p
            className={
              'sm:text-md mt-2 text-base font-medium text-black/90 md:text-lg 2xl:text-xl'
            }
          >
            I&rsquo;m a passionate software engineer with a specialization{' '}
            <br className='hidden md:block' /> in building exceptional digital
            experiences.
          </p>
        </div>
        <div className='xxs:mt-4 flex w-[5vw] flex-col items-start justify-center sm:-ml-[3rem]'></div>
      </div>

      {/* Scrolling Animated Btn */}
      <ScrollingBtnAnimated />

      {/* Personal Image */}
      <div>
        <Image
          priority
          src={lisandroRochaTau}
          alt='Lisandro Rocha portrait'
          className='absolute bottom-0 ml-[45vw] 
            sm:w-[90vh] md:ml-[50vw] md:w-[70vh] xmd:ml-[50vw]
            lg:ml-[50vw] xl:ml-[60vw] xl:w-[100vh]'
        />
      </div>
    </section>
  );
};

export default Hero;
