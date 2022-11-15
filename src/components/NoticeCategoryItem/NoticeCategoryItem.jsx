import { useState } from 'react';
// import { useSelector } from "react-redux";
import {
    NoticeCategoryItemStyled,
    CardInfoContainer,
    Title,
    Photo,
    Category,
    AddToFavoriteBtn,
    RemoveFromFavoriteBtn,
    CardDetailsContainer,
    CardImageContainer,
    CardDetailInfo,
    Button
} from "./NoticeCategoryItem.styled";
import { ReactComponent as AddIcon } from "../icons/add.svg";
import { ReactComponent as RemoveIcon } from "../icons/remove.svg";
import { Modal } from "../Modal/Modal";
import { useAddFavoriteNoticesMutation, useDeleteFavoriteNoticesMutation } from "../../redux/notices/noticesApi";


let category = '';
let photo;

export const NoticeCategoryItem = ({ notice }) => {
    const [showModal, setShowModal] = useState(false);
    const [addToFavorite, setAddToFavorite] = useState(false);
    const [addToFavoriteNotices] = useAddFavoriteNoticesMutation();
    const [removeFromFavoriteNotices] = useDeleteFavoriteNoticesMutation();
    // const { token } = useSelector(state => state.user);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzM0OGUyM2RhMjk5YmRlY2I2NTFlNCIsImlhdCI6MTY2ODQ5OTcwNSwiZXhwIjoxNjY4NTM1NzA1fQ.W9gK98YZ9OzenWQpIP_e6irUwwyHiAI90L2xk4_Ebmg';

    switch (notice.category) {
        case 'sell':
            category = 'Sell';
            break;
        case 'lost-found':
            category = 'Lost/found';
            break;
        case 'in good hands':
            category = 'In good hands';
            break;
        // eslint-disable-next-line no-unused-expressions
        default: '';
    };

    if (notice.photo) {
        photo = `https://team-api-blended2.herokuapp.com/${notice.photo}`;
    } else {
        photo = 'https://t4.ftcdn.net/jpg/03/08/68/19/360_F_308681935_VSuCNvhuif2A8JknPiocgGR2Ag7D1ZqN.jpg';
    };

    const handleAddToFavoriteNotices = (id) => {
        id = notice._id;
        addToFavoriteNotices({ id });
        setAddToFavorite(true);
    };

    const handleRemoveFromFavoriteNotices = (id) => {
        id = notice._id;
        removeFromFavoriteNotices({ id });
        setAddToFavorite(false);
    };

    const handleAddToFavoriteBtn = () => {
        if (!token) {
            alert('please login');
            return;
        };
        console.log('add to favorite: ', notice._id);
        handleAddToFavoriteNotices();
        
    };
    
    const handleRemoveFromFavoriteBtn = () => {
        console.log('remove from favorite: ', notice._id);
        handleRemoveFromFavoriteNotices();
    };

    const handleBtnClick = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <NoticeCategoryItemStyled>
            <CardImageContainer>
                <Photo src={photo} alt={notice.comments} />
                <Category>{category}</Category>
                {!addToFavorite && <AddToFavoriteBtn onClick={handleAddToFavoriteBtn}>
                                        <AddIcon width="24" height="22" />
                                    </AddToFavoriteBtn>
                }
                {addToFavorite && <RemoveFromFavoriteBtn onClick={handleRemoveFromFavoriteBtn}>
                                    <RemoveIcon width="19.5" height="21" />
                                </RemoveFromFavoriteBtn>
                }

            </CardImageContainer>
            <CardInfoContainer>
                <Title>{notice.title}</Title>
                <CardDetailsContainer>
                    <li>
                        <CardDetailInfo>Breed:</CardDetailInfo>
                        <CardDetailInfo>Place:</CardDetailInfo>
                        <CardDetailInfo>Age:</CardDetailInfo>
                    </li>
                    <li>
                        <CardDetailInfo>{notice.breed}</CardDetailInfo>
                        <CardDetailInfo>{notice.place}</CardDetailInfo>
                        <CardDetailInfo>{notice.age}</CardDetailInfo>
                    </li>
                </CardDetailsContainer>
            </CardInfoContainer>
            <Button type="button" onClick={handleBtnClick}>Learn more</Button>
            {showModal && <Modal onClose={handleCloseModal} />}
        </NoticeCategoryItemStyled>
    );
};