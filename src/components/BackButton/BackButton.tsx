'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { back } from '@/assets';

const BackButton = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <button onClick={goBack} className="cursor-pointer">
      <Image src={back} alt="back" width={30} height={30}></Image>
    </button>
  );
};

export default BackButton;
