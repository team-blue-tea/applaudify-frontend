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
import ApplaudCard from '@/things/ApplaudCard/ApplaudCard';

const Home = () => {
  const [applauds, setApplauds] = useState<ApplaudT[]>([]);
  const [existingMembers, setExistingMembers] = useState<MemberT[]>([]);
  const { data: session } = useSession();
  const [notifications, setNotifications] = useState<string>('');

  useEffect(() => {
    if (!session) {
      return;
    }
    (async () => {
      const applauds = await getAllApplauds();
      const memberEmail = session?.user?.email;
      const unreadNotifications = await getNumberOfUnreadApplaudsByMemberEmail(
        memberEmail as string
      );
      console.log(unreadNotifications);
      if (unreadNotifications !== 0) {
        setNotifications(unreadNotifications);
      }
      setApplauds(applauds!);
    })();
    (async () => {
      const existingMembers = await getAllMembers();
      setExistingMembers(existingMembers);
    })();
  }, [session]);

  useEffect(() => {
    if (existingMembers.length === 0 || !session) {
      return;
    }
    const currentMember = {
      email: session?.user?.email as string,
      name: session?.user?.name as string,
      avatarUrl: session?.user?.image as string,
    };
    const emails = existingMembers.map((member) => member.email);
    const matchedEmail = emails.filter(
      (email) => email === session?.user?.email
    );
    if (matchedEmail.length === 0) {
      (async () => {
        await addNewMember(currentMember);
      })();
    } else {
      return;
    }
  }, [existingMembers, session]);

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
