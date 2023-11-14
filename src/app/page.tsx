'use client';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }

    if (status === 'loading') {
      return;
    }

    if (session) {
      router.push('/home');
    } else {
      router.push('/landing');
    }
  }, [isInitialRender, status, session, router]);

  return <div className='bg-light w-full h-screen'></div>;
};

export default Dashboard;
