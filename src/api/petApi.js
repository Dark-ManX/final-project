import axios from 'axios';

axios.defaults.baseURL = 'https://team-api-server-outlight.onrender.com';

export const fetchPetAdd = async (param, token) => {
  const data = await axios.post(`/pets/add`, param, {
    headers: { Authorization: `Bearer ${token}` },
  });

  console.log(data);
  return data;
};
