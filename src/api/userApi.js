import axios from 'axios';

export const fetchUser = async (url, token) => {
  if (token === null) {
    return;
  }
  const { data } = await axios({
    method: 'get',
    url: `${url}/user`,
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'multipart/form-data',
    },
  });

  const { user } = data.data;
  return user;
};
