import React from 'react';
import Image from 'next/image';

type MockCardForHomesProps = {
  firstName: string;
  imageURL: string;
};

const MockApplaudCards: React.FC<MockCardForHomesProps> = ({ firstName }) => {
  return (
    <>
      {/* 1ST CARD */}
      <section className="applaud-card">
        <article className="flex flex-col items-center">
          <p className="send-date">Sep 14, 2023</p>
          <p className="p-2.5 body-main text-center">
            &apos;{firstName} is a great developer! I really enjoyed working
            with {firstName} on this project. {firstName} is super easy to work
            with and making decisions together is a breeze. Looking forward to
            work with you again in the future.&apos;
          </p>
        </article>
        <article className="flex flex-col items-center">
          <p className="sender-info text-stone">From</p>
          <div className="sender-layout">
            <Image
              src="https://avatars.githubusercontent.com/u/91157834?v=4"
              alt="Sender Profile"
              width={30}
              height={30}
              className="profile-img"
            ></Image>
            <div className="flex w-full justify-between">
              <div>
                <h4 className="sender">Hugo Dahlgren</h4>
                <p className="sender-info">Senior Software Engineer</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* 2ND CARD */}

      <section className="applaud-card">
        <article className="flex flex-col items-center">
          <p className="send-date">Aug 07, 2023</p>
          <p className="p-2.5 body-main">
            &apos;{firstName} is a talented and dedicated software developer,
            and I am grateful for their hard work and dedication. It was a
            pleasure working with you.&apos;
          </p>
        </article>
        <article className="flex flex-col items-center">
          <p className="sender-info text-stone">From</p>
          <div className="sender-layout">
            <Image
              src="https://avatars.githubusercontent.com/u/101557392?v=4"
              alt="Sender Profile"
              width={30}
              height={30}
              className="profile-img"
            ></Image>
            <div className="flex w-full justify-between items-end">
              <div>
                <h4 className="sender">Vanessa Wingårdh</h4>
                <p className="sender-info">Developer Team Lead</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* 3RDCARD */}

      <section className="applaud-card">
        <article className="flex flex-col items-center">
          <p className="send-date">Mar 14, 2023</p>
          <p className="p-2.5 body-main">
            &apos;Working along side {firstName} on various projects has been
            nothing short of delightful. {firstName} has a keen eye for detail
            and profound understanding of user experience, which had an immense
            impact on the outcome of the project.&apos;
          </p>
        </article>
        <article className="flex flex-col items-center">
          <p className="sender-info text-stone">From</p>
          <div className="sender-layout">
            <Image
              src="https://avatars.githubusercontent.com/u/9844254?v=4"
              alt="Sender Profile"
              width={30}
              height={30}
              className="profile-img"
            ></Image>
            <div className="flex w-full justify-between items-end">
              <div>
                <h4 className="sender">Muhammad Ahsan Ayaz</h4>
                <p className="sender-info">Principal Engineer, Airbnb</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default MockApplaudCards;
