'use client';
import React, { useEffect } from 'react';

const Published = () => {
  useEffect(() => {
    (() => {
      setTimeout(() => {
        window.history.back();
      }, 1000);
    })();
  }, []);

  return (
    <main className='flex justify-center items-center w-screen h-screen'>
      <h2>Applaud published!</h2>
    </main>
  );
};

export default Published;
