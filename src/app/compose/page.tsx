'use client';
import React from 'react';
import Link from 'next/link';
// import InputEmoji from "react-input-emoji";

const Compose = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('applaud sent');
  }
  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <header className='flex justify-between'>
        <Link href='/applauds'>←</Link>
        <button type='submit' form='sendApplaud' onClick={handleSubmit}>Send</button>
      </header>
      <form id='sendApplaud' className='flex flex-col gap-10' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='To'
        />
        <input
          type='text'
          placeholder='Message'
        />
      </form>

    </div>
  );
};

export default Compose;
