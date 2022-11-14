import { useState, useEffect } from 'react'
import {useSearchParams} from "react-router-dom";
import EllipsisText from "react-ellipsis-text";
// import { toast } from "react-toastify";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { getNews, fetchNewsSearch } from 'api/newsApi';


import {
  NewsPageTitle,
  NewsSet, NewsItem,
  NewsItemTitle, NewsItemContent,
  NewsItemLink, NewsItemDate,
  NewsItemRectangle, NewsItemInfo
} from './NewsPages.styled'



// const useFetchNews = () => {
//     const [trendingNews, setTrendingNews] = useState([]);
//     const [error, setError] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         setIsLoading(true);
//         const getData = async () => {
//             try {
//                 const data = await getNews();
//                 setTrendingNews(data);
//             }
//             catch (error) {
//                 setError(error.message)
//                 console.error(error.message);
//             } finally {
//                 setIsLoading(false)
//             }
//         };
//         getData();
//     }, [])
  
//     return {trendingNews, error, isLoading} ;
// };

//================


const NewsPages = () => {
  
const [, setQueryNews] = useState('');
const [resultQuery, setResultQuery] = useState([])
const [searchParams, setSearchParams] = useSearchParams();
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(false);
     

  useEffect(() => {
    const newsName = searchParams.get('q');
      
    if (!newsName) {
        setIsLoading(true);
            const getData = async () => {
                try {
                    const data = await getNews();
                    setResultQuery(data);
                }
                catch (error) {
                    setError(error.message)
                    console.error(error.message);
                } finally {
                    setIsLoading(false)
                }
            };
            getData();     
        return;
    };

    setIsLoading(true);
    const getData = async () => {
        try {
            const data = await fetchNewsSearch(newsName);
            setResultQuery(data);
        }
        catch (error) {
            setError(error.message);
            console.error(error.message);
            setSearchParams();
        } finally {
            setIsLoading(false)
        }
        };
        getData();
    }, [searchParams, setSearchParams, setResultQuery] );

    const handleSubmit = formInput => {
        setQueryNews(searchParams.get('q'));
        setSearchParams({ q: formInput })
  }
    

  return (
    <>
      <NewsPageTitle>News</NewsPageTitle>
      <SearchForm onSubmit={handleSubmit}/>
      {isLoading && <h3>Чекайте, ще 2-3 тижні</h3>}
      {error && <h3>Упс! Щось пішло не так</h3>}
      <NewsSet>
        {resultQuery.length !== 0 && resultQuery.map(({_id, title, url, description, date }) =>
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