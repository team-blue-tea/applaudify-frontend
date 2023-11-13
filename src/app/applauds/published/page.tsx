'use client';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Published = () => {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.back();
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <motion.main
      className='flex justify-center items-center w-screen h-screen'
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
      }}
    >
      <motion.h2>Applaud published!</motion.h2>
    </motion.main>
  );
};

export default Published;
