'use client';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import ombreLogo from '@/assets/ombre-logo.png';

const Landing = () => {
  const { data: session } = useSession();

  return (
    <div className='flex flex-col items-center mx-10 my-10'>
      <header className='flex w-full justify-between items-center mb-20'>
        <Link href='/'>
          <Image
            src={logo}
            alt='logo'
            width={30}
            height={10}
          ></Image>
        </Link>
        <Link
          href='/about'
          rel='noopener noreferrer'
          target='_blank'
          className='header-nav'
        >
          About
        </Link>
        <Link
          href='https://github.com/orgs/team-blue-tea/repositories'
          rel='noopener noreferrer'
          target='_blank'
          className='header-nav'
        >
          Docs
        </Link>
        {!session ? (
          <Link href='/login'>
            <button className='header-nav header-btn'>Login</button>
          </Link>
        ) : (
          <button
            className='header-nav header-btn'
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            Sign out
          </button>
        )}
      </header>
      <main className='flex flex-col w-full gap-20'>
        <section className='flex flex-col items-center gap-8'>
          <h1 className='title-logo ombre-text'>applaudify</h1>
          <h3 className='sub-title text-center text-charcoal'>
            Where achievements get applauded
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
              Let&apos;s Start
            </Link>
          )}
        </section>
        <section className='flex flex-col items-center justify-center gap-24'>
          <article className='flex flex-col gap-5'>
            <div>
              <h4 className='sub-header text-silver'>
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
              <h4 className='sub-header text-silver'>
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
              <h4 className='sub-header text-silver'>
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
      <footer className='flex flex-col gap-10 mt-20'>
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
            Let&apos;s Start
          </Link>
        )}
        <p className='small text-center text-stone mt-20'>© 2023 Applaudify</p>
      </footer>
    </div>
  );
};

export default Landing;
