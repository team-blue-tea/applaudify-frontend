'use client';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const SessionCheck = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === 'loading') {
      return;
    }
    if (!session) {
      router.push('/landing');
    }
  }, [session, status, router]);

  return (
    <>
      {pathname === '/about' ? null : (
        <div className='bg-light w-full h-screen'></div>
      )}
      ;
    </>
  );
};

export default SessionCheck;
