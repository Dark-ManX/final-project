import NoticeCategoryItem from 'components/Notices/NoticeCategoryItem/NoticeCategoryItem';
import { useOutletContext } from 'react-router-dom';
import { Gallery } from './NoticesCategoryList.styled';

const NoticesCategoryList = () => {
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
        <p>There's no information yet</p>
      )}
    </>
  );
};

export default NoticesCategoryList;
