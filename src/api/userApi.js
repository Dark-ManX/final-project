import axios from 'axios';

export const fetchUser = async (url, token) => {
  const { data } = await axios({
    method: 'get',
    url: `${url}/user`,
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'multipart/form-data',
    },
  });
  console.log(data);
  const { user } = data.data;
  console.log(user);
  return user;
};
