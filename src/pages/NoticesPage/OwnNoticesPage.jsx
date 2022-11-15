import { useState } from 'react';
import { NoticesCategoryList } from 'components/NoticesCategoryList/NoticesCategoryList';

const OwnNotices = () => {
    // eslint-disable-next-line no-unused-vars
    const [page, setPage] = useState(1);
    const [notices, setNotices] = useState([]);
    const [error, setError] = useState('');
    
    return (
        <>
            {error && <p>{error.message}</p>}

            <NoticesCategoryList notices={notices} />
        </>
    );
};

export default OwnNotices;