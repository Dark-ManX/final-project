import axios from "axios";

axios.defaults.baseURL = 'https://team-api-blended2.herokuapp.com';

export const fetchSellNotices = async () => {
    const res = await axios.get('/notices/sell');

    return res.data.data.notices;
};

export const fetchForFreeNotices = async () => {
    const res = await axios.get('/notices/for-free');

    return res.data.data.notices;
};

export const fetchLostFoundNotices = async () => {
    const res = await axios.get('/notices/lost-found');

    return res.data.data.notices;
};