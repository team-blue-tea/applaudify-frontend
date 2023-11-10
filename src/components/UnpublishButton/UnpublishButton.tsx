'use client';
import React, { useEffect } from 'react';
import { setApplaudUnpublished } from '@/libs/DB';

type PublishButtonProps = {
  slug: string;
};

const UnpublishButton: React.FC<PublishButtonProps> = ({ slug }) => {
  const handlePublishClick = () => {
    setApplaudUnpublished(slug);
    setTimeout(() => {
      window.location.href = '/applauds/unpublished';
    }, 500);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     window.location.reload();
  //   }, 100);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <button
      className='btn mt-20'
      onClick={handlePublishClick}
    >
      Unpublish Applaud
    </button>
  );
};

export default UnpublishButton;
