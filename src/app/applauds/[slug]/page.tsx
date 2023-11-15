import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllApplauds } from '@/libs/DB';
import { ApplaudT } from '@/types/ApplaudT';
import PublishButton from '@/components/Published/PublishButton';
import UnpublishButton from '@/components/UnpublishButton/UnpublishButton';
import back from '@/assets/nav/back.png';

const SingleApplaud = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const applauds = (await getAllApplauds()) as ApplaudT[];
  const filteredApplaud = applauds.filter((applaud) => applaud.id === slug);

  const { sender,  comment, published, createdAt } = filteredApplaud[0];
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
      <main className='flex flex-col items-center mt-10'>
        <div className='applaud-card-container'>
          <section className='applaud-card-ombre'>
            <article className='flex flex-col items-center gap-2'>
              <p className='send-date-lg'>{dateString}</p>
              <p className='p-2.5 body-main text-center'>
                &apos;{comment}&apos;
              </p>
            </article>
            <article className='flex flex-col items-center'>
              <p className='sender-info-lg text-stone'>From</p>
              <Link href={`/member/${sender.id}`}>
                <div className='sender-layout-lg'>
                  <Image
                    src={sender.avatarUrl}
                    alt='Sender Profile'
                    width={50}
                    height={50}
                    className='rounded-full'
                  ></Image>
                  <div className='flex w-full justify-between items-end'>
                    <div>
                      <h4 className='sender-lg'>{sender.name}</h4>
                      <p className='sender-info-lg'>{sender.jobTitle}</p>
                      <p className='sender-info-lg'>{sender.company}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          </section>
        </div>
        {published ? (
          <div className='flex flex-col items-center w-full mt-5'>
            <p className='body-small mt-5 text-silver'>Published Applaud</p>
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
