import axios from "axios";


axios.defaults.baseURL = 'https://team-api-blended2.herokuapp.com';

export const getNews = async() => {
  const {data} = await axios.get(`/news`);
  const { news } = data.data;
  return news;
};

export const fetchNewsSearch = async(query) => {
    const {data} = await axios.get(`/news/search/${query}`);
    const { news } = data.data;
    return news;
};