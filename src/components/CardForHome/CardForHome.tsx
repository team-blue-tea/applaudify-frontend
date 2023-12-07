'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getAllApplauds } from '@/libs/DB';
import { ApplaudT } from '@/types/ApplaudT';

const CardForHome = () => {
  const [applauds, setApplauds] = useState<ApplaudT[]>([]);

  useEffect(() => {
    (async () => {
      const applauds = await getAllApplauds();
      setApplauds(applauds);
    })();
  }, []);

  return (
    <div>
      {[...applauds]
        .filter((applaud) => applaud.published === true)
        .map((applaud) => {
          const { sender, receiver, comment, createdAt } = applaud;
          const date = new Date(createdAt);
          const dateString = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          });
          return (
            <section key={applauds.indexOf(applaud)} className="applaud-card">
              <Link href={`/member/${receiver.id}`}>
                <article className="receiver-layout">
                  <Image
                    src={receiver.avatarUrl}
                    alt="Receiver Profile"
                    width={60}
                    height={60}
                    className="profile-img"
                  ></Image>
                  <div>
                    <h4 className="receiver-name text-center">
                      {receiver.name}
                    </h4>
                    <p className="receiver-info text-center">
                      {receiver.jobTitle}
                    </p>
                    <p className="receiver-info text-center">
                      {receiver.company}
                    </p>
                  </div>
                </article>
              </Link>
              <p className="send-date">{dateString}</p>
              <p className="p-2.5 body-main text-center">
                &apos;{comment}&apos;
              </p>
              <article className="flex flex-col items-center">
                <p className="sender-info text-stone">From</p>
                <Link href={`/member/${sender.id}`}>
                  <div className="sender-layout">
                    <Image
                      src={sender.avatarUrl}
                      alt="Sender Profile"
                      width={30}
                      height={30}
                      className="profile-img"
                    ></Image>
                    <div className="flex w-full justify-between items-end">
                      <div>
                        <h4 className="sender">{sender.name}</h4>
                        <p className="sender-info">{sender.jobTitle}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            </section>
          );
        })}
    </div>
  );
};

export default CardForHome;
