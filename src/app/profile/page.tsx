'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Ilija from '@/assets/Ilija.png';
import Lvan from '@/assets/Lvan.png';
import Image from 'next/image';
import Bio from '@/components/Bio/Bio';
import Experience from '@/components/Experience/Experience';
import Skills from '@/components/Skills/Skills';
import { useSession } from 'next-auth/react';

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState(Bio);
  const [profileApplauds, getProfileApplauds] = useState([]);
  const { data: session } = useSession();
  

  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <header className='flex justify-between'>
        <Link href='/menu'>
          <button className='border-solid border border-charcoal px-4 py-1'>
            Menu
          </button>
        </Link>
        <button>Edit</button>
      </header>
      <main className='flex flex-col items-center gap-10'>
        <section className='flex flex-col gap-3 items-center w-full'>
          <h4>{session?.user?.name}</h4>
          <Image
            src={session?.user?.image!}
            alt='Profile photo'
            width={80}
            height={80}
            className='rounded-full'
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
              src={Lvan}
              alt='Sender Profile'
              width={50}
              height={50}
            ></Image>
            <div className='flex flex-col'>
              <h4 className='text-sm'>Lvan Ni</h4>
              <p className='text-xs'>Frontend Developer, Applaudify Inc.</p>
            </div>
          </article>
          <article className='flex justify-end items-center gap-6 p-2 border-solid border border-stone'>
            <div className='flex flex-col text-right'>
              <h4 className='text-sm'>{session?.user?.name}</h4>
              <p className='text-xs'>Fullstack Developer, Freelance</p>
            </div>
            <Image
              src={session?.user?.image!}
              alt='Receiver Profile'
              width={50}
              height={50}
              className='rounded-full'
            ></Image>
          </article>
          <p className='text-center'>
            &apos;{session?.user?.name}&apos;s collaborative spirit and expertise in frontend 
            development have contributed to the smooth interfacing of my backend work. A truly 
            proficient developer who understands the full stack process.&apos;
          </p>
        </section>
        <section className='flex flex-col gap-4 border-solid border border-metal p-4'>
          <article className='flex items-center gap-6 p-2 border-solid border border-stone'>
            <Image
              src={Ilija}
              alt='Sender Profile'
              width={50}
              height={50}
            ></Image>
            <div className='flex flex-col'>
              <h4 className='text-sm'>Ilija Krilovic</h4>
              <p className='text-xs'>Java Developer, TechCorp</p>
            </div>
          </article>
          <article className='flex justify-end items-center gap-6 p-2 border-solid border border-stone'>
            <div className='flex flex-col text-right'>
            <h4 className='text-sm'>{session?.user?.name}</h4>
            <p className='text-xs'>Fullstack Developer, Freelance</p>
            </div>
            <Image
              src={session?.user?.image!}
              alt='Receiver Profile'
              width={50}
              height={50}
              className='rounded-full'
            ></Image>
          </article>
          <p className='text-center'>
            &apos;{session?.user?.name} is a talented and dedicated software developer, and I am grateful for their hard work and dedication.
            It was a pleasure working with you.&apos;
          </p>
        </section>
        <section className='flex flex-col gap-4 border-solid border border-metal p-4'>
          <article className='flex items-center gap-6 p-2 border-solid border border-stone'>
            <Image
              src={Ilija}
              alt='Sender Profile'
              width={50}
              height={50}
            ></Image>
            <div className='flex flex-col'>
              <h4 className='text-sm'>Ilija Krilovic</h4>
              <p className='text-xs'>Java Developer, TechCorp</p>
            </div>
          </article>
          <article className='flex justify-end items-center gap-6 p-2 border-solid border border-stone'>
            <div className='flex flex-col text-right'>
            <h4 className='text-sm'>{session?.user?.name}</h4>
            <p className='text-xs'>Fullstack Developer, Freelance</p>
            </div>
            <Image
              src={session?.user?.image!}
              alt='Receiver Profile'
              width={50}
              height={50}
              className='rounded-full'
            ></Image>
          </article>
          <p className='text-center'>
            &apos;Working along side {session?.user?.name} on various projects has been nothing short of delightful. 
             {session?.user?.name} has a keen eye for detail and profound understanding of user experience, 
            which had an immense impact on the outcome of the project.&apos;
          </p>
        </section>
      </main>
    </div>
  );
};

export default Profile;
