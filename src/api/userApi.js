import axios from 'axios';

export const fetchUser = async (url, token) => {
  const { data } = await axios({
    method: 'get',
    url: `${url}/user`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { user } = data.data;
  return user;
};
