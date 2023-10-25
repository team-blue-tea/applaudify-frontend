import Link from 'next/link';
import React from 'react';

const Applauds = () => {
  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <header className='flex justify-between'>
        <Link href='/home'>←</Link>
        <Link href='/compose'>New</Link>
      </header>
      <main className='flex flex-col items-center gap-10'>
        <div>
          <input
            type='text'
            placeholder='Search'
            className='p-2 border border-charcoal'
          />
        </div>
        <section className='flex flex-col gap-7'>
          <article>
            <p className='p-2 border border-charcoal'>Tim sent you a new Applaud</p>
            {/* <p className='p-2 border border-charcoal'>`${senderName} sent you a new Applaud`</p> */}
          </article>
          <article>
            <p className='p-2 border border-charcoal'>Ilija sent you a new Applaud</p>
          </article>
          <article>
            <p className='p-2 border border-charcoal'>Lee reacted on your Applaud</p>
            {/* <p className='p-2 border border-charcoal'>`${receiverName} reacted on your Applaud`</p> */}
          </article>
          <article>
            <p className='p-2 border border-charcoal'>You sent a Applaud to Lee</p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Applauds;
