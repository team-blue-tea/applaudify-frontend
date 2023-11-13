'use client';
import React from 'react';
import { setApplaudUnpublished } from '@/libs/DB';
import { useRouter } from 'next/navigation';
import { useAnimate } from "framer-motion";

type PublishButtonProps = {
  slug: string;
};

const UnpublishButton: React.FC<PublishButtonProps> = ({ slug }) => {
  const [scope, animate] = useAnimate();
  const router = useRouter();
  const handlePublishClick = () => {
    setApplaudUnpublished(slug);
    router.refresh();
    window.location.reload();
  };
  return (
    <div ref={scope}>
    <button
      className='btn mt-10'
      onClick={handlePublishClick}
    >
      Unpublish
    </button>
    </div>
  );
};

export default UnpublishButton;
