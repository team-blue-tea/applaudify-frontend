'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { ApplaudT } from '@/types/ApplaudT';
import { getAllApplauds, setApplaudRead } from '@/libs/DB';

const Applauds = () => {
  const [filteredApplauds, setFilteredApplauds] = useState<ApplaudT[]>([]);
  const { data: session } = useSession();

  const firstName = session?.user?.name?.split(' ')[0];

  useEffect(() => {
    if (!session) {
      return;
    }
    const filteredName = session?.user?.name;
    (async () => {
      const applauds: ApplaudT[] = await getAllApplauds();
      const filteredApplauds = applauds.filter(
        (applaud) => applaud.receiver.name === filteredName
      );
      setFilteredApplauds(filteredApplauds);
    })();
  }, [session, filteredApplauds]);

  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <header className='flex justify-between'>
        <Link href='/home'>←</Link>
        <Link href='/compose'>New</Link>
      </header>
      <main className='flex flex-col items-center gap-10 mt-5'>
        <section className='flex flex-col gap-7'>
          {filteredApplauds.map((applaud) => {
            const firstName = applaud.sender.name.split(' ')[0];
            const commentPreview = applaud.comment
              .split(' ')
              .slice(0, 5)
              .join(' ');
            const date = new Date(applaud.createdAt);
            const dateString = date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });
            const weekdayString = date.toLocaleDateString('en-US', {
              weekday: 'short',
            });
            return (
              applaud && (
                <article key={applaud.id}>
                  <Link
                    href={`applauds/${applaud.id}`}
                    className='flex flex-col p-2 gap-2 border border-charcoal'
                    onClick={() => setApplaudRead(applaud.id as string)}
                  >
                    <div className='flex justify-between'>
                      <h4>
                        {!applaud.read && '•'} {firstName}
                      </h4>
                      <p>
                        {weekdayString}, {dateString}
                      </p>
                    </div>
                    <p>{commentPreview}...</p>
                  </Link>
                </article>
              )
            );
          })}
          <article>
            <Link
              href={'/applauds/hugo'}
              className='flex flex-col p-2 border border-charcoal'
            >
              <div className='flex justify-between'>
                <h4>Hugo</h4>
                <p>Thu, May 24, 2023</p>
              </div>
              <p>{firstName} is a great developer! ...</p>
            </Link>
          </article>
          <article>
            <Link
              href={'/applauds/vanessa'}
              className='flex flex-col p-2 border border-charcoal'
            >
              <div className='flex justify-between'>
                <h4>Vanessa</h4>
                <p>Mon, Oct 16, 2023</p>
              </div>
              <p>{firstName} is a talented and ...</p>
            </Link>
          </article>
          <article>
            <Link
              href={'/applauds/ahsan'}
              className='flex flex-col p-2 border border-charcoal'
            >
              <div className='flex justify-between'>
                <h4>Ahsan</h4>
                <p>Wed, Oct 18, 2023</p>
              </div>
              <p>Working along side {firstName} on ...</p>
            </Link>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Applauds;
