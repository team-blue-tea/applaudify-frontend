'use client';
import React, { useState } from 'react';
import { MemberT } from '@/types/MemberT';


const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [members, setMembers] = useState<MemberT[]>([]);
  const [filteredMembers, setFilteredMembers] = useState<MemberT[]>([]);



  return (
    <>
      <button className='search-btn mx-10 text-stone body-small'>Search</button>
    </>
  );
};

export default Search;
