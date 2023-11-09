import React from 'react';
import Image from 'next/image';
import { ApplaudT } from '@/types/ApplaudT';
import arrow from '@/assets/card/arrow.png';
import Link from 'next/link';

type ApplaudProps = {
  applauds: ApplaudT[];
};

const ApplaudCard: React.FC<ApplaudProps> = ({ applauds }) => {
  return (
    <div>
      {[...applauds]
        .reverse()
        .filter((applaud) => applaud.published === true)
        .map((applaud) => {
          const { sender, receiver, comment } = applaud;
          return (
            <section
              key={applauds.indexOf(applaud)}
              className='applaud-card'
            >
              <Link href={`/member/${sender.id}`}>
              <article className='sender-name-card'>
                <div className='name-card-spacing text-right'>
                  <h4 className='name'>{sender.name}</h4>
                  <div>
                    <p className='title-company'>{sender.jobTitle}</p>
                    <p className='title-company'>{sender.company}</p>
                  </div>
                </div>
                <Image
                  src={sender.avatarUrl}
                  alt='Sender Profile'
                  width={58}
                  height={58}
                  className='profile-img'
                ></Image>
              </article>
              </Link>
              <Image
                src={arrow}
                alt='Arrow'
                width={14}
                height={16}
                className='self-center'
              ></Image>
              <Link href={`/member/${receiver.id}`}>
              <article className='receiver-name-card'>
                <Image
                  src={receiver.avatarUrl}
                  alt='Receiver Profile'
                  width={58}
                  height={58}
                  className='profile-img'
                ></Image>
                <div className='name-card-spacing bg-paper'>
                  <h4 className='name bg-paper'>{receiver.name}</h4>
                  <div>
                    <p className='title-company bg-paper'>{receiver.jobTitle}</p>
                    <p className='title-company bg-paper '>{receiver.company}</p>
                  </div>
                </div>
              </article>
              </Link>
              <p className='text-center pt-5 body-main'>&apos;{comment}&apos;</p>
            </section>
          );
        })}
    </div>
  );
};

export default ApplaudCard;
