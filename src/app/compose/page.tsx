'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllMembers } from '@/libs/DB';

// import InputEmoji from "react-input-emoji";

const Compose = () => {
  const [members, setMembers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredMembers, setFilteredMembers] = useState([]);

  useEffect(() => {
    getAllMembers().then((members) => {
      setMembers(members);
    });
  }, []);

  useEffect(() => {
    setFilteredMembers(
      members.filter(
        (member) =>
          member &&
          member.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, members]);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleMemberSelect = (name: string) => {
    setSearchValue(name);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <header className='flex justify-between'>
        <Link href='/applauds'>←</Link>
        <button
          type='submit'
          form='sendApplaud'
          onClick={handleSubmit}
        >
          Send
        </button>
      </header>
      <form
        id='sendApplaud'
        className='flex flex-col gap-10'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='To'
          value={searchValue}
          onChange={handleInputChange}
        />
        {searchValue && filteredMembers[0].name as string !== searchValue as string && (
          <div>
            {filteredMembers.map((member) => (
              
              <div
                key={member.id}
                onClick={() => handleMemberSelect(member.name)}
              >
                {member.name}
              </div>
            ))}
          </div>
        )}
        <input
          type='text'
          placeholder='Message'
        />
      </form>
    </div>
  );
};

export default Compose;
