import { useState, useEffect } from 'react';
import { fetchNotices } from 'api/noticesApi';
import { NoticesCategoryList } from 'components/NoticesCategoryList/NoticesCategoryList';

const ForFreeNotices = () => {
    // eslint-disable-next-line no-unused-vars
    const [page, setPage] = useState(1);
    const [notices, setNotices] = useState([]);
    const [error, setError] = useState('');

    useEffect((page) => {
        fetchNotices('for-free').then(data => {
            setNotices(prevState => [...prevState, ...data]);
        }).catch(error => setError(error));
    }, [page]);
    
    return (
        <>
            {error && <p>{error.message}</p>}

            <NoticesCategoryList notices={notices} />
        </>
    );
};

export default ForFreeNotices;