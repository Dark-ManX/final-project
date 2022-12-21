import axios from 'axios';

export const fetchUser = async (url, token) => {
  try {
    if (!token) {
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
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchNewAvatar = async (url, img, token) => {
  try {
    const { data } = await axios({
      method: 'patch',
      url: `${url}/avatars`,
      data: img,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'multipart/form-data',
      },
    });
    console.log(data.avatarURL);
    return data.avatarURL;
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchLogOut = async (url, token) => {
  await axios;
};
