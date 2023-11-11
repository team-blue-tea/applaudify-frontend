'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import closeMenu from '@/assets/nav/close-menu.png';


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => {

  const { data: session } = useSession();
  const router = useRouter();
  return (
    <motion.div variants={variants}>
      <div className='h-screen flex flex-col items-center justify-center gap-40 text-xl bg-blue'>
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
        <Link
          href='/profile'
          className='sub-title'
        >
          Profile
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
    </motion.div>
  );
};

export default Navigation;
