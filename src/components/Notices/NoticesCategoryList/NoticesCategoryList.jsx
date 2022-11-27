import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { NoticeCategoryItem } from "components/Notices/NoticeCategoryItem/NoticeCategoryItem";
import { response } from "api";
import { Gallery } from "./NoticesCategoryList.styled";
import { useSelector } from "react-redux";

const NoticesCategoryList = () => {

    const notices = useOutletContext();

    const [favorite, setFavorite] = useState(null);

    const token = useSelector(state => state.auth.token);

    const { getNotices } = response;

    const fetchFavorite = async (token) => {
        const res = await getNotices('favorite', token);
        setFavorite(res);
    }

    useEffect(() => {
        if (favorite !== fetchFavorite(token)) {
            fetchFavorite(token);
        }
    }, [])

    return (
        <Gallery>
            {notices.map(notice => <NoticeCategoryItem key={notice._id} notice={notice} favoriteList={favorite} />
         )}
        </Gallery>
    );
};

export default NoticesCategoryList;