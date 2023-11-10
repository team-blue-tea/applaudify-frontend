'use client';
import React from 'react';
import { setApplaudPublished } from '@/libs/DB';

type PublishButtonProps = {
  slug: string;
};

const PublishButton: React.FC<PublishButtonProps> = ({ slug }) => {
  const handlePublishClick = () => {
    setApplaudPublished(slug);
    setTimeout(() => {
      window.location.href = '/applauds/published';
    }, 500);
  };

  return (
    <button
      className='btn mt-20'
      onClick={handlePublishClick}
    >
      Publish
    </button>
  );
};

export default PublishButton;
