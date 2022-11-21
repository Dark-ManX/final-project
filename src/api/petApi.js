import axios from 'axios';

axios.defaults.baseURL = 'https://team-api-blended2.herokuapp.com';

export const fetchPetAdd = async (param, token) => {
  const data = await axios.post(`/pets/add`, param, {
    headers: { Authorization: `Bearer ${token}` },
  });

  console.log(data);
  return data;
};
