'use client';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') {
      return;
    }

    if (session) {
      router.push('/home');
    } else {
      router.push('/landing');
    }
  }, [session, status, router]);

  return <div className='bg-light w-full h-screen'></div>;
};

export default Dashboard;
