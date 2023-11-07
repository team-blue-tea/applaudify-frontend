'use client';
import React from 'react';
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-10'>
      <button
        className='w-1/2 h-10 border border-charcoal'
        onClick={() => signIn('github', { callbackUrl: '/home' })}
      >
        Continue with GitHub
      </button>
      <button className='w-1/2 h-10 border border-charcoal'>
        Continue with Google
      </button>
      <button
        className='w-1/2 h-10 border border-charcoal'
        onClick={() => signIn('linkedin', { callbackUrl: '/home' })}
      >
        Continue with LinkedIn
      </button>
    </div>
  );
};

export default Login;
