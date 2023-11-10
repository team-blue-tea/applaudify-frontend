'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import back from '@/assets/nav/back.png';

const Ahsan = () => {
  const { data: session } = useSession();

  const firstName = session?.user?.name?.split(' ')[0];
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
        <h4 className='body-main'>Applaud from Ahsan</h4>
        <div></div>
      </header>
      <main className='flex flex-col items-center'>
        <div className='single-applaud-border mt-14'>
          <section className='flex flex-col gap-8 single-applaud small px-4 py-8 p-2'>
            <article className='flex items-center bg-white gap-8'>
              <Image
                src='https://avatars.githubusercontent.com/u/9844254?v=4'
                alt='Sender Profile'
                width={61}
                height={61}
                className='rounded-full'
              ></Image>
              <div className='flex flex-col'>
                <h4 className='name bg-white'>Muhammad Ahsan Ayaz</h4>
                <p className='title-company bg-white'>Principal Engineer</p>
                <p className='title-company bg-white'>Airbnb</p>
              </div>
            </article>
            <p className='body-main bg-white'>
              &apos;Working along side {firstName} on various projects has been
              nothing short of delightful. {firstName} has a keen eye for detail
              and profound understanding of user experience, which had an
              immense impact on the outcome of the project.&apos;
            </p>
          </section>
        </div>
        <p className='text-center button mt-20'>Applaud Published</p>
      </main>
    </div>
  );
};

export default Ahsan;
