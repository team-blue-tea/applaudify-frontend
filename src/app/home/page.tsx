import React from 'react';
import Link from 'next/link';
import { getAllApplauds, getAllMembers } from '@/libs/DB';
import ApplaudCard from '@/components/ApplaudCard/ApplaudCard';

const Home = async () => {
  const applauds = await getAllApplauds();
  console.log('Here come the applauds', applauds);

  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <header className='flex w-full justify-between'>
        <Link href='/menu'>
          <button className='border-solid border border-charcoal px-4 py-1'>
            Menu
          </button>
        </Link>
        <Link href='/applauds'>
          <button className='border-solid border border-charcoal px-4 py-1'>
            Applauds
          </button>
        </Link>
      </header>
      <main className='flex flex-col gap-8 mt-6'>
        <ApplaudCard applauds={applauds} />
      </main>
    </div>
  );
};

export default Home;
