import React from 'react';
import Image from 'next/image';
import { ApplaudT } from '@/types/ApplaudT';
import Link from 'next/link';

type CardForProfileProps = {
  applauds: ApplaudT[];
};

const CardForProfile: React.FC<CardForProfileProps> = ({ applauds }) => {
  return (
    <div>
      {[...applauds]
        .filter((applaud) => applaud.published === true)
        .map((applaud) => {
          const { sender, comment, createdAt } = applaud;
          const date = new Date(createdAt);
          const dateString = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          });
          return (
            <section key={applauds.indexOf(applaud)}>
              <Link href={`/member/${sender.id}`}>
                <article className='sender-layout'>
                  <Image
                    src={sender.avatarUrl}
                    alt='Sender Profile'
                    width={30}
                    height={30}
                    className='profile-img'
                  ></Image>
                  <div className='flex w-full justify-between items-end'>
                    <div>
                      <h4 className='sender'>{sender.name}</h4>
                      <p className='sender-info'>
                        {sender.jobTitle}, {sender.company}
                      </p>
                    </div>
                    <p className='send-date'>{dateString}</p>
                  </div>
                </article>
              </Link>
              <article className='applaud-card'>
                <p className='p-2.5 body-main'>&apos;{comment}&apos;</p>
              </article>
            </section>
          );
        })}
    </div>
  );
};

export default CardForProfile;
