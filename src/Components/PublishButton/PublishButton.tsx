'use client';
import React from 'react';
import { setApplaudPublished } from '@/libs/DB';

type PublishButtonProps = {
  slug: string;
};

const PublishButton: React.FC<PublishButtonProps> = ({ slug }) => {
  const handlePublishClick = () => {
    setApplaudPublished(slug);
  };

  return (
    <button
      className='text-center border-solid border border-metal p-2'
      onClick={handlePublishClick}
    >
      Publish to Profile
    </button>
  );
};

export default PublishButton;