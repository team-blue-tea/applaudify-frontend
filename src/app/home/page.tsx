'use client';
import React, { useState, useEffect, ChangeEvent, FormEvent, useRef } from 'react';
import Link from 'next/link';
import { getAllApplauds, getAllMembers, addNewMember } from '@/libs/DB';
import { useSession } from 'next-auth/react';
import { ApplaudT } from '@/types/ApplaudT';
import { MemberT } from '@/types/MemberT';
import CardForHome from '@/components/CardForHome/CardForHome';
import Header from '@/components/Header/Header';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [applauds, setApplauds] = useState<ApplaudT[]>([]);
  const { data: session } = useSession();
  const [members, setMembers] = useState<MemberT[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredMembers, setFilteredMembers] = useState<MemberT[]>([]);
  const [originalApplauds, setOriginalApplauds] = useState<ApplaudT[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const router = useRouter();

  useEffect(() => {
    if (!session) return;
    let isSubscribed = true;
    (async () => {
      const originalApplauds = await getAllApplauds();
      const members = await getAllMembers();
      if (isSubscribed) {
        setApplauds(originalApplauds);
        setOriginalApplauds(originalApplauds);
        setMembers(members);
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
    setFilteredMembers(
      members.filter((member) =>
        member.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, members]);

  const handleMemberSelect = (name: string) => {
    setSearchValue(name);
    setApplauds(applauds.filter(applaud => applaud.receiver.name === name || applaud.sender.name === name))
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  const handleReset = () => {
    const form = formRef.current;
    form?.reset();
    setApplauds(originalApplauds);
    router.back();
  }

  return (
    <div className='flex flex-col gap-10 mt-8'>
      <Header />
      <form
        id='searchMember'
        className='flex flex-col gap-3 items-center mx-10'
      >
        <input
          type='text'
          value={searchValue}
          onChange={handleInputChange}
          onReset={handleReset}
          placeholder='Search Applauds'
          className='header-btn header-nav w-2/3'
        />
        {searchValue &&
          filteredMembers.length > 0 &&
          (filteredMembers[0].name as string) !== (searchValue as string) && (
            <div>
              {filteredMembers.map((member: MemberT) => (
                <div
                  key={member.id}
                  onClick={() => handleMemberSelect(member.name)}
                >
                  {member.name}
                </div>
              ))}
            </div>
          )}
        {searchValue && filteredMembers.length === 0 && (
          <div>No Member found</div>
        )}
        {searchValue && filteredMembers.length === 1 && searchValue === filteredMembers[0].name  && (
          <button className='header-btn header-nav' onClick={handleReset}>Reset</button>
        )}
      </form>
      {/* <Search /> */}
      <main className='flex flex-col gap-8 mt-1 mx-10'>
        <CardForHome applauds={applauds} />
      </main>
    </div>
  );
};

export default Home;
