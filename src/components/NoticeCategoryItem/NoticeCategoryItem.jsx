import { useState } from 'react';
import { useSelector } from "react-redux";
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
import { ReactComponent as AddIcon } from "icons/add.svg";
import { ReactComponent as RemoveIcon } from "icons/remove.svg";
import Modal from "components/Modal/Modal";
import { ModalNotice } from 'components/ModalNotice/ModalNotice';
import { useAddFavoriteNoticesMutation, useDeleteFavoriteNoticesMutation } from "redux/notices/noticesApi";

let category = '';
let photo;

export const NoticeCategoryItem = ({ notice }) => {
    const [showModal, setShowModal] = useState(false);
    const notices = useSelector(state => state.notices.items);
    const userID = '6374ac4a84c43b1851b51dda';
    const [addToFavoriteNotices] = useAddFavoriteNoticesMutation();
    const [removeFromFavoriteNotices] = useDeleteFavoriteNoticesMutation();
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzRhYzRhODRjNDNiMTg1MWI1MWRkYSIsImlhdCI6MTY2ODU5MDY3NywiZXhwIjoxNjY4NjI2Njc3fQ.l9nv-VhZ582KYX7GKbo2X22zFh30STKiqxdMcJrD49M';

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
        default:
            return;
    };

    if (notice.photo) {
        photo = `https://team-api-blended2.herokuapp.com/${notice.photo}`;
    } else {
        photo = 'https://t4.ftcdn.net/jpg/03/08/68/19/360_F_308681935_VSuCNvhuif2A8JknPiocgGR2Ag7D1ZqN.jpg';
    };

    const handleRemoveFavoriteBtnClick = (id) => {
        id = notice._id;
        const existingNotice = notices.data.pets.find(notice => notice._id === id);

        if (existingNotice) {
            console.log('remove from favorite: ', id);
            removeFromFavoriteNotices({ id });
        };
    };

    const handleAddFavoriteBtnClick = (id) => {
        id = notice._id;

        if (!token) {
            alert('please login');
            return;
        };

        console.log('add to favorite: ', id);
        addToFavoriteNotices({ id });
    };

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <NoticeCategoryItemStyled>
            <CardImageContainer>
                <Photo src={photo} alt={notice.comments} />
                <Category>{category}</Category>
                {!notice.favorite.includes(userID) && <AddToFavoriteBtn onClick={handleAddFavoriteBtnClick}>
                    <AddIcon width="24" height="22" />
                </AddToFavoriteBtn>
                }
                {notice.favorite.includes(userID) && <RemoveFromFavoriteBtn onClick={handleRemoveFavoriteBtnClick}>
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
            <Button type="button" onClick={handleOpenModal}>Learn more</Button>
            {showModal && <Modal onClose={handleCloseModal}>
                <ModalNotice notice={notice} onClose={handleCloseModal} />
            </Modal>}
        </NoticeCategoryItemStyled>
    ); 
};