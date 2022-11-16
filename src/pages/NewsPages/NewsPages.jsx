import { useState, useEffect } from 'react'
import {useSearchParams} from "react-router-dom";
import EllipsisText from "react-ellipsis-text";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { fetchNewsSearch } from 'api/newsApi';
import { MainContainer } from 'components/commonStyles/Container.styled';
import {
  NewsPageTitle,
  NewsSet, NewsItem,
  NewsItemTitle, NewsItemContent,
  NewsItemLink, NewsItemDate,
  NewsItemRectangle, NewsItemInfo
} from './NewsPages.styled'


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
                    const data = await fetchNewsSearch();
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
      <MainContainer>
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
        </MainContainer>
    </>
  )

};

export default NewsPages;