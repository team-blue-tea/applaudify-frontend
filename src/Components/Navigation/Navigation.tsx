import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className=''>
      <Link href='/search'>
        <button className=''>Search</button>
      </Link>
      <Link href='/home'>
        <button className=''>Home</button>
      </Link>
      <Link href='/profile'>
        <button className=''>Profile</button>
      </Link>
    </div>
  );
};

export default Navigation;
