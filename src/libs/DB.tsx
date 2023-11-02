import axios from "axios";
import { NewMemberT } from "@/types/NewMemberT";
import { NewApplaudT } from "@/types/NewApplaudT";

const java_backend_uri = "http://127.0.0.1:8080";

const getAllApplauds = async () => {
  try {
    const uri = `${java_backend_uri}/api/v1/applauds`;
    const res = await axios.get(uri);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("An error occurred while fetching applauds -------->", error);
    return null;
  }
};

// const getProfileApplauds = async () => {
//   try {
//     const uri = `${java_backend_uri}/api/v1/profile-applauds`;
//     const res = await axios.get(uri);
//     return res.data;
//   } catch (error) {
//     console.error('An error occurred while fetching applauds -------->', error);
//     return null;
//   }
// };

const addNewMember = async (newMember: NewMemberT) => {
  try {
    const uri = `${java_backend_uri}/api/v1/members`;
    const addNewUser = await axios.post(uri, newMember);
    return addNewUser.data;
  } catch (error) {
    console.error("An error occurred while adding new member -------->", error);
  }
};

const sendNewApplaud = async (newApplaud: NewApplaudT) => {
  try {
    const uri = `${java_backend_uri}/api/v1/applauds`;
    const sendNewApplaud = await axios.post(uri, newApplaud);
    console.log(sendNewApplaud.data);
  } catch (error) {
    console.error("An error occured while sending a new applaud --->", error);
  }
};

const getAllMembers = async () => {
  try {
    const uri = `${java_backend_uri}/api/v1/members`;
    const res = await axios.get(uri);
    return res.data;
  } catch (error) {
    console.error("An error occurred while fetching members -------->", error);
    return null;
  }
};

const setApplaudRead = async (applaudId: string) => {
  try {
    const uri = `${java_backend_uri}/api/v1/applauds/${applaudId}`;
    const setApplaudRead = await axios.put(uri, {
      read: true,
    });
    console.log("Applaud updated.");
  } catch (error) {
    console.error(
      "An error occurred while setting Applaud to read --->",
      error
    );
    return null;
  }
};

export {
  getAllApplauds,
  getAllMembers,
  addNewMember,
  sendNewApplaud,
  setApplaudRead,
};
