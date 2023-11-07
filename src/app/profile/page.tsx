'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import ApplaudCard from '@/things/ApplaudCard/ApplaudCard';
import { getPublishedApplaudsByMemberEmail } from '@/libs/DB';
import { ApplaudT } from '@/types/ApplaudT';

const Profile = () => {
  // const [profileInfo, setProfileInfo] = useState(Bio);
  // const [profileApplauds, getProfileApplauds] = useState([]);
  const [activeTab, setActiveTab] = useState('Bio');
  const [publishedApplauds, setPublishedApplauds] = useState<ApplaudT[]>([]);
  const { data: session } = useSession();

  const firstName = session?.user?.name?.split(' ')[0];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (!session) {
      return;
    }
    const memberEmail = session.user?.email;
    (async () => {
      const publishedApplaudsByMemberEmail =
        await getPublishedApplaudsByMemberEmail(memberEmail as string);
      setPublishedApplauds(publishedApplaudsByMemberEmail);
    })();
  }, [session]);

  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <header className='flex justify-between'>
        <Link href='/menu'>
          <button className='border-solid border border-charcoal px-4 py-1'>
            Menu
          </button>
        </Link>
        <button>Edit</button>
      </header>
      <main className='flex flex-col items-center gap-10'>
        <section className='flex flex-col gap-3 items-center w-full'>
          <h4>{session?.user?.name}</h4>
          <Image
            src={session?.user?.image!}
            alt='Profile photo'
            width={80}
            height={80}
            className='rounded-full'
          ></Image>
          <article className='flex justify-around w-full'>
            <button onClick={() => handleTabClick('Bio')}>Bio</button>
            <button onClick={() => handleTabClick('Skills')}>Skills</button>
            <button onClick={() => handleTabClick('Experience')}>
              Experience
            </button>
          </article>
          <div>
            {activeTab === 'Bio' && (
              <section className='flex flex-col gap-4 border-solid border border-metal p-4'>
                <p>
                  Hey, I&apos;m {session?.user?.name}! With over 6 years of
                  experience as a frontend developer, I&apos;ve had the
                  privilege to collaborate with innovative startups and renowned
                  global brands. Passionate about crafting intuitive and dynamic
                  user interfaces, I strive to blend design with functionality.
                  Always up for a new challenge!
                </p>
              </section>
            )}
            {activeTab === 'Skills' && (
              <section className='flex flex-col gap-4 border-solid border border-metal p-4'>
                <ul>
                  <li>JavaScript</li>
                  <li>React.js & Next.js</li>
                  <li>CSS, SCSS & TailwindCSS</li>
                  <li>Responsive Web Design</li>
                  <li>UX/UI Design Principles</li>
                  <li>Performance Optimization</li>
                  <li>Cross-Browser Compatibility</li>
                  <li>Storybook & Component Driven Design</li>
                </ul>
              </section>
            )}
            {activeTab === 'Experience' && (
              <section className='flex flex-col gap-4 border-solid border border-metal p-4'>
                <ul>
                  <li>
                    Freelance Frontend Developer (2017-Present). Worked with
                    various startups and established companies, transforming
                    their design visions into fully responsive and user-friendly
                    web applications.
                  </li>
                  <li>
                    Senior Frontend Developer at WebSolutions AB (2015-2017).
                    Led a team of developers in building scalable and
                    maintainable web applications. Played a key role in
                    transitioning the team to React and modern CSS frameworks.
                  </li>
                  <li>
                    Frontend Developer Intern at NordicWeb Group (2014-2015).
                    Began my professional journey here, quickly becoming an
                    integral part of the team. Worked closely with designers to
                    ensure pixel-perfect implementations.
                  </li>
                </ul>
              </section>
            )}
          </div>
        </section>
        <section>
          <ApplaudCard applauds={publishedApplauds} />
        </section>
        <section className='flex flex-col gap-4 border-solid border border-metal p-4'>
          <article className='flex items-center gap-6 p-2 border-solid border border-stone'>
            <Image
              src='https://avatars.githubusercontent.com/u/91157834?v=4'
              alt='Sender Profile'
              width={50}
              height={50}
              className='rounded-full'
            ></Image>
            <div className='flex flex-col'>
              <h4 className='text-sm'>Hugo Dahlgren</h4>
              <p className='text-xs'>Senior Software Engineer</p>
              <p className='text-xs'>Tech Solutions Inc.</p>
            </div>
          </article>
          <article className='flex justify-end items-center gap-6 p-2 border-solid border border-stone'>
            <div className='flex flex-col text-right'>
              <h4 className='text-sm'>{session?.user?.name}</h4>
              <p className='text-xs'>Fullstack Developer</p>
              <p className='text-xs'>Freelance</p>
            </div>
            <Image
              src={session?.user?.image!}
              alt='Receiver Profile'
              width={50}
              height={50}
              className='rounded-full'
            ></Image>
          </article>
          <p className='text-center'>
            &apos;{firstName} is a great developer! I really enjoyed working
            with {firstName} on this project. {firstName} is super easy to work
            with and making decisions together is a breeze. Looking forward to
            work with you again in the future.&apos;
          </p>
        </section>
        <section className='flex flex-col gap-4 border-solid border border-metal p-4'>
          <article className='flex items-center gap-6 p-2 border-solid border border-stone'>
            <Image
              src='https://avatars.githubusercontent.com/u/101557392?v=4'
              alt='Sender Profile'
              width={50}
              height={50}
              className='rounded-full'
            ></Image>
            <div className='flex flex-col'>
              <h4 className='text-sm'>Vanessa Wingårdh</h4>
              <p className='text-xs'>Developer Team Lead</p>
              <p className='text-xs'>DesignWeb Ltd.</p>
            </div>
          </article>
          <article className='flex justify-end items-center gap-6 p-2 border-solid border border-stone'>
            <div className='flex flex-col text-right'>
              <h4 className='text-sm'>{session?.user?.name}</h4>
              <p className='text-xs'>Fullstack Developer</p>
              <p className='text-xs'>Freelance</p>
            </div>
            <Image
              src={session?.user?.image!}
              alt='Receiver Profile'
              width={50}
              height={50}
              className='rounded-full'
            ></Image>
          </article>
          <p className='text-center'>
            &apos;{firstName} is a talented and dedicated software developer,
            and I am grateful for their hard work and dedication. It was a
            pleasure working with you.&apos;
          </p>
        </section>
        <section className='flex flex-col gap-4 border-solid border border-metal p-4'>
          <article className='flex items-center gap-6 p-2 border-solid border border-stone'>
            <Image
              src='https://avatars.githubusercontent.com/u/9844254?v=4'
              alt='Sender Profile'
              width={50}
              height={50}
              className='rounded-full'
            ></Image>
            <div className='flex flex-col'>
              <h4 className='text-sm'>Muhammad Ahsan Ayaz</h4>
              <p className='text-xs'>Principal Engineer</p>
              <p className='text-xs'>Airbnb</p>
            </div>
          </article>
          <article className='flex justify-end items-center gap-6 p-2 border-solid border border-stone'>
            <div className='flex flex-col text-right'>
              <h4 className='text-sm'>{session?.user?.name}</h4>
              <p className='text-xs'>Fullstack Developer</p>
              <p className='text-xs'>Freelance</p>
            </div>
            <Image
              src={session?.user?.image!}
              alt='Receiver Profile'
              width={50}
              height={50}
              className='rounded-full'
            ></Image>
          </article>
          <p className='text-center'>
            &apos;Working along side {firstName} on various projects has been
            nothing short of delightful. {firstName} has a keen eye for detail
            and profound understanding of user experience, which had an immense
            impact on the outcome of the project.&apos;
          </p>
        </section>
      </main>
    </div>
  );
};

export default Profile;
