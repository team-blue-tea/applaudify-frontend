'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import BackButton from '@/components/BackButton/BackButton';

const Vanessa = () => {
  const { data: session } = useSession();

  const firstName = session?.user?.name?.split(' ')[0];
  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <header className='flex justify-between items-center'>
        <BackButton />
        <h4 className='body-main'>Applaud from Vanessa</h4>
        <div></div>
      </header>
      <main className='flex flex-col items-center'>
        <div className='single-applaud-border mt-14'>
          <section className='flex flex-col gap-8 single-applaud small px-4 py-8 p-2'>
            <article className='flex items-center bg-white gap-8'>
              <Image
                src='https://avatars.githubusercontent.com/u/101557392?v=4'
                alt='Sender Profile'
                width={61}
                height={61}
                className='rounded-full'
              ></Image>
              <div className='flex flex-col'>
                <h4 className='name bg-white'>Vanessa Wingårdh</h4>
                <p className='title-company bg-white'>Developer Team Lead</p>
                <p className='title-company bg-white'>DesignWeb Ltd.</p>
              </div>
            </article>
            <p className='body-main bg-white'>
              &apos;{firstName} is a talented and dedicated software developer,
              and I am grateful for their hard work and dedication. It was a
              pleasure working with you.&apos;
            </p>
          </section>
        </div>
        <p className='text-center button mt-20'>Applaud Published</p>
      </main>
    </div>
  );
};

export default Vanessa;
