'use client';
import React from 'react';
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

  return (
    <button
      className='text-center border-solid border border-metal p-2'
      onClick={handlePublishClick}
    >
      Unpublish Applaud
    </button>
  );
};

export default UnpublishButton;