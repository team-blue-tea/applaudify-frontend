// import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { getUnreadApplauds } from '@/libs/DB';
// import { SessionT } from '@/types/SessionT';

// type InboxProps = {
//   session: SessionT;
// };

// : React.FC<InboxProps> 
// { session }

const Inbox = async () => {
  // const [Numbers, setNumbers] = useState<string>('');
  // useEffect(() => {
  //   (async () => {
  //     const memberEmail = session?.user?.email;
  //     if (memberEmail) {
  //       const unreadNumbers = await getUnreadApplauds(memberEmail as string);
  //       if (unreadNumbers !== 0) {
  //         setNumbers(unreadNumbers);
  //       }
  //     }
  //   })();
  // }, [session]);

  const session = await getServerSession();
  const memberEmail = session?.user?.email;
  const unreadNumbers = await getUnreadApplauds(memberEmail as string);
  const Numbers = unreadNumbers !== 0 ? unreadNumbers : '';

  return (
    <Link
      href='/applauds'
      className='flex gap-2 items-center header-nav header-btn'
    >
      Inbox
      {Numbers !== '' && (
        <div className='counter-border'>
          <div className='counter small'>{Numbers}</div>
        </div>
      )}
    </Link>
  );
};

export default Inbox;
