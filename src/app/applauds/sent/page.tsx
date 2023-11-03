'use client';
import React, { useEffect } from 'react';

const Sent = () => {
  useEffect(() => {
    (() => {
      setTimeout(() => {
        window.location.href = '/home';
      }, 1000);
    })();
  }, []);

  return (
    <main className='flex justify-center items-center w-screen h-screen'>
      <h2>Applaud sent!</h2>
    </main>
  );
};

export default Sent;
