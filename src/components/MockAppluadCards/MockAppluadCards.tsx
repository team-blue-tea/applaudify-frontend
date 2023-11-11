'use client';
import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import arrow from '@/assets/card/arrow.png';

type MockApplaudCardsProps = {
  firstName: string;
  imageURL: string;
};

const MockAppluadCards: React.FC<MockApplaudCardsProps> = ({firstName, imageURL}) => {
  const { data: session } = useSession();

  return (
    <>
      {/* 1ST CARD */}
      <section className='applaud-card'>
        <article className='sender-name-card'>
          <div className='name-card-spacing text-right bg-white'>
            <h4 className='name bg-white'>Hugo Dahlgren</h4>
            <p className='title-company bg-white'>Senior Software Engineer</p>
            <p className='title-company bg-white'>Tech Solutions Inc.</p>
          </div>
          <Image
            src='https://avatars.githubusercontent.com/u/91157834?v=4'
            alt='Sender Profile'
            width={58}
            height={58}
            className='profile-img'
          ></Image>
        </article>
        <Image
          src={arrow}
          alt='Arrow'
          width={14}
          height={16}
          className='self-center bg-white'
        ></Image>
        <article className='receiver-name-card'>
          {session && (
            <Image
              src={imageURL}
              alt='Receiver Profile'
              width={58}
              height={58}
              className='profile-img'
            ></Image>
          )}
          <div className='name-card-spacing bg-paper'>
            <h4 className='name bg-paper'>{session?.user?.name}</h4>
            <p className='title-company bg-paper'>Fullstack Developer</p>
            <p className='title-company bg-paper'>Freelance</p>
          </div>
        </article>
        <p className='pt-5 body-main bg-white'>
          &apos;{firstName} is a great developer! I really enjoyed working with{' '}
          {firstName} on this project. {firstName} is super easy to work with
          and making decisions together is a breeze. Looking forward to work
          with you again in the future.&apos;
        </p>
      </section>

      {/* 2ND CARD */}

      <section className='applaud-card'>
        <article className='sender-name-card'>
          <div className='name-card-spacing text-right bg-white'>
            <h4 className='name bg-white'>Vanessa Wingårdh</h4>
            <p className='title-company bg-white'>Developer Team Lead</p>
            <p className='title-company bg-white'>DesignWeb Ltd.</p>
          </div>
          <Image
            src='https://avatars.githubusercontent.com/u/101557392?v=4'
            alt='Sender Profile'
            width={58}
            height={58}
            className='profile-img'
          ></Image>
        </article>
        <Image
          src={arrow}
          alt='Arrow'
          width={14}
          height={16}
          className='self-center bg-white'
        ></Image>
        <article className='receiver-name-card'>
          {session && (
            <Image
              src={imageURL}
              alt='Receiver Profile'
              width={58}
              height={58}
              className='profile-img'
            ></Image>
          )}
          <div className='name-card-spacing bg-paper'>
            <h4 className='name  bg-paper'>{session?.user?.name}</h4>
            <p className='title-company  bg-paper'>Fullstack Developer</p>
            <p className='title-company  bg-paper'>Freelance</p>
          </div>
        </article>
        <p className='pt-5 body-main bg-white'>
          &apos;{firstName} is a talented and dedicated software developer, and
          I am grateful for their hard work and dedication. It was a pleasure
          working with you.&apos;
        </p>
      </section>

      {/* 3RDCARD */}

      <section className='applaud-card'>
        <article className='sender-name-card'>
          <div className='name-card-spacing text-right bg-white'>
            <h4 className='name bg-white'>Muhammad Ahsan Ayaz</h4>
            <p className='title-company bg-white'>Principal Engineer</p>
            <p className='title-company bg-white'>Airbnb</p>
          </div>
          <Image
            src='https://avatars.githubusercontent.com/u/9844254?v=4'
            alt='Sender Profile'
            width={58}
            height={58}
            className='profile-img bg-white'
          ></Image>
        </article>
        <Image
          src={arrow}
          alt='Arrow'
          width={14}
          height={16}
          className='self-center bg-white'
        ></Image>
        <article className='receiver-name-card'>
          {session && (
            <Image
              src={imageURL}
              alt='Receiver Profile'
              width={58}
              height={58}
              className='profile-img'
            ></Image>
          )}
          <div className='name-card-spacing bg-paper'>
            <h4 className='name bg-paper'>{session?.user?.name}</h4>
            <p className='title-company bg-paper'>Fullstack Developer</p>
            <p className='title-company bg-paper'>Freelance</p>
          </div>
        </article>
        <p className='pt-5 body-main bg-white'>
          &apos;Working along side {firstName} on various projects has been
          nothing short of delightful. {firstName} has a keen eye for detail and
          profound understanding of user experience, which had an immense impact
          on the outcome of the project.&apos;
        </p>
      </section>
    </>
  );
};

export default MockAppluadCards;
