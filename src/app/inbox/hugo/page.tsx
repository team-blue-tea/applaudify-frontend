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
      <main className='flex flex-col items-center mt-10'>
        <div className='applaud-card-container'>
          <section className='applaud-card-ombre'>
            <article className='flex flex-col items-center gap-2'>
              <p className='send-date-lg'>Oct 19, 2023</p>
              <p className='p-2.5 body-main text-center'>
                &apos;{firstName} is a great developer! I really enjoyed working
                with {firstName} on this project. {firstName} is super easy to
                work with and making decisions together is a breeze. Looking
                forward to work with you again in the future.&apos;
              </p>
            </article>
            <article className='flex flex-col items-center'>
              <p className='sender-info-lg text-stone'>From</p>
              <div className='sender-layout-lg'>
                <Image
                  src='https://avatars.githubusercontent.com/u/91157834?v=4'
                  alt='Sender Profile'
                  width={50}
                  height={50}
                  className='rounded-full'
                ></Image>
                <div className='flex w-full justify-between items-end'>
                  <div>
                    <h4 className='sender-lg'>Hugo Dahlgren</h4>
                    <p className='sender-info-lg'>Senior Software Engineer</p>
                    <p className='sender-info-lg'>Tech Solutions Inc.</p>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
        <div className='flex flex-col items-center w-full mt-5'>
          <p className='body-small mt-5 text-silver'>Published Applaud</p>
        </div>
      </main>
    </div>
  );
};

export default Hugo;
