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

export const fetchNewAvatar = async (url, img, token) => {
  await axios({
    method: 'patch',
    url: `${url}/avatars`,
    data: img,
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'multipart/form-data',
    },
  });
};

export const fetchLogOut = async (url, token) => {
  await axios;
};
