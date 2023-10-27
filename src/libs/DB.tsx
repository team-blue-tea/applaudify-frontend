import axios from "axios";
const java_backend_uri = 'http://127.0.0.1:8080';

const getAllApplauds = async () => {
  try {
    const uri = `${java_backend_uri}/api/v1/applauds`;
    const res = await axios.get(uri);
    return res.data;

  } catch (error) {
    console.error('An error occurred while fetching applauds -------->', error);
    return null;
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
}

export { getAllApplauds, getAllMembers };

// export async function getAllApplauds() {
//   const response = await fetch(`${BACKEND_URL}/api/v1/applauds`);
//   const applauds = await response.json();
//   return applauds;
// }

// export async function getAllUsers() {
//   const response = await fetch(`${BACKEND_URL}/api/v1/members`);
//   const members = await response.json();
//   return members;
// }




// export async function addUserToDb() {
//     try {
//         const
//     }
// }
