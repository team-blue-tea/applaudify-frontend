'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { getAllMembers, getPublishedApplauds } from '@/libs/DB';
import { ApplaudT } from '@/types/ApplaudT';
import { motion, AnimatePresence } from 'framer-motion';
import { initialTabs as tabs } from '@/types/Tabs';
import { MemberT } from '@/types/MemberT';
import ApplaudCard from '@/components/ApplaudCard/ApplaudCard';
import arrow from '@/assets/card/arrow.png';
import AppHeader from '@/components/AppHeader/AppHeader';
import MockAppluadCards from '@/components/MockAppluadCards/MockAppluadCards';

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [clicked, setClicked] = useState(false);
  const [activeTab, setActiveTab] = useState('Bio');
  const [member, setMember] = useState<MemberT>();
  const [publishedApplauds, setPublishedApplauds] = useState<ApplaudT[]>([]);
  const { data: session } = useSession();

  const firstName = session?.user?.name?.split(' ')[0] as string;
  const imageURL = session?.user?.image as string;

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setClicked(true);
  };

  useEffect(() => {
    if (!session) {
      return;
    }
    const memberEmail = session.user?.email;

    (async () => {
      const applauds = await getPublishedApplauds(memberEmail as string);
      const members: MemberT[] = await getAllMembers();
      setMember(members.find((member) => member.email === memberEmail));
      setPublishedApplauds(applauds);
    })();
  }, [session]);

  return (
    <div className='flex flex-col mx-10 mt-14 gap-10'>
      <AppHeader />
      <main className='flex flex-col items-center gap-10'>
        <section className='flex flex-col gap-8 items-center w-full'>
          <div className='flex items-center justify-center w-full gap-8 px-2 py-3'>
            {session && (
              <Image
                src={imageURL}
                alt='Profile photo'
                width={88}
                height={88}
                className='rounded-full border border-silver'
              ></Image>
            )}
            <div className='w-3/5'>
              <h4 className='body-large'>{member?.name}</h4>
              <p className='body-small'>{member?.jobTitle}</p>
              <p className='body-small'>{member?.company}</p>
            </div>
          </div>
          <nav className='flex justify-around w-full'>
            {tabs.map((item) => (
              <button
                key={item.label}
                className={`${
                  item === selectedTab
                    ? 'profile-button clicked'
                    : 'profile-button'
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
                      Hey, I&apos;m {session?.user?.name}! Passionate about
                      crafting intuitive and dynamic user interfaces, I strive
                      to blend design with functionality. Always up for a new
                      challenge!
                    </p>
                  </section>
                )}
                {activeTab === 'Skills' && (
                  <section className='flex flex-wrap gap-2'>
                    <div className='skill-btn'>JavaScript</div>
                    <div className='skill-btn'>TypeScript</div>
                    <div className='skill-btn'>React</div>
                    <div className='skill-btn'>Next.js</div>
                    <div className='skill-btn'>Node.js</div>
                    <div className='skill-btn'>Framer-Motion</div>
                    <div className='skill-btn'>PostgreSQL</div>
                    <div className='skill-btn'>MongoDB</div>
                    <div className='skill-btn'>UX / UI</div>
                  </section>
                )}
                {activeTab === 'Experience' && (
                  <section className='flex flex-col gap-3'>
                    <div>
                      <p className='body-skill'>2017-Present</p>
                      <h4>Freelance Developer</h4>
                      <p className='text-stone body-skill'>
                        Worked with various startups and established companies,
                        transforming their design visions into fully responsive
                        and user-friendly web applications.
                      </p>
                    </div>
                    <div>
                      <p className='body-skill'>2015-2017</p>
                      <h4>FullStack Developer at WebSolutions AB</h4>
                      <p className='text-stone body-skill'>
                        Led a team of developers in building scalable and
                        maintainable web applications. Played a key role in
                        transitioning the team to React and modern CSS
                        frameworks.
                      </p>
                    </div>
                    <div>
                      <p className='body-skill'>2014-2015</p>
                      <h4>Frontend Developer at NordicWeb Group</h4>
                      <p className='text-stone body-skill'>
                        Began my professional journey here, quickly becoming an
                        integral part of the team. Worked closely with designers
                        to ensure pixel-perfect implementations.
                      </p>
                    </div>
                  </section>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <h3 className='sub-title'>{firstName}&apos;s applauds</h3>
        <section className='flex flex-col w-full'>
          <ApplaudCard applauds={publishedApplauds} />
          <MockAppluadCards
            firstName={firstName}
            imageURL={imageURL}
          />
        </section>
      </main>
    </div>
  );
};

export default Profile;
