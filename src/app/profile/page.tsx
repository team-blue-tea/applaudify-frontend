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
          <h4>Profile name</h4>
          <Image
            src={Ilija}
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
          <article className='flex items-center gap-6 p-2 border-solid border border-stone'>
            <div className='flex flex-col text-right'>
              <h4 className='text-sm'>{session?.user?.name}</h4>
              <p className='text-xs'>Fullstack Developer, Freelance</p>
            </div>
            <Image
              src={session?.user?.image!}
              alt='Receiver Profile'
              width={50}
              height={50}
            ></Image>
          </article>
          <p className='text-center'>
            &apos; {session?.user?.name}&apos;s collaborative spirit and expertise in frontend 
            development have contributed to the smooth interfacing of my backend work. A truly 
            proficient developer who understands the full stack process. &apos;
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
          <article className='flex items-center gap-6 p-2 border-solid border border-stone'>
            <div className='flex flex-col text-right'>
            <h4 className='text-sm'>{session?.user?.name}</h4>
            <p className='text-xs'>Fullstack Developer, Freelance</p>
            </div>
            <Image
              src={session?.user?.image!}
              alt='Receiver Profile'
              width={50}
              height={50}
            ></Image>
          </article>
          <p className='text-center'>
            &apos; {session?.user?.name}&apos;s commitment to excellence is evident in every line of code he writes. 
            He consistently delivers high-quality work, often surpassing our expectations. 
            It&apos;s always a pleasure working with him. &apos;
          </p>
        </section>
      </main>
    </div>
  );
};

export default Profile;
