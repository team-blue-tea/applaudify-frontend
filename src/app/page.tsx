'use client';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';

const Dashboard = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading') {
      return;
    }
    if (session) {
     redirect('/home');
    } else {
      redirect('/landing');
    }
  }, [session, status]);

  return <div className='bg-light w-full h-screen'></div>;
};

export default Dashboard;
