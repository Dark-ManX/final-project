import axios from 'axios';

export const fetchFriends = async url => {
  const { data } = await axios.get(`${url}/friends`);
  const { friends } = data.data;
  return friends;
};
