'use client';

import { motion } from 'framer-motion';

const ScrollingBtnAnimated = () => {
  return (
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
  );
};

export default ScrollingBtnAnimated;
