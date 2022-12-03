import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { NoticeCategoryItem } from 'components/Notices/NoticeCategoryItem/NoticeCategoryItem';
import { response } from 'api';
import { Gallery } from './NoticesCategoryList.styled';
import { useSelector } from 'react-redux';

const NoticesCategoryList = () => {
  const { notices, handleFavoriteClick } = useOutletContext();

  const { notices, handleFavoriteClick, isActual } = useOutletContext();

  return (
    <>
      {notices !== [] ? (

        <Gallery>
          {notices.map(notice => (
            <NoticeCategoryItem
              key={notice._id}
              notice={notice}
              onClick={handleFavoriteClick}
              loggedIn={isActual}
            />
          ))}
        </Gallery>
      ) : (
        <p>Інформації не знайдено</p>
      )}
    </>
  );
};

export default NoticesCategoryList;
