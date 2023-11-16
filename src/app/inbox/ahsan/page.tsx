'use client';
import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import BackButton from '@/components/BackButton/BackButton';

const Ahsan = () => {
  const { data: session } = useSession();

  const firstName = session?.user?.name?.split(' ')[0];
  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <header className='flex justify-between items-center'>
        <BackButton />
        <h4 className='body-main'>Applaud from Ahsan</h4>
        <div></div>
      </header>
      <main className='flex flex-col items-center mt-10'>
        <div className='applaud-card-container'>
          <section className='applaud-card-ombre'>
            <article className='flex flex-col items-center gap-2'>
              <p className='send-date-lg'>Sep 6, 2023</p>
              <p className='p-2.5 body-main text-center'>
                &apos;Working along side {firstName} on various projects has
                been nothing short of delightful. {firstName} has a keen eye for
                detail and profound understanding of user experience, which had
                an immense impact on the outcome of the project.&apos;
              </p>
            </article>
            <article className='flex flex-col items-center'>
              <p className='sender-info-lg text-stone'>From</p>
              <div className='sender-layout-lg'>
                <Image
                  src='https://avatars.githubusercontent.com/u/9844254?v=4'
                  alt='Sender Profile'
                  width={50}
                  height={50}
                  className='rounded-full'
                ></Image>
                <div className='flex w-full justify-between items-end'>
                  <div>
                    <h4 className='sender-lg'>Muhammad Ahsan Ayaz</h4>
                    <p className='sender-info-lg'>Principal Engineer</p>
                    <p className='sender-info-lg'>Airbnb</p>
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

export default Ahsan;
