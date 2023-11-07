'use client';
import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const Menu = () => {
  const { data: session } = useSession();
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-20 text-xl'>
      {/* <Link href='/search'>Search</Link> */}
      <Link href='/home'>Home</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/about'>About</Link>
      {session && (
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          Sign out
        </button>
      )}
    </div>
  );
};

export default Menu;
