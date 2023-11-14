'use client';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Header from '@/components/Header/Header';

const Landing = () => {
  const { data: session } = useSession();

  return (
    <div className='flex flex-col items-center mt-4'>
      <Header />
      <main className='flex flex-col gap-20 mt-20 mx-10'>
        <section className='flex flex-col items-center gap-8'>
          <h1 className='title-logo'>applaudify</h1>
          <h3 className='sub-title text-center text-charcoal'>
            where achievements get applauded
          </h3>
          <p className='body-main text-stone text-center'>
            Collect, manage, and showcase your professional testimonials -
            because every applaud matters.
          </p>
          {!session ? (
            <Link
              href='/login'
              className='button start-btn'
            >
              Let&apos;s Start
            </Link>
          ) : (
            <Link
              href='/home'
              className='button start-btn'
            >
              Return to Applauds
            </Link>
          )}
        </section>
        <section className='flex flex-col items-center justify-center gap-24'>
          <article className='flex flex-col gap-5'>
            <div>
              <h4 className='sub-header text-grey'>
                all your applauds in one place
              </h4>
              <h2 className='sub-title text-charcoal'>applauds inbox</h2>
            </div>
            <p className='body-small text-stone'>
              A dedicated space to receive and manage all your accolades. Choose
              which applauds highlight your profile. Remember to acknowledge the
              remarkable work of others with an applause too!
            </p>
          </article>
          <article className='flex flex-col gap-5'>
            <div>
              <h4 className='sub-header text-grey'>
                celebrate achievements together
              </h4>
              <h2 className='sub-title text-charcoal'>social feed</h2>
            </div>
            <p className='body-small text-stone'>
              Engage with the community. Revel in shared successes and
              accolades. Don&apos;t forget to showcase your achievements!
            </p>
          </article>
          <article className='flex flex-col gap-5'>
            <div>
              <h4 className='sub-header text-grey'>
                redefining your professional profile
              </h4>
              <h2 className='sub-title text-charcoal'>dynamic profile</h2>
            </div>
            <p className='body-small text-stone'>
              Beyond a typical CV—showcase your journey, skills, and
              experiences, validated by the applause you&apos;ve earned.
            </p>
          </article>
        </section>
      </main>
      <footer className='flex flex-col gap-10 mt-20 mx-10'>
        <h3 className='sub-title text-center text-charcoal'>
          ready to showcase your achievements?
        </h3>
        {!session ? (
          <Link
            href='/login'
            className='button start-btn'
          >
            Let&apos;s Start
          </Link>
        ) : (
          <Link
            href='/home'
            className='button start-btn'
          >
            Return to Applauds
          </Link>
        )}
        <p className='small text-center text-stone mt-20'>© 2023 Applaudify</p>
      </footer>
    </div>
  );
};

export default Landing;
