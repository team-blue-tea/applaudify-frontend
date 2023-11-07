'use client';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const Landing = () => {
  const { data: session } = useSession();

  return (
    <div className='landingPage'>
      <header>
        <Link href='/'>
          <Image
            src={logo}
            alt='logo'
            width={36}
            height={18}
          ></Image>
        </Link>
        <Link
          href='/about'
          rel='noopener noreferrer'
          target='_blank'
        >
          About
        </Link>
        <Link
          href='https://github.com/orgs/team-blue-tea/repositories'
          rel='noopener noreferrer'
          target='_blank'
        >
          Docs
        </Link>
        {!session ? (
          <Link href='/login'>
            <button className='headerLogin'>Login</button>
          </Link>
        ) : (
          <button
            className='headerLogin'
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            Sign out
          </button>
        )}
      </header>
      <main>
        <section className='hero'>
          <h1>applaudify</h1>
          <h3>Where achievements get applauded</h3>
          <p className='introText'>
            Collect, manage, and showcase your professional testimonials -
            because every applaud matters.
          </p>
          {!session ? (
            <Link href='/login'>
              <button className='startBtn'>Let&apos;s Start</button>
            </Link>
          ) : (
            <Link href='/home'>
              <button className='startBtn'>Let&apos;s Start</button>
            </Link>
          )}
        </section>
        <section className='features'>
          <article className='singleFeature'>
            <div className='header'>
              <h4>all your applauds in one place</h4>
              <h2>applauds inbox</h2>
            </div>
            <p>
              A dedicated space to receive and manage all your accolades. Choose
              which applauds highlight your profile. Remember to acknowledge the
              remarkable work of others with an applause too!
            </p>
          </article>
          <article className='singleFeature'>
            <div className='header'>
              <h4>celebrate achievements together</h4>
              <h2>social feed</h2>
            </div>
            <p>
              Engage with the community. Revel in shared successes and
              accolades. Don&apos;t forget to showcase your achievements!
            </p>
          </article>
          <article className='singleFeature'>
            <div className='header'>
              <h4>redefining your professional profile</h4>
              <h2>dynamic profile</h2>
            </div>
            <p>
              Beyond a typical CV—showcase your journey, skills, and
              experiences, validated by the applause you&apos;ve earned.
            </p>
          </article>
        </section>
      </main>
      <footer>
        <h3>ready to showcase your achievements?</h3>
        {!session ? (
          <Link href='/login'>
            <button className='startBtn'>Let&apos;s Start</button>
          </Link>
        ) : (
          <Link href='/home'>
            <button className='startBtn'>Let&apos;s Start</button>
          </Link>
        )}
        <p>© 2023 Applaudify</p>
      </footer>
    </div>
  );
};

export default Landing;
