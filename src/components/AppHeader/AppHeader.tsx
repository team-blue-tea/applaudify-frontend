'use client';
import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Inbox from '@/components/Inbox/Inbox';

const AppHeader = () => {
  const { data: session } = useSession();

  return (
    <>
      <header className='flex flex-col justify-between items-center gap-3'>
        <div className='flex w-full items-center justify-between'>
          <Link href='/home'>
            <h1 className='header ombre-text'>applaudify</h1>
          </Link>
          <div className='flex items-center gap-3'>
            <Link
              href='/menu'
              className='header-nav'
            >
              Menu
            </Link>
            {session && <Inbox session={session} />}
          </div>
        </div>
        <button className='search-btn w-full text-silver'>Search</button>
      </header>

      {/* // OLD */}
      {/* <header className='flex flex-col justify-between items-center gap-3'>
        <div className='flex w-full items-center justify-between'>
          {' '}
          <Link href='/home'>
            <h1 className='header-logo ombre-text'>applaudify</h1>
          </Link>
          <Link
            href='/menu'
            className='header-nav'
          >
            Menu
          </Link>
          <Link
            href='/profile'
            className='header-nav'
          >
            Profile
          </Link>
          {session && <Inbox session={session} />}
        </div>
      </header> */}
    </>
  );
};

export default AppHeader;
