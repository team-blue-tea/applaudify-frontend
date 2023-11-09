'use client';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import ilija from '@/assets/about/ilija.png';
import lvan from '@/assets/about/lvan.png';
import tim from '@/assets/about/tim.png';
import sudha from '@/assets/about/sudha.png';
import logo from '@/assets/logo.png';

const About = () => {
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
        <Link href='/about'>About</Link>
        <Link href='https://github.com/orgs/team-blue-tea/repositories'>
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
      <section className='flex flex-col gap-10'>
        <h3>About Us</h3>
        <p>
          At Applaudify, we understand that for freelancers and consultants,
          every project is a testament to their adaptability, creativity, and
          commitment. Hence, our platform doesn&apos;t just stop at collecting
          affirmations; it transforms them into a dynamic journey. This not only
          serves as a source of personal motivation but also as a showcase for
          potential clients, demonstrating the value and impact these
          professionals bring to the table.
        </p>
      </section>
      <section className='flex flex-col gap-10'>
        <h3>Our Team</h3>
        <p>
          Behind Applaudify is a team of dedicated individuals, each bringing a
          unique set of skills and experiences to the table:
        </p>
      </section>
      <section className='grid grid-cols-2 gap-10'>
        <Link href='https://www.linkedin.com/in/lvan-ni/'>
          <article className='flex flex-col items-center'>
            <Image
              src={lvan}
              alt='Lvan Photo'
              width={100}
            ></Image>
            <h4>Lvan Ni</h4>
          </article>
        </Link>
        <Link href='https://www.linkedin.com/in/ilijakrilovic/'>
          <article className='flex flex-col items-center'>
            <Image
              src={ilija}
              alt='ilija Photo'
              width={100}
            ></Image>
            <h4>Ilija Krilovic</h4>
          </article>
        </Link>
        <Link href='https://www.linkedin.com/in/tim-hansson-meng/'>
          <article className='flex flex-col items-center'>
            <Image
              src={tim}
              alt='tim Photo'
              width={100}
            ></Image>
            <h4 className='text-center'>Tim Hansson Meng</h4>
          </article>
        </Link>
        <Link href='https://www.linkedin.com/in/sudha-madhuri-poojari/'>
          <article className='flex flex-col items-center'>
            <Image
              src={sudha}
              alt='Suhda Photo'
              width={100}
            ></Image>
            <h4 className='text-center'>Sudha Madhuri Poojari</h4>
          </article>
        </Link>
      </section>
      <footer>
        <p>© 2023 Applaudify</p>
      </footer>
    </div>
  );
};

export default About;
