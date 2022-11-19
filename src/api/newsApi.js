import axios from 'axios';

// axios.defaults.baseURL = 'https://team-api-blended2.herokuapp.com';

// export const fetchNews = async() => {
//   const {data} = await axios.get(`/news`);
//   const { news } = data.data;
//   return news;
// };

export const fetchNewsSearch = async (url, query) => {
  if (!query) {
    const { data } = await axios.get(`${url}/news`);
    const { news } = data.data;
    return news;
  }
  const { data } = await axios.get(`/news/search/${query}`);
  const { news } = data.data;
  return news;
};
