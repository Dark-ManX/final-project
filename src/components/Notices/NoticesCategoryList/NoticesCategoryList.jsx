import { NoticeCategoryItem } from 'components/Notices/NoticeCategoryItem/NoticeCategoryItem';
import { useOutletContext } from 'react-router-dom';
import { Gallery } from './NoticesCategoryList.styled';

const NoticesCategoryList = () => {
  const { notices, handleFavoriteClick } = useOutletContext();

  return (
    <>
      {notices !== [] ? (
        <Gallery>
          {notices.map(notice => (
            <NoticeCategoryItem
              key={notice._id}
              notice={notice}
              onClick={handleFavoriteClick}
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
