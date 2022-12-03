import axios from 'axios';

export const fetchNewsSearch = async (url, query) => {
  if (!query) {
    const { data } = await axios.get(`${url}/news`);
    const { news } = data.data;
    return news;
  }
  const { data } = await axios.get(`${url}/news/search/${query}`);
  const { news } = data.data;
  return news;
};
