// 'use client';
import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  useRef,
} from 'react';
import { getAllApplauds, getAllMembers, addNewMember } from '@/libs/DB';
import { useSession } from 'next-auth/react';
import { ApplaudT } from '@/types/ApplaudT';
import { MemberT } from '@/types/MemberT';
import CardForHome from '@/components/CardForHome/CardForHome';
import Header from '@/components/Header/Header';
import NewMemberCheck from '@/components/NewMemberCheck/NewMemeberCheck';
import SearchComponent from '@/components/Search/Search';

const Home = async () => {
  const applauds = await getAllApplauds();
  const members = await getAllMembers();

  return (
    <div className='flex flex-col gap-10 mt-8'>
      <Header />
      <NewMemberCheck />
      {/* <SearchComponent /> */}
      <main className='flex flex-col gap-8 mt-1 mx-10'>
        <CardForHome applauds={applauds} />
      </main>
    </div>
  );
};

export default Home;
