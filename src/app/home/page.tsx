'use client';
import React, { useState, useEffect } from 'react';
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
  }, [session]);

  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <header className='flex flex-col items-center gap-10'>
        <Link href='/home'>
          <h1 className='header-logo ombre-text'>applaudify</h1>
        </Link>
        <div className='flex justify-between w-full items-center'>
          <Link
            href='/menu'
            className='header-nav'
          >
            Menu
          </Link>
          <div className='flex gap-5 items-center'>
            <Link
              href='/profile'
              className='header-nav'
            >
              Profile
            </Link>
            <Link
              href='/applauds'
              className='flex gap-2 items-center header-nav header-btn'
            >
              Inbox
              {notifications !== '' && (
                <div className='counter-border'>
                  <div className='counter small'>{notifications}</div>
                </div>
              )}
            </Link>
          </div>
        </div>
      </header>
      <main className='flex flex-col gap-8 mt-6'>
        <ApplaudCard applauds={applauds} />
      </main>
    </div>
  );
};

export default Home;
