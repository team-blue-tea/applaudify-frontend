"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "@/types/Tabs";

type ProfileInfoProps = {
  bio: string;
  skills: string[];
  experience: string;
};

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  bio,
  skills,
  experience,
}) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [activeTab, setActiveTab] = useState("Bio");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <nav className="flex justify-around w-full">
        {tabs.map((item) => (
          <button
            key={item.label}
            className={`${
              item === selectedTab ? "profile-button clicked" : "profile-button"
            } w-24 p-2 border border-silver/50 rounded-3xl body-small`}
            onClick={() => {
              handleTabClick(item.label);
              setSelectedTab(item);
            }}
          >
            {`${item.label}`}
            {item === selectedTab ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </button>
        ))}
      </nav>
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "Bio" && (
              <section className="flex flex-col">
                <p>{bio}</p>
              </section>
            )}
            {activeTab === "Skills" && (
              <section className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-btn">
                    {skill}
                  </div>
                ))}
              </section>
            )}
            {activeTab === "Experience" && (
              <section
                className="flex flex-col gap-3"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {experience}
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProfileInfo;
