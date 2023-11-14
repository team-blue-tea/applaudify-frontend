'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getAllMembers, getPublishedApplauds } from '@/libs/DB';
import Header from '@/components/Header/Header';
import ProfileInfo from '@/components/ProfileInfo/ProfileInfo';
import CardForProfile from '@/components/CardForProfile/CardForProfile';
import MockAppluadCards from '@/components/MockAppluadCards/MockAppluadCards';
import { ApplaudT } from '@/types/ApplaudT';
import { MemberT } from '@/types/MemberT';

const MemberProfile = () => {
  const [member, setMember] = useState<MemberT>();
  const [individualApplauds, setIndividualApplauds] = useState<ApplaudT[]>([]);

  const firstName = member?.name.split(' ')[0] as string;
  const fullName = member?.name as string;

  useEffect(() => {
    (async () => {
      const urlString = window.location.href;
      const urlObject = new URL(urlString);
      const pathname = urlObject.pathname;
      const parts = pathname.split('/');
      const memberId = parts[parts.length - 1];
      const members: MemberT[] = await getAllMembers();
      setMember(members.find((member) => member.id === memberId));
      const individualApplauds = await getPublishedApplauds(
        member?.email as string
      );
      setIndividualApplauds(individualApplauds);
    })();
  }, [member]);

  return (
    <div className='flex flex-col mt-4 gap-10'>
      <Header />
      <main className='flex flex-col items-center mx-10 gap-10'>
        <section className='flex flex-col gap-8 items-center w-full'>
          <div className='flex items-center justify-center w-full gap-8 px-2 py-3'>
            <Image
              src={member?.avatarUrl!}
              alt='Profile photo'
              width={88}
              height={88}
              className='rounded-full border border-silver'
            ></Image>
            <div className='w-3/5'>
              <h4 className='body-large'>{fullName}</h4>
              <p className='body-small'>{member?.jobTitle}</p>
              <p className='body-small'>{member?.company}</p>
            </div>
          </div>
          <ProfileInfo name={fullName} />
        </section>
        <h3 className='sub-title'>{firstName}&apos;s applauds</h3>
        <section className='flex flex-col w-full'>
          <CardForProfile applauds={individualApplauds} />
          <MockAppluadCards
            firstName={firstName}
            imageURL={member?.avatarUrl!}
          />
        </section>
      </main>
    </div>
  );
};

export default MemberProfile;
