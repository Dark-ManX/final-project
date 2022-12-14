import { response } from 'api';
import Modal from 'components/Modal/Modal';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ModalNotice } from 'components/Notices/ModalNotice/ModalNotice';
import { ReactComponent as AddIcon } from 'icons/add.svg';
import { ReactComponent as RemoveIcon } from 'icons/remove.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import defaultPet from 'img/defaultPet.jpg';
import {
  AddToFavoriteBtn,
  Button,
  CardDetailInfo,
  CardDetailsContainer,
  CardImageContainer,
  CardInfoContainer,
  Category,
  NoticeCategoryItemStyled,
  Photo,
  Title,
} from './NoticeCategoryItem.styled';

let category = '';

const NoticeCategoryItem = ({ notice, onClick, loggedIn }) => {
  const [showModal, setShowModal] = useState(false);

  const userId = useSelector(state => state.auth.id);
  const token = useSelector(state => state.auth.token);

  const date = Date.now();
  console.log(date);

  const { addToFavorite, removeFromFavorite } = response;

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
  }

  const noticesFavr = notice.favorite?.includes(userId);

  const handleBtnClick = async id => {
    try {
      id = notice._id;

      if (noticesFavr && loggedIn) {
        await removeFromFavorite(id, token);
        Notify.success('Notice removed from favorite');
        onClick();
        return;
      } else if (!loggedIn) {
        Notify.warning('Please login');
        return;
      }

      await addToFavorite(id, token);
      Notify.success('Notice added to favorite');
      onClick();
    } catch (err) {
      Notify.failure(err.message);
    }
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const { photo, comments, title, breed, location, birth, owner } = notice;
  const idOwner = owner._id;

  return (
    <NoticeCategoryItemStyled>
      <CardImageContainer>
        <Photo src={photo ? photo : defaultPet} alt={comments} />

        <Category>{category}</Category>

        {userId !== idOwner && (
          <AddToFavoriteBtn
            onClick={handleBtnClick}
            className={noticesFavr && loggedIn && 'remove'}
          >
            {!noticesFavr || !loggedIn ? (
              <AddIcon width="24" height="22" />
            ) : (
              <RemoveIcon width="19.5" height="21" />
            )}
          </AddToFavoriteBtn>
        )}
      </CardImageContainer>

      <CardInfoContainer>
        <Title>{title}</Title>

        <CardDetailsContainer>
          <li>
            <CardDetailInfo>Breed:</CardDetailInfo>
            <CardDetailInfo>Place:</CardDetailInfo>
            <CardDetailInfo>Age:</CardDetailInfo>
          </li>

          <li>
            <CardDetailInfo>{breed}</CardDetailInfo>
            <CardDetailInfo>{location}</CardDetailInfo>
            <CardDetailInfo>{birth}</CardDetailInfo>
          </li>
        </CardDetailsContainer>
      </CardInfoContainer>

      <Button type="button" onClick={handleOpenModal}>
        Learn more
      </Button>

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <ModalNotice
            notice={notice}
            onClose={handleCloseModal}
            handleBtnClick={handleBtnClick}
            onClick={onClick}
          />
        </Modal>
      )}
    </NoticeCategoryItemStyled>
  );
};

export default NoticeCategoryItem;
