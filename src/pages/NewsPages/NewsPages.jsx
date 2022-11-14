import axios from "axios";
import { useState, useEffect } from 'react'
// import {useSearchParams} from "react-router-dom";
import EllipsisText from "react-ellipsis-text";
// import { toast } from "react-toastify";


import {
  NewsPageTitle,
  NewsSet, NewsItem,
  NewsItemTitle, NewsItemContent,
  NewsItemLink, NewsItemDate,
  NewsItemRectangle, NewsItemInfo
} from './NewsPages.styled'


axios.defaults.baseURL = 'https://team-api-blended2.herokuapp.com';

const getNews = async() => {
  const {data} = await axios.get(`/news`);
  const { news } = data.data;
  return news;
};

// const fetchNewsSearch = async(query) => {
//     console.log(query);
//     const {data} = await axios.get(`/news/search/?query=${query}`);
//     const { news } = data.data;
//     console.log(news)
//     return news;
// };

const useFetchNews = () => {
    const [trendingNews, setTrendingNews] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getData = async () => {
            try {
                const data = await getNews();
                setTrendingNews(data);
            }
            catch (error) {
                setError(error.message)
                console.error(error.message);
            } finally {
                setIsLoading(false)
            }
        };
        getData();
    }, [])
  
    return {trendingNews, error, isLoading} ;
};


const NewsPages = () => {
  const { trendingNews, error, isLoading } = useFetchNews();
 
  
  return (
    <>
      <NewsPageTitle>News</NewsPageTitle>
      {/* <SearchForm/> */}
      {isLoading && <h3>Чекайте, ще 2-3 тижні</h3>}
      {error && <h3>Упс! Щось пішло не так</h3>}
      <NewsSet>
        {trendingNews.length !== 0 && trendingNews.map(({_id, title, url, description, date }) =>
        (<NewsItem key={_id}>
          <NewsItemRectangle/>
          <NewsItemTitle>
            <EllipsisText text={title} length={42} />
          </NewsItemTitle>
          <NewsItemContent>
            <EllipsisText text={description} length={231} />
          </NewsItemContent>
          <NewsItemInfo>
            <NewsItemDate>{date}</NewsItemDate>
            <NewsItemLink href={url} target='_blank'>Read more</NewsItemLink>
          </NewsItemInfo>
        </NewsItem>)
        )}
      </NewsSet>
    </>
  )

};

export default NewsPages;