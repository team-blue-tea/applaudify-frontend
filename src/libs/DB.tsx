import axios from 'axios';
import { NewMemberT } from '@/types/NewMemberT';
import { NewApplaudT } from '@/types/NewApplaudT';
import { ApplaudT } from '@/types/ApplaudT';

const java_backend_uri =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://applaudify-backend.fly.dev';

const getAllApplauds = async () => {
  try {
    const uri = `${java_backend_uri}/api/v1/applauds`;
    const res = await axios.get(uri);
    return res.data.reverse();
  } catch (error) {
    console.error('An error occurred while fetching applauds -------->', error);
    return null;
  }
};

const addNewMember = async (newMember: NewMemberT) => {
  try {
    const uri = `${java_backend_uri}/api/v1/members`;
    await axios.post(uri, newMember);
  } catch (error) {
    console.error('An error occurred while adding new member -------->', error);
  }
};

const sendNewApplaud = async (newApplaud: NewApplaudT) => {
  try {
    const uri = `${java_backend_uri}/api/v1/applauds`;
    await axios.post(uri, newApplaud);
  } catch (error) {
    console.error('An error occured while sending a new applaud --->', error);
  }
};

const getAllMembers = async () => {
  try {
    const uri = `${java_backend_uri}/api/v1/members`;
    const res = await axios.get(uri);
    return res.data;
  } catch (error) {
    console.error('An error occurred while fetching members -------->', error);
    return null;
  }
};

const setApplaudRead = async (applaudId: string) => {
  try {
    const uri = `${java_backend_uri}/api/v1/applauds/unread/${applaudId}`;
    await axios.put(uri, {
      read: true,
    });
  } catch (error) {
    console.error(
      'An error occurred while setting Applaud to read --->',
      error
    );
    return null;
  }
};

const setApplaudPublished = async (applaudId: string) => {
  try {
    const uri = `${java_backend_uri}/api/v1/applauds/published/${applaudId}`;
    await axios.put(uri, {
      published: true,
    });
  } catch (error) {
    console.error(
      'An error occured while setting Applaud to published --->',
      error
    );
    return null;
  }
};

const getPublishedApplaudsByMemberEmail = async (memberEmail: string) => {
  try {
    const uri = `${java_backend_uri}/api/v1/applauds/published/${memberEmail}`;
    const getPublishedApplaudsByMemberId = await axios.get(uri);
    return getPublishedApplaudsByMemberId.data;
  } catch (error) {
    console.error('An error occurred while fetching Applauds by Member Email -------->', error);
    return null;
  }
}

const getNumberOfUnreadApplaudsByMemberEmail = async (memberEmail: string) => {
  try {
    const uri = `${java_backend_uri}/api/v1/applauds/unread/${memberEmail}`;
    const res = await axios.get(uri);
    return res.data;
  } catch (error) {
    console.error('An error occurred while fetching Applauds by Member Email -------->', error);
    return null;
  }
}

export {
  getAllApplauds,
  getAllMembers,
  addNewMember,
  sendNewApplaud,
  setApplaudRead,
  setApplaudPublished,
  getPublishedApplaudsByMemberEmail,
  getNumberOfUnreadApplaudsByMemberEmail
};
