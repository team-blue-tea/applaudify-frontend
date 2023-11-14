'use client';
import React, {
  useEffect,
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { getAllMembers, sendNewApplaud } from '@/libs/DB';
import { MemberT } from '@/types/MemberT';
import { NewApplaudT } from '@/types/NewApplaudT';
import back from '@/assets/nav/back.png';

const Compose = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [applaudText, setApplaudText] = useState<string>('Start a applaud here...');
  const [members, setMembers] = useState<MemberT[]>([]);
  const [filteredMembers, setFilteredMembers] = useState<MemberT[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
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
    setErrorMessage('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const applaudComment = commentRef.current?.value || '';

    if (!members.some((member) => member.name === searchValue)) {
      setErrorMessage('Please select the receiver');
      return;
    }
    if (!applaudComment || applaudComment.trim() === '') {
      setErrorMessage("Let's finish the Applaud before sending");
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      return;
    }
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

  const handleFocus = () => {
    setApplaudText('Start a applaud here...');
  };

  const handleBlur = () => {
    setApplaudText('Start a applaud here...');
  };

  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <header className='flex justify-between items-center'>
        <Link href='/applauds'>
          <Image
            src={back}
            alt='back'
            width={30}
            height={30}
          ></Image>
        </Link>
        {searchValue && filteredMembers.length > 0 ? (
          <button
            className='header-nav'
            type='submit'
            form='sendApplaud'
            onClick={handleSubmit}
          >
            Send
          </button>
        ) : (
          <button
            className='header-nav text-silver'
            type='submit'
            form='sendApplaud'
            disabled
          >
            Send
          </button>
        )}
      </header>
      <form
        id='sendApplaud'
        className='flex flex-col gap-10'
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <div className='flex'>
          <p className='border-b border-silver'>To:</p>
          <input
            type='text'
            value={searchValue}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className='border-b border-silver w-full bg-transparent'
          />
        </div>
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
        {errorMessage}
        <textarea
          rows={10}
          placeholder={applaudText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={commentRef}
          className='border border-silver rounded-3xl p-3 focus:outline-silver'
        />
      </form>
    </div>
  );
};

export default Compose;
