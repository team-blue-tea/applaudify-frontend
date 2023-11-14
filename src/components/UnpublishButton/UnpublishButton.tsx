'use client';
import React from 'react';
import { setApplaudUnpublished } from '@/libs/DB';
import { useRouter } from 'next/navigation';

type PublishButtonProps = {
  slug: string;
};

const UnpublishButton: React.FC<PublishButtonProps> = ({ slug }) => {
  const router = useRouter();
  const handlePublishClick = () => {
    setApplaudUnpublished(slug);
    setTimeout(() => {
      router.refresh();
      window.location.reload();
    }, 200);
  };
  return (
    <button
      className='btn mt-10'
      onClick={handlePublishClick}
    >
      Unpublish
    </button>
  );
};

export default UnpublishButton;
