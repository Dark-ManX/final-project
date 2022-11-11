import {
    NoticeCategoryItemStyled,
    CardInfoContainer,
    Title,
    Photo,
    Category,
    AddToFavoriteBtn,
    CardDetailsContainer,
    CardImageContainer,
    CardDetailInfo,
    Button
} from "./NoticeCategoryItem.styled";
import { ReactComponent as AddIcon } from "../icons/add.svg";

export const NoticeCategoryItem = () => {
    return (
        <NoticeCategoryItemStyled>
            <CardImageContainer>
                <Photo src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" alt="dog" />
                <Category>In good hands</Category>
                <AddToFavoriteBtn>
                    <AddIcon width="24" height="22" />
                </AddToFavoriteBtn>
            </CardImageContainer>
            <CardInfoContainer>
                <Title>Сute dog looking for a home</Title>
                <CardDetailsContainer>
                    <li>
                        <CardDetailInfo>Breed:</CardDetailInfo>
                        <CardDetailInfo>Place:</CardDetailInfo>
                        <CardDetailInfo>Age:</CardDetailInfo>
                    </li>
                    <li>
                        <CardDetailInfo>Pomeranian</CardDetailInfo>
                        <CardDetailInfo>Lviv</CardDetailInfo>
                        <CardDetailInfo>One year</CardDetailInfo>
                    </li>
                </CardDetailsContainer>
            </CardInfoContainer>
            <Button type="button">Learn more</Button>
        </NoticeCategoryItemStyled>
    );
};