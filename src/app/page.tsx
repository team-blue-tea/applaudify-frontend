import React from 'react';
import Link from 'next/link';

const Landing = () => {
  return (
    <>
      <header>
        {/* LOGO here */}
        <Link href='/about'>About</Link>
        <Link href='https://github.com/orgs/team-blue-tea/repositories'>
          Docs
        </Link>
        <Link href='/login'>Login</Link>
      </header>
      <main>
        <section className='hero'>
          <h1>applaudify</h1>
          <h3>Where achievements get applauded</h3>
          <p>
            Collect, manage, and showcase your professional testimonials -
            because every applaud matters.
          </p>
          <Link href='/login'>
            <button>Let&apos;s Start</button>
          </Link>
        </section>
        <section>
          <article>
            <p>all your applauds in one place</p>
            <h2>applauds inbox</h2>
            <p>
              A dedicated space to receive and manage all your accolades. Choose
              which applauds highlight your profile. Remember to acknowledge the
              remarkable work of others with an applause too!
            </p>
          </article>
          <article>
            <p>celebrate achievements together</p>
            <h2>social feed</h2>
            <p>
              Engage with the community. Revel in shared successes and
              accolades. Don&apos;t forget to showcase your achievements!
            </p>
          </article>
          <article>
            <p>redefining your professional profile</p>
            <h2>dynamic profile</h2>
            <p>
              Beyond a typical CV—showcase your journey, skills, and
              experiences, validated by the applause you&apos;ve earned.
            </p>
          </article>
        </section>
        <section>
          <h3>ready to showcase your achievements?</h3>
          <Link href='/login'>
            <button>Let&apos;s Start</button>
          </Link>
        </section>
      </main>
      <footer>
        <p>© 2023 Applaudify</p>
      </footer>
    </>
  );
};

export default Landing;
