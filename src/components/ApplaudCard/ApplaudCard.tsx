import React from 'react';
import Image from 'next/image';
import { ApplaudT } from '@/types/ApplaudT';

type ApplaudProps = {
  applauds: ApplaudT[];
};

const ApplaudCard: React.FC<ApplaudProps> = ({ applauds }) => {
  // console.log('Here come the applauds', applauds);
  return (
    <>
      {[...applauds].reverse().filter(applaud => applaud.published === true).map((applaud) => {
        const { sender, receiver, comment } = applaud;
        return (
          <section
            key={applauds.indexOf(applaud)}
            className='flex flex-col gap-4 border-solid border border-metal p-4'
          >
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
            <article className='flex items-center justify-end gap-6 p-2 border-solid border border-stone'>
              <div className='flex flex-col text-right'>
                <h4 className='text-sm'>{receiver.name}</h4>
                <p className='text-xs'>{receiver.jobTitle}</p>
                <p className='text-xs'>{receiver.company}</p>
              </div>
              <Image
                src={receiver.avatarUrl}
                alt='Receiver Profile'
                width={50}
                height={50}
                className='rounded-full'
              ></Image>
            </article>
            <p className='text-center'>{comment}</p>
          </section>
        );
      })}
    </>
  );
};

export default ApplaudCard;
