import axios from "axios";

axios.defaults.baseURL = 'https://team-api-blended2.herokuapp.com';

export const fetchNotices = async (param) => {
    const {data} = await axios.get(`/notices/${param}`);
    const { notices } = data.data;
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