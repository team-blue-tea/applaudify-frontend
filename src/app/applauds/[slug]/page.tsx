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

  const { sender, comment, published, createdAt } = filteredApplaud[0];
  const date = new Date(createdAt);
  const dateString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

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
        <div className='applaud-card-container mt-14'>
          <section className='applaud-card-ombre'>
            <article className='flex flex-col items-center'>
              <p className='send-date'>{dateString}</p>
              <p className='p-2.5 body-main text-center'>&apos;{comment}&apos;</p>
            </article>
            <article className='flex flex-col items-center'>
              <p className='sender-info text-stone'>From</p>
              <div className='sender-layout'>
                <Image
                  src={sender.avatarUrl}
                  alt='Sender Profile'
                  width={60}
                  height={60}
                  className='rounded-full'
                ></Image>
                <div className='flex w-full justify-between items-end'>
                  <div>
                    <h4 className='receiver-name'>{sender.name}</h4>
                    <p className='receiver-info'>{sender.jobTitle}</p>
                    <p className='receiver-info'>{sender.company}</p>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
        {published ? (
          <div className='flex flex-col items-center w-full'>
            <p className='body-small mt-10 text-silver'>Published Applaud</p>
            <UnpublishButton slug={slug} />
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center w-full'>
            <PublishButton slug={slug} />
          </div>
        )}
      </main>
    </div>
  );
};

export default SingleApplaud;
