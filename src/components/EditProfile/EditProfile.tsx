import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header/Header';

const EditProfile = ({ session, imageURL, member, firstName }) => {
  return (
    <div className='flex flex-col mt-4 gap-10'>
      <Header />
      <main className='flex flex-col items-center gap-10 mx-10'>
        <section className='flex flex-col gap-8 items-center w-full'>
          <div className='flex w-full flex-col gap-3'>
            <div className='flex items-center justify-end gap-4 '>
              <Link
                href='/profile/edit'
                className='header-nav'
              >
                Edit
              </Link>
              <div className='flex justify-end'></div>
            </div>
            <div className='flex items-center justify-center w-full gap-8 px-2 py-3'>
              {session && (
                <Image
                  src={imageURL}
                  alt='Profile photo'
                  width={88}
                  height={88}
                  className='rounded-full border border-silver'
                ></Image>
              )}
              <div className='w-3/5'>
                <h4 className='body-large'>{member?.name}</h4>
                <p className='body-small'>{member?.jobTitle}</p>
                <p className='body-small'>{member?.company}</p>
              </div>
            </div>
          </div>
        </section>
        <h3 className='sub-title'>{firstName}&apos;s applauds</h3>
        <section className='flex flex-col w-full'></section>
      </main>
    </div>
  );
};

export default EditProfile;
