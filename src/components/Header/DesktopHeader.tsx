'use client';
import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useWindowSize } from '@uidotdev/usehooks';

const navLinksDesktop = [
  {
    text: 'profile',
    href: '/profile',
  },
  {
    text: 'about',
    href: '/about',
  },
  {
    text: 'docs',
    href: 'https://github.com/orgs/team-blue-tea/repositories',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

const DesktopHeader = () => {
  const windowSize = useWindowSize();
  const { data: session } = useSession();

  if (windowSize.width && windowSize.width > 660) {
    return (
      <header className="sticky top-0 px-10 py-2.5 backdrop-blur-xl border-b bg-light/50 border-silver/50 flex flex-col w-full justify-between items-center gap-3 z-10">
        <div className="flex w-full bg-transparent items-center justify-between">
          <Link href="/" className="self-start">
            <h1 className="header ombre-text">applaudify</h1>
          </Link>
          <div className="flex bg-transparent items-center gap-3 ml-10 w-full">
            {navLinksDesktop.map((link, index) => {
              return (
                <div className="overflow-hidden" key={index + link.text}>
                  <Link
                    href={link.href}
                    rel={link.rel}
                    target={link.target}
                    className="sub-title  text-2xl"
                  >
                    {link.text}
                  </Link>
                </div>
              );
            })}
            <Link
              className="ml-auto"
              href={session ? '' : '/login'}
              onClick={
                session ? () => signOut({ callbackUrl: '/' }) : undefined
              }
            >
              {session ? 'Sign out' : 'Login / Signup'}
            </Link>
          </div>
        </div>
      </header>
    );
  } else {
    return;
  }
};

export default DesktopHeader;
