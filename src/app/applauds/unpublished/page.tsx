'use client';
import React, {useEffect} from 'react';
import { useRouter } from 'next/navigation';

const Unpublished = () => {
  
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
      <h2>Publish Reverted!</h2>
    </main>
  );
};

export default Unpublished;
