import NoticeCategoryItem from 'components/Notices/NoticeCategoryItem/NoticeCategoryItem';
import { useOutletContext } from 'react-router-dom';
import { Gallery, Text } from './NoticesCategoryList.styled';

const NoticesCategoryList = () => {
  const { notices, handleFavoriteClick, isActual } = useOutletContext();

  return (
    <>
      {notices.length !== 0 ? (
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
        <Text>There's no information yet</Text>
      )}
    </>
  );
};

export default NoticesCategoryList;
