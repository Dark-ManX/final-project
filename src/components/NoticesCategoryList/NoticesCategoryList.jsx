import { NoticeCategoryItem } from "components/NoticeCategoryItem/NoticeCategoryItem";
import { Gallery } from "./NoticesCategoryList.styled";

export const NoticesCategoryList = ({ notices }) => {
    return (
        <Gallery>
            {notices.map(notice =>
             <NoticeCategoryItem key={notice._id} notice={notice} />
         )}
        </Gallery>
    );
};