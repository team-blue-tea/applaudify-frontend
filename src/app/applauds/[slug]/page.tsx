import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllApplauds } from '@/app/libs/DB';
import { ApplaudT } from '@/app/types/ApplaudT';

const SingleApplaud = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const applauds = (await getAllApplauds()) as ApplaudT[];
  const filteredApplaud = applauds.filter((applaud) => applaud.id === slug);

  const { sender, comment } = filteredApplaud[0];

  return (
    <>
      <header>
        <Link href='/applauds'>←</Link>
        <h3>Applaud from {sender.name.split(' ')[0]}</h3>
      </header>
      <main>
        <section className='flex flex-col gap-4 border-solid border border-metal p-4'>
          <article className='flex items-center gap-6 p-2 border-solid border border-stone'>
            <Image
              src={sender.avatarUrl}
              alt='Sender Profile'
              width={50}
              height={50}
              className='rounded-full'
            ></Image>
            <div className='flex flex-col'>
              <h4 className='text-sm'>{sender.name}</h4>
              <p className='text-xs'>{sender.jobTitle}</p>
              <p className='text-xs'>{sender.company}</p>
            </div>
          </article>
          <p className='text-center'>{comment}</p>
        </section>
      </main>
    </>
  );
};

export default SingleApplaud;
