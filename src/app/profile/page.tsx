'use client';

import Navigation from '@/components/Navigation/Navigation';
import React, { useState } from 'react';
import mockPhotoOne from '@/assets/mockPhotoOne.png';
import mockPhotoTwo from '@/assets/mockPhotoTwo.png';
import Image from 'next/image';
import Bio from '@/components/Bio/Bio';
import Experience from '@/components/Experience/Experience';
import Skills from '@/components/Skills/Skills';

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState(Bio);

  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <header className='flex justify-between'>
        <Navigation />
        <button>Edit</button>
      </header>
      <main className='flex flex-col items-center gap-10'>
        <section className='flex flex-col gap-3 items-center w-full'>
          <h4>Profile name</h4>
          <Image
            src={mockPhotoOne}
            alt='Profile photo'
            width={80}
          ></Image>
          <article className='flex justify-around w-full'>
            <button>Bio</button>
            <button>Skills</button>
            <button>Experience</button>
          </article>
        </section>
        <section className='flex flex-col gap-4 border-solid border border-metal p-4'>
          <article className='flex items-center gap-6 p-2 border-solid border border-stone'>
            <Image
              src={mockPhotoTwo}
              alt='Sender Profile'
              width={50}
            ></Image>
            <div className='flex flex-col'>
              <h4 className='text-sm'>Sender Name</h4>
              <p className='text-xs'>Sender Position, Company</p>
            </div>
          </article>
          <article className='flex items-center gap-6 p-2 border-solid border border-stone'>
            <div className='flex flex-col text-right'>
              <h4 className='text-sm'>Receiver Name</h4>
              <p className='text-xs'>Receiver Position, Company</p>
            </div>
            <Image
              src={mockPhotoOne}
              alt='Receiver Profile'
              width={50}
            ></Image>
          </article>
          <p className='text-center'>
            &apos; Working with Ilija is always a pleasure. Her positive
            attitude is infectious, and it lifts the team&apos;s spirits,
            especially when facing challenges. &apos;
          </p>
        </section>
      </main>
    </div>
  );
};

export default Profile;
