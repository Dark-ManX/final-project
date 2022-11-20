import axios from 'axios';

export const fetchPetAdd = async (url, param, token) => {
  const data = await axios.post(`${url}/pets/add`, param, {
    headers: { Authorization: `Bearer ${token}` },
  });

  console.log(data);
  return data;
};
