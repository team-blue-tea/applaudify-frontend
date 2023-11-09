'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Published = () => {

  const router = useRouter();

  useEffect(() => {
    (() => {
      setTimeout(() => {
        router.back();
      }, 1000);
    })();
  }, [router]);

  return (
    <main className='flex justify-center items-center w-screen h-screen'>
      <h2>Applaud published!</h2>
    </main>
  );
};

export default Published;
