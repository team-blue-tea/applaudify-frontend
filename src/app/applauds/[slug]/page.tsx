import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllApplauds } from '@/libs/DB';
import { ApplaudT } from '@/types/ApplaudT';
import PublishButton from '@/components/PublishButton/PublishButton';
import UnpublishButton from '@/components/UnpublishButton/UnpublishButton';
import back from '@/assets/nav/back.png';

const SingleApplaud = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const applauds = (await getAllApplauds()) as ApplaudT[];
  const filteredApplaud = applauds.filter((applaud) => applaud.id === slug);

  const { sender, comment, published } = filteredApplaud[0];

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
          <h4 className='body-main'>Applaud from {sender.name.split(' ')[0]}</h4>
          <div></div>
        </header>
        <main className='flex flex-col items-center'>
          <div className='single-applaud-border mt-14'>
            <section className='flex flex-col gap-8 single-applaud small px-4 py-8 p-2'>
              <article className='flex items-center bg-white gap-8'>
                <Image
                  src={sender.avatarUrl}
                  alt='Sender Profile'
                  width={61}
                  height={61}
                  className='rounded-full'
                ></Image>
                <div className='flex flex-col'>
                  <h4 className='name bg-white'>{sender.name}</h4>
                  <p className='title-company bg-white'>{sender.jobTitle}</p>
                  <p className='title-company bg-white'>{sender.company}</p>
                </div>
              </article>
              <p className='body-main bg-white'>{comment}</p>
            </section>
          </div>
          {published ? (
            <div className='flex flex-col items-center'>
              <p className='text-center button mt-10'>Applaud Published!</p>
              <UnpublishButton slug={slug} />
            </div>
          ) : (
            <PublishButton slug={slug} />
          )}
        </main>
      </div>
  );
};

export default SingleApplaud;
