'use client';
import React, { useState, useEffect, ChangeEvent, FormEvent, useRef } from 'react';
import { MemberT } from '@/types/MemberT';
import { getAllMembers, getAllApplauds } from '@/libs/DB';

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [members, setMembers] = useState<MemberT[]>([]);
  const [filteredMembers, setFilteredMembers] = useState<MemberT[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    getAllMembers()
      .then((members) => {
        setMembers(members);
      })
      .catch((error) => {
        console.error('Error fetching members:', error);
      });
  }, []);

  useEffect(() => {
    setFilteredMembers(
      members.filter((member) =>
        member.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, members]);

  const handleMemberSelect = (name: string) => {
    setSearchValue(name);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleReset = () => {
    const form = formRef.current;
    form?.reset();
    const applauds = getAllApplauds();
  }

  return (
    <>
      <form
        id='searchMember'
        className='flex flex-col gap-3 items-center mx-10'
      >
        <input
          type='text'
          value={searchValue}
          onChange={handleInputChange}
          placeholder='Search Applauds by Member..'
          className='border rounded-2xl border-silver button w-full caret-blue-500 focus:outline-none px-2 bg-transparent'
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
      </form>
    </>
  );
};

export default Search;
