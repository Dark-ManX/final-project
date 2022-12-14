import axios from 'axios';

export const fetchUser = async (url, token) => {
  if (token === null) {
    return;
  }
  const res = await axios({
    method: 'get',
    url: `${url}/user`,
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'multipart/form-data',
    },
  });

  const { data } = res;
  const { user } = data.data;
  return user;
};
