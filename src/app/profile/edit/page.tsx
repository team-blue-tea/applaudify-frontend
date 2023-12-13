'use client';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { BackButton, Header } from '@/components';
import { getAllMembers, updateMember } from '@/libs/DB';
import { MemberT } from '@/types/MemberT';
import { UpdatedMemberT } from '@/types/UpdatedMemberT';
import { useWindowSize } from '@uidotdev/usehooks';

const EditProfile = () => {
  const { data: session } = useSession();
  const [member, setMember] = useState<MemberT>();
  const [memberName, setMemberName] = useState('');
  const [memberJobTitle, setMemberJobTitle] = useState('');
  const [memberCompany, setMemberCompany] = useState('');
  const [memberBio, setMemberBio] = useState('');
  const [memberExperience, setMemberExperience] = useState('');
  const [memberSkills, setMemberSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState<string>('');
  const [skillsErrorMessage, setSkillsErrorMessage] = useState<string>('');
  const [nameErrorMessage, setNameErrorMessage] = useState<string>('');

  const formRef = useRef<HTMLFormElement>(null);
  const bioRef = useRef<HTMLTextAreaElement>(null);
  const newSkillRef = useRef<HTMLInputElement>(null);
  const experienceRef = useRef<HTMLTextAreaElement>(null);
  const imageURL = session?.user?.image as string;
  const memberEmail = session?.user?.email;

  const windowSize = useWindowSize();

  useEffect(() => {
    if (!session) {
      return;
    }
    (async () => {
      const members: MemberT[] = await getAllMembers();
      const currentMember = members.find(
        (member) => member.email === memberEmail
      );
      setMember(currentMember);
      setMemberName(currentMember?.name as string);
      setMemberJobTitle(currentMember?.jobTitle as string);
      setMemberCompany(currentMember?.company as string);
      setMemberBio(currentMember?.bio as string);
      setMemberExperience(currentMember?.experience as string);
      if (currentMember?.skills) {
        setMemberSkills(currentMember.skills.split(','));
      }
    })();
  }, [session, memberEmail]);

  const handleRemoveSkill = (indexToRemove: number) => {
    const updatedSkills = [...memberSkills];
    updatedSkills.splice(indexToRemove, 1);
    setMemberSkills(updatedSkills);
  };

  const handleAddSkill = () => {
    const newSkill = newSkillRef.current?.value.trim();
    if (!newSkill) {
      setNewSkill('');
      return;
    }
    if (
      !memberSkills.find(
        (skill) => skill.toLowerCase() === newSkill.toLowerCase()
      )
    ) {
      setMemberSkills([...memberSkills, newSkill]);
      setNewSkill('');
    } else {
      setSkillsErrorMessage('That skill is already added.');
      setTimeout(() => {
        setSkillsErrorMessage('');
      }, 5000);
    }
  };

  const handleSkillChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewSkill(e.target.value);
  };

  const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setMemberBio(e.target.value);
  };

  const handleExperienceChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setMemberExperience(e.target.value);
  };

  const handleSave = () => {
    if (memberName.trim() === '') {
      setNameErrorMessage('Name cannot be empty.');
      setTimeout(() => {
        setNameErrorMessage('');
      }, 5000);
      return;
    }
    const memberSkillsString = memberSkills.join(',');
    const memberBio = bioRef.current?.value;
    const memberExperience = experienceRef.current?.value;

    const updatedMember: UpdatedMemberT = {
      name: memberName,
      jobTitle: memberJobTitle,
      company: memberCompany,
      bio: memberBio,
      skills: memberSkillsString,
      experience: memberExperience,
    };

    updateMember(updatedMember, member?.id as string);

    setTimeout(() => {
      window.location.href = '/profile';
    }, 500);
  };

  const handleNavbar = (size: number) => {
    if (size > 660) {
      return <Header />;
    } else {
      return null;
    }
  };

  return (
    <div className="flex flex-col mt-4 gap-10 mx-4">
      {windowSize.width && handleNavbar(windowSize.width)}
      <header className="flex mx-10 justify-between items-center md:min-w-[700px] md:self-center">
        <BackButton />
        <button className="header-nav" onClick={handleSave}>
          Save
        </button>
      </header>

      <section className="flex mx-10 flex-col gap-8 items-center w-full pb-24 max-w-3xl self-center">
        <div className="flex w-full flex-col gap-8">
          <div className="flex items-center justify-center w-full gap-8 px-2 py-3">
            {session && (
              <Image
                src={imageURL}
                alt="Profile photo"
                width={88}
                height={88}
                className="rounded-full border border-silver"
              ></Image>
            )}
            <div className="flex flex-col gap-2">
              <input
                type="text"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                className="body-large bg-white text-charcoal border border-silver rounded-xl p-2 w-full"
                placeholder="Name"
              />
              {nameErrorMessage}
              <input
                type="text"
                value={memberJobTitle}
                onChange={(e) => setMemberJobTitle(e.target.value)}
                className="body-small bg-white text-charcoal border border-silver rounded-xl p-2 w-full"
                placeholder="Job Title"
              />
              <input
                type="text"
                value={memberCompany}
                onChange={(e) => setMemberCompany(e.target.value)}
                className="body-small bg-white text-charcoal border border-silver rounded-xl p-2 w-full"
                placeholder="Company"
              />
            </div>
          </div>
          <form id="editProfile" className="flex flex-col gap-10" ref={formRef}>
            <textarea
              rows={6}
              placeholder="Bio"
              ref={bioRef}
              value={memberBio}
              onChange={handleBioChange}
              className="border border-silver rounded-xl p-3"
              maxLength={1000}
            />
          </form>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex gap-2 justify-center flex-wrap">
              {memberSkills.map((skill, index) => (
                <div key={index} className="skill-btn">
                  <button onClick={() => handleRemoveSkill(index)}>
                    {skill} x
                  </button>
                </div>
              ))}
            </div>
            {skillsErrorMessage}
            <div className="flex gap-2 justify-center">
              <input
                type="text"
                placeholder="New Skill.."
                ref={newSkillRef}
                value={newSkill}
                onChange={handleSkillChange}
                className="w-1/2 border border-silver rounded-xl px-3"
              />
              <button className="btn w-1/3" onClick={handleAddSkill}>
                Add
              </button>
            </div>
          </div>
          <textarea
            rows={10}
            placeholder="Experience"
            ref={experienceRef}
            value={memberExperience}
            onChange={handleExperienceChange}
            className="border border-silver rounded-xl p-3"
            maxLength={1000}
          />
        </div>
      </section>
    </div>
  );
};

export default EditProfile;
