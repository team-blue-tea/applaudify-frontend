'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllApplauds, getAllMembers, addNewMember } from '@/libs/DB';
import { useSession } from 'next-auth/react';
import { ApplaudT } from '@/types/ApplaudT';
import { MemberT } from '@/types/MemberT';
import ApplaudCard from '@/components/ApplaudCard/ApplaudCard';
import Inbox from '@/components/Inbox/Inbox';

const Home = () => {
  const [applauds, setApplauds] = useState<ApplaudT[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;
    let isSubscribed = true;
    (async () => {
      const applauds = await getAllApplauds();
      const members = await getAllMembers();
      if (isSubscribed) {
        setApplauds(applauds);
      }

      if (
        isSubscribed &&
        !members.some((member: MemberT) => member.email === session.user?.email)
      ) {
        await addNewMember({
          email: session?.user?.email as string,
          name: session?.user?.name as string,
          avatarUrl: session?.user?.image as string,
        });
      }
    })();
    return () => {
      isSubscribed = false;
    };
  }, [session]);

  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <header className='flex w-full items-center justify-between'>
        <Link href='/home'>
          <h1 className='header-logo ombre-text'>applaudify</h1>
        </Link>
        <Link
          href='/menu'
          className='header-nav'
        >
          Menu
        </Link>
        <Link
          href='/profile'
          className='header-nav'
        >
          Profile
        </Link>
        {session && <Inbox session={session} />}
      </header>
      <main className='flex flex-col gap-8 mt-6'>
        <ApplaudCard applauds={applauds} />
      </main>
    </div>
  );
};

export default Home;
