'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import back from '@/assets/nav/back.png';
import github from '@/assets/login/github.png';

const Login = () => {
  return (
    <div className='flex flex-col mx-10 my-10 gap-10'>
      <header className='flex justify-start'>
        <Link href={'/'}>
        <Image
          src={back}
          alt='back'
          width={30}
          height={30}
        ></Image>
        </Link>
      </header>
      <div className='flex flex-col items-center gap-36'>
        <div className='flex flex-col gap-10'>
          <h1 className='title-logo ombre-text'>applaudify</h1>
          <h3 className='sub-title text-center text-charcoal'>
            login / signup
          </h3>
        </div>
        <button
          className='button login-btn'
          onClick={() => signIn('github', { callbackUrl: '/home' })}
        >
          <Image
            src={github}
            alt='github'
            width={20}
            height={20}
          ></Image>
          Continue with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;
