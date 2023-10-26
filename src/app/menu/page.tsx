import React from 'react';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-20 text-xl'>
      {/* <Link href='/search'>Search</Link> */}
      <Link href='/home'>Home</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/about'>About</Link>
    </div>
  );
};

export default Menu;
