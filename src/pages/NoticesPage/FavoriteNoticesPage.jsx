import { useState } from 'react';
import { useGetFavoriteNoticesQuery } from 'redux/notices/noticesApi';
import { NoticesCategoryList } from 'components/NoticesCategoryList/NoticesCategoryList';

const FavoriteNotices = () => {
    // eslint-disable-next-line no-unused-vars
    const [page, setPage] = useState(1);
    const [error, setError] = useState('');
    const { data: notices = [] } = useGetFavoriteNoticesQuery();
    
    console.log(notices);

    return (
        <>
            {error && <p>{error.message}</p>}

            {/* <NoticesCategoryList notices={favoriteNotices} /> */}
        </>
    );
};

export default FavoriteNotices;