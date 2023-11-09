'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import closeMenu from '@/assets/nav/close-menu.png';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

const Menu = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-40 text-xl'>
      <button onClick={() => router.back()}>
        <Image
          src={closeMenu}
          alt='close menu'
          width={30}
          height={30}
        ></Image>
      </button>
      <div className='flex flex-col items-center gap-20 h-1/2'>
        <Link href='/'>
          <Image
            src={logo}
            alt='logo'
            width={30}
            height={30}
          ></Image>
        </Link>
        {session && (
          <button
            className='sub-title'
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            Sign out
          </button>
        )}
      </div>
    </div>
  );
};

export default Menu;
