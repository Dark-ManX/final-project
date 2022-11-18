import { NoticeCategoryItem } from "components/Notices/NoticeCategoryItem/NoticeCategoryItem";
import { Gallery } from "./NoticesCategoryList.styled";

export const NoticesCategoryList = ({ notices }) => {

    console.log(notices)
    return (
        <Gallery>
            {notices.map(notice =>
             <NoticeCategoryItem key={notice._id} notice={notice} />
         )}
        </Gallery>
    );
};