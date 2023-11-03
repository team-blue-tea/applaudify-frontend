'use client';
import React, {
  useEffect,
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
} from 'react';
import Link from 'next/link';
import { getAllMembers, sendNewApplaud } from '@/libs/DB';
import { MemberT } from '@/types/MemberT';
import { useSession } from 'next-auth/react';
import { NewApplaudT } from '@/types/NewApplaudT';

const Compose = () => {
  const [members, setMembers] = useState<MemberT[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredMembers, setFilteredMembers] = useState<MemberT[]>([]);
  const { data: session } = useSession();

  const commentRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const currentEmail = session?.user?.email;
  const currentMember = members.find(
    (member: MemberT) => member.email === currentEmail
  );
  const currentMemberId = { id: currentMember?.id };
  const receiver = members.find(
    (member: MemberT) => member.name === searchValue
  );
  const receiverId = { id: receiver?.id };

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleMemberSelect = (name: string) => {
    setSearchValue(name);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const applaudComment = commentRef.current?.value || '';

    const newApplaud: NewApplaudT = {
      sender: currentMemberId,
      receiver: receiverId,
      comment: applaudComment,
    };
    sendNewApplaud(newApplaud);
    const form = formRef.current;
    form?.reset();

    setTimeout(() => {
      window.location.href = '/applauds/sent';
    }, 500);
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
        ref={formRef}
      >
        <input
          type='text'
          placeholder='To'
          value={searchValue}
          onChange={handleInputChange}
        />
        {searchValue &&
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
        <textarea
          rows={10}
          placeholder='Comment'
          ref={commentRef}
        />
      </form>
    </div>
  );
};

export default Compose;
