import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { NoticeCategoryItem } from "components/Notices/NoticeCategoryItem/NoticeCategoryItem";
import { response } from "api";
import { Gallery } from "./NoticesCategoryList.styled";

const NoticesCategoryList = () => {

    const notices = useOutletContext()
        console.log(notices);

    const getNotices = () => {
        // if (notices === [])
    }

    // const [notices, setNotices] = useState([])

    // const { getNotices } = response;

    return (
        <Gallery>
            {notices.map(notice =>
             <NoticeCategoryItem key={notice._id} notice={notice} />
         )}
        </Gallery>
    );
};

export default NoticesCategoryList;