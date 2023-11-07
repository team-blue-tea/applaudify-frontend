'use client';
import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import {
  getAllApplauds,
  getAllMembers,
  addNewMember,
  getNumberOfUnreadApplaudsByMemberEmail,
} from '@/libs/DB';
import { useSession } from 'next-auth/react';
import { ApplaudT } from '@/types/ApplaudT';
import { MemberT } from '@/types/MemberT';
import ApplaudCard from '@/components/ApplaudCard/ApplaudCard';

const Home = () => {
  const [applauds, setApplauds] = useState<ApplaudT[]>([]);
  const { data: session } = useSession();
  const [notifications, setNotifications] = useState<string>('');

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

  useEffect(() => {
      (async () => {
        const memberEmail = session?.user?.email;
        if (memberEmail) {
          const unreadNotifications =
            await getNumberOfUnreadApplaudsByMemberEmail(memberEmail as string);
          if (unreadNotifications !== 0) {
            setNotifications(unreadNotifications);
          }
        }
      })();
  }, [ session]);

  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <header className='flex w-full justify-between'>
        <Link href='/menu'>
          <button className='border-solid border border-charcoal px-4 py-1'>
            Menu
          </button>
        </Link>
        <Link href='/applauds'>
          <button className='border-solid border border-charcoal px-4 py-1'>
            {notifications} Applauds
          </button>
        </Link>
      </header>
      <main className='flex flex-col gap-8 mt-6'>
        <ApplaudCard applauds={applauds} />
      </main>
    </div>
  );
};

export default Home;
