'use client'

import React from 'react';
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
  <div className='h-screen flex flex-col items-center justify-center gap-4'>
    <button className='px-5 py-2 border border-black rounded-lg' onClick= {() => signIn('github', { callbackUrl: '/home'})}>Continue with GitHub</button>
    <button className='px-5 py-2 border border-black rounded-lg' >Continue with Google</button>
    <button className='px-5 py-2 border border-black rounded-lg' >Continue with LinkedIn</button>
  </div>
  );
};

export default Login;
