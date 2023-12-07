'use client';
import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  useRef,
} from 'react';
import { getAllMembers } from '@/libs/DB';
import { MemberT } from '@/types/MemberT';
import { ApplaudT } from '@/types/ApplaudT';
import { CardForHome } from '@/components';

const SearchComponent = () => {
  const [applauds, setApplauds] = useState<ApplaudT[]>([]);
  const [members, setMembers] = useState<MemberT[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredMembers, setFilteredMembers] = useState<MemberT[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    (async () => {
      const members = await getAllMembers();
      setMembers(members);
    })();
  }, []);

  setFilteredMembers(
    members.filter((member) =>
      member.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  const handleMemberSelect = (name: string) => {
    setSearchValue(name);
    setApplauds(
      applauds.filter(
        (applaud) =>
          applaud.receiver.name === name || applaud.sender.name === name
      )
    );
  };

  const handleReset = (e: FormEvent) => {
    e.preventDefault();
    setApplauds(applauds);
    setSearchValue('');
    const form = formRef.current;
    form?.reset();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <form
        className="flex flex-col gap-3 items-center mx-10"
        onSubmit={(e) => {
          e.preventDefault();
          handleReset(e);
        }}
      >
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search"
          className="header-btn header-nav w-2/3"
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
        {searchValue &&
          filteredMembers.length === 1 &&
          searchValue === filteredMembers[0].name && (
            <button
              className="search-btn header-nav w-1/2"
              onClick={handleReset}
              type="submit"
              form="searchMember"
            >
              Reset
            </button>
          )}
      </form>
      <CardForHome />
    </>
  );
};

export default SearchComponent;
