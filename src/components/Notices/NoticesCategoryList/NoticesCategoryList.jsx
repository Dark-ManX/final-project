import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { NoticeCategoryItem } from "components/Notices/NoticeCategoryItem/NoticeCategoryItem";
import { response } from "api";
import { Gallery } from "./NoticesCategoryList.styled";
import { useSelector } from "react-redux";

const NoticesCategoryList = () => {

    const {notices, handleFavoriteClick} = useOutletContext();

    console.log(notices);

    // const token = useSelector(state => state.auth.token);

    // const { getNotices } = response;

    // const fetchFavorite = async (token) => {
    //     try {
    //         const res = await getNotices('favorite', token);
    //         setFavorite(res);
        
    //     } catch (err) {
    //         console.log(err.message);
    //     }
    // }

    useEffect(() => {
  
    }, [])

    return (
        <>
            {notices != []
                ? (<Gallery>
                        {notices.map(notice => <NoticeCategoryItem key={notice._id} notice={notice} onClick={handleFavoriteClick}/>)}
                    </Gallery >)
                : <p>Інформації не знайдено</p>
            }
        </>
    )
};

export default NoticesCategoryList;