import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllApplauds } from '@/libs/DB';
import { ApplaudT } from '@/types/ApplaudT';
import PublishButton from '@/Components/PublishButton/PublishButton';

const SingleApplaud = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const applauds = (await getAllApplauds()) as ApplaudT[];
  const filteredApplaud = applauds.filter((applaud) => applaud.id === slug);

  const { sender, comment, published } = filteredApplaud[0];

  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <header className='flex justify-between'>
        <Link href='/applauds'>←</Link>
        <h4>Applaud from {sender.name.split(' ')[0]}</h4>
        <div></div>
      </header>
      <main className='flex flex-col items-center gap-10'>
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
        {published ? (
          <p className='text-center border-solid border border-metal p-2 '>
            Applaud Published
          </p>
        ) : (
          <PublishButton slug={slug} />
        )}
      </main>
    </div>
  );
};

export default SingleApplaud;
