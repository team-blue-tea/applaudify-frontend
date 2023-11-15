// 'use client';
// import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { getAllMembers, getPublishedApplauds } from '@/libs/DB';
import Header from '@/components/Header/Header';
import CardForProfile from '@/components/CardForProfile/CardForProfile';
import MockAppluadCards from '@/components/MockAppluadCards/MockAppluadCards';
import ProfileInfo from '@/components/ProfileInfo/ProfileInfo';
import { ApplaudT } from '@/types/ApplaudT';
import { MemberT } from '@/types/MemberT';
import Inbox from '@/components/Inbox/Inbox';

const Profile = async () => {
  // const [member, setMember] = useState<MemberT>();
  // const [individualApplauds, setIndividualApplauds] = useState<ApplaudT[]>([]);
  // const { data: session } = useSession();

  const session = await getServerSession();
  const memberEmail = session?.user?.email as string;

  const applauds: ApplaudT[] = await getPublishedApplauds(memberEmail);
  const members: MemberT[] = await getAllMembers();
  const member = members.find((member) => member.email === memberEmail);

  const name = session?.user?.name as string;
  const firstName = session?.user?.name?.split(' ')[0] as string;
  const imageURL = session?.user?.image as string;

  // useEffect(() => {
  //   if (!session) {
  //     return;
  //   }
  //   const memberEmail = session.user?.email;

  //   (async () => {
  //     const applauds = await getPublishedApplauds(memberEmail as string);
  //     const members: MemberT[] = await getAllMembers();
  //     setMember(members.find((member) => member.email === memberEmail));
  //     setIndividualApplauds(applauds);
  //   })();
  // }, [session]);

  return (
    <div className='flex flex-col mt-4 gap-10'>
      <Header />
      <main className='flex flex-col items-center gap-10 mx-10'>
        <section className='flex flex-col gap-8 items-center w-full'>
          <div className='flex w-full flex-col gap-3'>
            <div className='flex justify-end'>{session && <Inbox />}</div>
            <div className='flex items-center justify-center w-full gap-8 px-2 py-3'>
              {session && (
                <Image
                  src={imageURL}
                  alt='Profile photo'
                  width={88}
                  height={88}
                  className='rounded-full border border-silver'
                ></Image>
              )}
              <div className='w-3/5'>
                <h4 className='body-large'>{member?.name}</h4>
                <p className='body-small'>{member?.jobTitle}</p>
                <p className='body-small'>{member?.company}</p>
              </div>
            </div>
          </div>
          <ProfileInfo name={name} />
        </section>
        <h3 className='sub-title'>{firstName}&apos;s applauds</h3>
        <section className='flex flex-col w-full'>
          <CardForProfile applauds={applauds} />
          <MockAppluadCards
            firstName={firstName}
            imageURL={imageURL}
          />
        </section>
      </main>
    </div>
  );
};

export default Profile;
