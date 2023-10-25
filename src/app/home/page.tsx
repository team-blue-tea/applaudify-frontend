import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mockPhotoOne from '@/assets/mockPhotoOne.png';
import mockPhotoTwo from '@/assets/mockPhotoTwo.png';
import Navigation from '@/components/Navigation/Navigation';

const Home = () => {
  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <header className='flex w-full justify-between'>
        <Navigation />
        <Link href='/applauds'>
          <button className='border-solid border border-charcoal px-4 py-1'>
            Applauds
          </button>
        </Link>
      </header>
      <main>
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

export default Home;
