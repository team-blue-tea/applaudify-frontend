'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { initialTabs as tabs } from '@/types/Tabs';

type ProfileInfoProps = {
  name: string;
};

const ProfileInfo: React.FC<ProfileInfoProps> = ({ name }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [activeTab, setActiveTab] = useState('Bio');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <nav className='flex justify-around w-full'>
        {tabs.map((item) => (
          <button
            key={item.label}
            className={`${
              item === selectedTab ? 'profile-button clicked' : 'profile-button'
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
                  Hey, I&apos;m {name}! Passionate about crafting intuitive and
                  dynamic user interfaces, I strive to blend design with
                  functionality. Always up for a new challenge!
                </p>
              </section>
            )}
            {activeTab === 'Skills' && (
              <section className='flex flex-wrap gap-2'>
                <div className='skill-btn'>TypeScript</div>
                <div className='skill-btn'>JavaScript</div>
                <div className='skill-btn'>React</div>
                <div className='skill-btn'>Next.js</div>
                <div className='skill-btn'>Node.js</div>
                <div className='skill-btn'>Framer-Motion</div>
                <div className='skill-btn'>SQL</div>
                <div className='skill-btn'>MongoDB</div>
                <div className='skill-btn'>UX / UI</div>
                <div className='skill-btn'>HTML</div>
                <div className='skill-btn'>CSS</div>
                <div className='skill-btn'>Tailwind</div>
                <div className='skill-btn'>Figma</div>
              </section>
            )}
            {activeTab === 'Experience' && (
              <section className='flex flex-col gap-3'>
                <div>
                  <p className='body-skill'>2017-Present</p>
                  <h4>Freelance Developer</h4>
                  <p className='text-stone body-skill'>
                    Worked with various startups and established companies,
                    transforming their design visions into fully responsive and
                    user-friendly web applications.
                  </p>
                </div>
                <div>
                  <p className='body-skill'>2015-2017</p>
                  <h4>FullStack Developer at WebSolutions AB</h4>
                  <p className='text-stone body-skill'>
                    Led a team of developers in building scalable and
                    maintainable web applications. Played a key role in
                    transitioning the team to React and modern CSS frameworks.
                  </p>
                </div>
                <div>
                  <p className='body-skill'>2014-2015</p>
                  <h4>Frontend Developer at NordicWeb Group</h4>
                  <p className='text-stone body-skill'>
                    Began my professional journey here, quickly becoming an
                    integral part of the team. Worked closely with designers to
                    ensure pixel-perfect implementations.
                  </p>
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProfileInfo;
