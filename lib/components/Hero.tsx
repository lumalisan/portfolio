'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { lisandroRochaTau } from '@/assets';

const Hero = () => {
  return (
    <>
      <section className="relative flex sm:flex-row flex-col w-full h-screen mx-auto sm:bg-hero bg-hero-mobile overflow-hidden">

        {/* Header Text */}
        <div className={'absolute inset-0 sm:top-[250px] top-[150px] lg:top-[150px] xl:top-[250px] sm:px-16 px-6 max-w-7xl mx-auto flex flex-row items-start justify-between gap-3'}>
          {/* Small black dot for mobile */}
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-black" />
            <div className="w-1 sm:h-80 h-40 bw-gradient" />
          </div>

          <div>
            <h1 className={'text-navy font-medium lg:text-xl md:text-lg sm:text-md text-base mt-2'}>
              Hi, my name is{' '}
            </h1>
            <h2 className={'text-black font-bold lg:text-7xl md:text-5xl sm:text-4xl text-3xl lg:leading-[5rem] mt-2 font-poppins'}>
              Lisandro Rocha.
            </h2>
            <h3 className={'text-black/90 font-bold lg:text-7xl md:text-5xl sm:text-4xl text-3xl lg:leading-[5rem] mt-2 font-poppins'}>
              I build things for the web.
            </h3>
            <p className={'text-black/90 font-medium lg:text-xl md:text-lg sm:text-md text-base mt-2'}>
              I&rsquo;m a passionate software engineer with a specialization <br /> in building exceptional digital experiences.
            </p>
          </div>
          <div className="w-[5vw] flex flex-col items-start justify-center sm:-ml-[3rem] xxs:mt-4"></div>
        </div>

        {/* Scrolling Animated Btn */}
        <div className="absolute md:bottom-10 sm:bottom-52 bottom-24 w-full flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 border-beige flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-beige mb-1"
              />
            </div>
          </a>
        </div>

        {/* Personal Image */}
        <div>
          <Image
            src={lisandroRochaTau}
            alt="Lisandro Rocha portait"
            className="absolute bottom-0 ml-[45vw] 
            md:ml-[50vw] xmd:ml-[50vw] lg:ml-[50vw] xl:ml-[60vw]
            sm:w-[90vh] md:w-[70vh] xl:w-[100vh]"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
