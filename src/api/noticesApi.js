import axios from 'axios';

export const fetchNotices = async (url, param) => {
  const { data } = await axios.get(`${url}/notices/${param}`);
  const { notices } = data.data;
  console.log(notices);
  return notices;
};

// export const fetchSellNotices = async () => {
//     const {data} = await axios.get('/notices/sell');
//     const { notices } = data.data;
//     return data.data.notices;
// };

// export const fetchForFreeNotices = async () => {
//     const {data} = await axios.get('/notices/for-free');
//     const {notices}
//     return data.data.notices;
// };

// export const fetchLostFoundNotices = async () => {
//     const {data} = await axios.get('/notices/lost-found');

//     return data.data.notices;
// };
