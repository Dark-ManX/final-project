import { useState } from 'react';
import { useGetOwnNoticesQuery } from 'redux/notices/noticesApi';
import NoticesCategoryList from 'components/Notices/NoticesCategoryList/NoticesCategoryList';

const OwnNotices = () => {
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState('');
    const { data: notices } = useGetOwnNoticesQuery();
    let ownNotices = [];
    
    if (notices) {
        ownNotices = notices.data.pets;
    };

    return (
        <>
            {error && <p>{error.message}</p>}

            {notices
                ? <NoticesCategoryList notices={ownNotices} />
                : <p>Nothing added</p>
            }
        </>
    );
};

export default OwnNotices;