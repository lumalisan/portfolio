'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { lisandroRochaTau } from '@/assets';

const Hero = () => {
  return (
    <>
      <section className='relative mx-auto flex h-screen w-full flex-col overflow-hidden bg-hero-mobile sm:flex-row sm:bg-hero'>
        {/* Header Text */}
        <div
          className={
            'absolute inset-0 top-[100px] mx-auto flex max-w-7xl flex-row items-start justify-start gap-5 px-6 sm:top-[250px] sm:px-16 lg:top-[150px] lg:gap-20 xl:top-[250px]'
          }
        >
          {/* Small black dot for mobile */}
          <div className='ml-3 mt-5 flex flex-col items-center justify-center'>
            <div className='h-5 w-5 rounded-full bg-black' />
            <div className='bw-gradient h-40 w-1 sm:h-80' />
          </div>

          <div>
            <h1
              className={
                'sm:text-md mt-2 text-base font-medium text-navy md:text-lg 2xl:text-xl'
              }
            >
              Hi, my name is{' '}
            </h1>
            <h2
              className={
                'font-poppins mt-2 text-3xl font-black text-black sm:text-4xl md:text-5xl 2xl:text-7xl 2xl:leading-[5rem]'
              }
            >
              Lisandro Rocha.
            </h2>
            <h3
              className={
                'font-poppins mt-2 text-3xl font-black text-black/90 sm:text-4xl md:text-5xl 2xl:text-7xl 2xl:leading-[5rem]'
              }
            >
              I build things for the web.
            </h3>
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
        <div className='absolute bottom-24 flex w-full items-center justify-center sm:bottom-52 md:bottom-10'>
          <a href='#about'>
            <div className='flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-beige p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className='mb-1 h-3 w-3 rounded-full bg-beige'
              />
            </div>
          </a>
        </div>

        {/* Personal Image */}
        <div>
          <Image
            priority
            src={lisandroRochaTau}
            alt='Lisandro Rocha portait'
            className='absolute bottom-0 ml-[45vw] 
            sm:w-[90vh] md:ml-[50vw] md:w-[70vh] xmd:ml-[50vw]
            lg:ml-[50vw] xl:ml-[60vw] xl:w-[100vh]'
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
