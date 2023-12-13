import React from 'react';
import Link from 'next/link';

const NewApplaudButton = () => {
  return (
    <Link className="header-nav header-btn " href="/compose">
      +New
    </Link>
  );
};

export default NewApplaudButton;
