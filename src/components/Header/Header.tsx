'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import { closeMenu, menu, profile, inbox } from '@/assets';
import { useWindowSize } from '@uidotdev/usehooks';

const Header = () => {
  const { data: session } = useSession();
  const [dropDown, setDropDown] = useState(false);
  const toggleMenu = () => {
    setDropDown(!dropDown);
  };

  const windowSize = useWindowSize();

  const navLinks = [
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Docs',
      href: 'https://github.com/orgs/team-blue-tea/repositories',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      text: session ? 'Sign out' : 'Login / Signup',
      href: session ? '' : '/login',
      onClick: session ? () => signOut({ callbackUrl: '/' }) : undefined,
    },
  ];

  const menuVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  const menuItemsContainerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.45,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const menuItemVariants = {
    initial: {
      y: '30vh',
      transition: {
        duration: 0.25,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  if (windowSize.width && windowSize.width <= 660) {
    return (
      <header className="sticky top-0 px-10 py-2.5 backdrop-blur-xl border-b bg-light/50 border-silver/50 flex flex-col w-full justify-between items-center gap-3 z-10">
        <div className="flex w-full bg-transparent items-center justify-between">
          <Link href="/">
            <h1 className="header ombre-text">applaudify</h1>
          </Link>
          <div className="header-nav mr-auto" onClick={toggleMenu}>
            <Image
              src={menu}
              width={40}
              height={40}
              alt="menu icon"
              className="header-icon-border ml-2"
            />
          </div>
          <AnimatePresence>
            {dropDown && (
              <motion.div
                variants={menuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="origin-top h-screen w-full fixed left-0 top-0 gap-40 px-10 py-4 z-10 bg-light"
              >
                <div className="flex h-full flex-col">
                  <div className="flex justify-between items-center">
                    <Link href="/">
                      <h1 className="header ombre-text">applaudify</h1>
                    </Link>
                    <Image
                      src={closeMenu}
                      alt="close menu"
                      width={30}
                      height={30}
                      onClick={toggleMenu}
                      className="cursor-pointer"
                    ></Image>
                  </div>
                  <motion.div
                    variants={menuItemsContainerVariants}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col h-full justify-center items-center gap-10"
                  >
                    {navLinks.map((link, index) => {
                      return (
                        <div
                          className="overflow-hidden"
                          key={index + link.text}
                        >
                          <motion.div
                            variants={menuItemVariants}
                            initial="initial"
                            animate="open"
                            exit="initial"
                          >
                            <Link
                              href={link.href}
                              rel={link.rel}
                              target={link.target}
                              onClick={link.onClick}
                              className="sub-title"
                            >
                              {link.text}
                            </Link>
                          </motion.div>
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {session ? (
            <>
              <Link href="/profile" className="header-nav">
                <Image
                  src={profile}
                  alt="profile icon"
                  width={40}
                  height={40}
                  className="header-icon-border ml-2"
                ></Image>
              </Link>
              <Link href={'/inbox'} className="header-nav">
                <Image
                  src={inbox}
                  alt="inbox icon"
                  width={40}
                  height={40}
                  className="header-icon-border ml-2"
                ></Image>
              </Link>
            </>
          ) : (
            <Link href="/login" className="header-nav">
              Login
            </Link>
          )}
        </div>
      </header>
    );
  }
};

export default Header;
