import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import Loading from 'components/Common/Loding/Loading';
import Error from 'components/Common/Error/Error';
import { response } from 'api';
import { NoticesCategoryList } from 'components/Notices/NoticesCategoryList/NoticesCategoryList';

const ForFreeNotices = () => {

    const { getNotices } = response; 

    const [isLoading, setIsLoading] = useState(false)

    // const [page, setPage] = useState(1);
    const [notices, setNotices] = useState(null);
    const [error, setError] = useState(null);

    const fetchNotices = async (query) => {
        try {
            setIsLoading(true);
            const res = await getNotices(query);
            setNotices([...res]);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }

        useEffect(() => {
        
            fetchNotices('for-free');
            // setNotices(prevState => [...prevState, ...fetchedNotices]);
    }, []);
    
    return (
        <>
            {isLoading && <Loading />}
            
            {error && <Error/>}

            {notices && <NoticesCategoryList notices={notices} />}
        </>
    );
};

export default ForFreeNotices;