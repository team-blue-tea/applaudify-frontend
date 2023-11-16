'use client';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const SessionCheck = () => {
  const {data: session, status} = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status !== 'loading' && !session && !['/', '/login', '/about'].includes(pathname)) {
      router.push('/landing');
    }
  }, [status, session, pathname, router]);

  return null;
};

export default SessionCheck;
