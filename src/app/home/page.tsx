'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllApplauds, getAllMembers, addNewMember } from '@/libs/DB';
import { useSession } from 'next-auth/react';
import { ApplaudT } from '@/types/ApplaudT';
import { MemberT } from '@/types/MemberT';
import CardForHome from '@/components/CardForHome/CardForHome';
import Header from '@/components/Header/Header';
import Search from '@/components/Search/Search';

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
    <div className='flex flex-col gap-10 mt-8'>
      <Header />
      <Search />
      <main className='flex flex-col gap-8 mt-1 mx-10'>
        <CardForHome applauds={applauds} />
      </main>
    </div>
  );
};

export default Home;
