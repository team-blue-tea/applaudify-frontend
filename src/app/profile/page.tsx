'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import ApplaudCard from '@/components/ApplaudCard/ApplaudCard';
import { getAllMembers, getPublishedApplaudsByMemberEmail } from '@/libs/DB';
import { ApplaudT } from '@/types/ApplaudT';
import { motion, AnimatePresence } from 'framer-motion';
import { initialTabs as tabs } from '@/types/Tabs';
import { MemberT } from '@/types/MemberT';
import arrow from '@/assets/card/arrow.png';

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [activeTab, setActiveTab] = useState('Bio');
  const [member, setMember] = useState<MemberT>();
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
      const members: MemberT[] = await getAllMembers();
      setMember(members.find((member) => member.email === memberEmail));
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
        {/* <button>Edit</button> */}
      </header>
      <main className='flex flex-col items-center gap-10'>
        <section className='flex flex-col gap-8 items-center w-full'>
          <div className='flex items-center justify-center w-full gap-8 px-2 py-3'>
            <Image
              src={member?.avatarUrl!}
              alt='Profile photo'
              width={88}
              height={88}
              className='rounded-full border border-silver'
            ></Image>
            <div className='w-3/5'>
              <h4>{member?.name}</h4>
              <p>{member?.jobTitle}</p>
              <p>{member?.company}</p>
            </div>
          </div>
          <nav className='flex justify-around w-full'>
            {tabs.map((item) => (
              <button
                key={item.label}
                className={`${
                  item === selectedTab
                    ? 'selected bg-black button text-paper'
                    : ''
                } w-24 p-2 border border-silver rounded-3xl`}
                onClick={() => {
                  handleTabClick(item.label);
                  setSelectedTab(item);
                }}
              >
                {`${item.label}`}
                {item === selectedTab ? (
                  <motion.div
                    className='underline'
                    layoutId='underline'
                  />
                ) : null}
              </button>
            ))}
          </nav>
          <div>
            <AnimatePresence mode='wait'>
              <motion.div
                key={selectedTab ? selectedTab.label : 'empty'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'Bio' && (
                  <section className='flex flex-col'>
                    <p>
                      Hey, I&apos;m {session?.user?.name}! With over 6 years of
                      experience as a frontend developer, I&apos;ve had the
                      privilege to collaborate with innovative startups and
                      renowned global brands. Passionate about crafting
                      intuitive and dynamic user interfaces, I strive to blend
                      design with functionality. Always up for a new challenge!
                    </p>
                  </section>
                )}
                {activeTab === 'Skills' && (
                  <section className='flex flex-col'>
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
                  <section className='flex flex-col'>
                    <ul>
                      <li>
                        Freelance Frontend Developer (2017-Present). Worked with
                        various startups and established companies, transforming
                        their design visions into fully responsive and
                        user-friendly web applications.
                      </li>
                      <li>
                        Senior Frontend Developer at WebSolutions AB
                        (2015-2017). Led a team of developers in building
                        scalable and maintainable web applications. Played a key
                        role in transitioning the team to React and modern CSS
                        frameworks.
                      </li>
                      <li>
                        Frontend Developer Intern at NordicWeb Group
                        (2014-2015). Began my professional journey here, quickly
                        becoming an integral part of the team. Worked closely
                        with designers to ensure pixel-perfect implementations.
                      </li>
                    </ul>
                  </section>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <h3>applauds</h3>

        {/* PUBLISHED CARDS */}

        <section className='flex flex-col w-full'>
          <ApplaudCard applauds={publishedApplauds} />
        </section>

        {/* 1ST CARD */}

        <section className='applaud-card'>
          <article className='sender-name-card'>
            <div className='flex flex-col text-right gap-1.5'>
              <h4 className='name'>Hugo Dahlgren</h4>
              <p className='title-company'>Senior Software Engineer</p>
              <p className='title-company'>Tech Solutions Inc.</p>
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
            className='self-center'
          ></Image>
          <article className='receiver-name-card'>
            <Image
              src={session?.user?.image!}
              alt='Receiver Profile'
              width={58}
              height={58}
              className='profile-img'
            ></Image>
            <div className='flex flex-col gap-1.5 bg-paper'>
              <h4 className='name bg-paper'>{session?.user?.name}</h4>
              <p className='title-company bg-paper'>Fullstack Developer</p>
              <p className='title-company bg-paper'>Freelance</p>
            </div>
          </article>
          <p className='text-center pt-5 body-main'>
            &apos;{firstName} is a great developer! I really enjoyed working
            with {firstName} on this project. {firstName} is super easy to work
            with and making decisions together is a breeze. Looking forward to
            work with you again in the future.&apos;
          </p>
        </section>

        {/* 2ND CARD */}

        <section className='applaud-card'>
          <article className='sender-name-card'>
            <div className='name-card-spacing text-right'>
              <h4 className='name'>Vanessa Wingårdh</h4>
              <p className='title-company'>Developer Team Lead</p>
              <p className='title-company'>DesignWeb Ltd.</p>
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
                className='self-center'
              ></Image>
          <article className='receiver-name-card'>
            <Image
              src={session?.user?.image!}
              alt='Receiver Profile'
              width={58}
              height={58}
              className='profile-img'
            ></Image>
            <div className='name-card-spacing bg-paper'>
              <h4 className='name  bg-paper'>{session?.user?.name}</h4>
              <p className='title-company  bg-paper'>Fullstack Developer</p>
              <p className='title-company  bg-paper'>Freelance</p>
            </div>
          </article>
          <p className='text-center pt-5 body-main'>
            &apos;{firstName} is a talented and dedicated software developer,
            and I am grateful for their hard work and dedication. It was a
            pleasure working with you.&apos;
          </p>
        </section>

        {/* 3RDCARD */}

        <section className='applaud-card'>
          <article className='sender-name-card'>
            <div className='name-card-spacing text-right'>
              <h4 className='name'>Muhammad Ahsan Ayaz</h4>
              <p className='title-company'>Principal Engineer</p>
              <p className='title-company'>Airbnb</p>
            </div>
            <Image
              src='https://avatars.githubusercontent.com/u/9844254?v=4'
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
                className='self-center'
              ></Image>
          <article className='receiver-name-card'>
            <Image
              src={session?.user?.image!}
              alt='Receiver Profile'
              width={58}
              height={58}
              className='profile-img'
            ></Image>
            <div className='name-card-spacing bg-paper'>
              <h4 className='name bg-paper'>{session?.user?.name}</h4>
              <p className='title-company bg-paper'>Fullstack Developer</p>
              <p className='title-company bg-paper'>Freelance</p>
            </div>
          </article>
          <p className='text-center pt-5 body-main'>
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
