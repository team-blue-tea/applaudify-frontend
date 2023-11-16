'use client';
import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import BackButton from '@/components/BackButton/BackButton';

const Hugo = () => {
  const { data: session } = useSession();

  const firstName = session?.user?.name?.split(' ')[0];
  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <header className='flex justify-between items-center'>
        <BackButton />
        <h4 className='body-main'>Applaud from Hugo</h4>
        <div></div>
      </header>
      <main className='flex flex-col items-center'>
        <div className='single-applaud-border mt-14'>
          <section className='flex flex-col gap-8 single-applaud small px-4 py-8 p-2'>
            <article className='flex items-center bg-white gap-8'>
              <Image
                src='https://avatars.githubusercontent.com/u/91157834?v=4'
                alt='Sender Profile'
                width={61}
                height={61}
                className='rounded-full'
              ></Image>
              <div className='flex flex-col'>
                <h4 className='name bg-white'>Hugo Dahlgren</h4>
                <p className='title-company bg-white'>
                  Senior Software Engineer
                </p>
                <p className='title-company bg-white'>Tech Solutions Inc.</p>
              </div>
            </article>
            <p className='body-main bg-white'>
              &apos;{firstName} is a great developer! I really enjoyed working
              with {firstName} on this project. {firstName} is super easy to
              work with and making decisions together is a breeze. Looking
              forward to work with you again in the future.&apos;
            </p>
          </section>
        </div>
        <p className='text-center button mt-20'>Applaud Published</p>
      </main>
    </div>
  );
};

export default Hugo;
