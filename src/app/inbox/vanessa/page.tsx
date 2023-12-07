'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { BackButton } from '@/components';

const Vanessa = () => {
  const { data: session } = useSession();

  const firstName = session?.user?.name?.split(' ')[0];
  return (
    <div className="flex flex-col mx-10 mt-14 gap-10">
      <header className="flex justify-between items-center">
        <BackButton />
        <h4 className="body-main">Applaud from Vanessa</h4>
        <div></div>
      </header>
      <main className="flex flex-col items-center mt-10">
        <div className="applaud-card-container">
          <section className="applaud-card-ombre">
            <article className="flex flex-col items-center gap-2">
              <p className="send-date-lg">Oct 2, 2023</p>
              <p className="p-2.5 body-main text-center">
                &apos;{firstName} is a talented and dedicated software
                developer, and I am grateful for their hard work and dedication.
                It was a pleasure working with you.&apos;
              </p>
            </article>
            <article className="flex flex-col items-center">
              <p className="sender-info-lg text-stone">From</p>
              <div className="sender-layout-lg">
                <Image
                  src="https://avatars.githubusercontent.com/u/101557392?v=4"
                  alt="Sender Profile"
                  width={50}
                  height={50}
                  className="rounded-full"
                ></Image>
                <div className="flex w-full justify-between items-end">
                  <div>
                    <h4 className="sender-lg">Vanessa Wingårdh</h4>
                    <p className="sender-info-lg">Developer Team Lead</p>
                    <p className="sender-info-lg">DesignWeb Ltd.</p>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
        <div className="flex flex-col items-center w-full mt-5">
          <p className="body-small mt-5 text-silver">Published Applaud</p>
        </div>
      </main>
    </div>
  );
};

export default Vanessa;
