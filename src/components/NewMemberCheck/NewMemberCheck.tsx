'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { getAllMembers, addNewMember } from '@/libs/DB';
import { MemberT } from '@/types/MemberT';

interface NewMemberCheckProps {
  setMembers: (members: MemberT[]) => void;
}

const NewMemberCheck = () => {
  const { data: session } = useSession();
  const [members, setMembers] = useState<MemberT[]>([]);

  useEffect(() => {
    if (!session) return;
    let isSubscribed = true;

    (async () => {
      const members = await getAllMembers();
      if (isSubscribed) {
        setMembers(members);
        const isMemberNew = !members.some(
          (member: MemberT) => member.email === session.user?.email
        );
        if (isMemberNew) {
          await addNewMember({
            email: session.user?.email as string,
            name: session.user?.name as string,
            avatarUrl: session.user?.image as string,
          });
        }
      }
    })();

    return () => {
      isSubscribed = false;
    };
  }, [session, setMembers]);

  return null;
};

export default NewMemberCheck;
