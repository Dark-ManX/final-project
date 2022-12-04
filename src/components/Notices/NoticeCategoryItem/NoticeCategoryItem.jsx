import { response } from 'api';
import {ROUTES} from '../../../routes/routes'
import Modal from 'components/Modal/Modal';
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

  const { BASE_URL } = ROUTES;
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
    id = notice._id;

    if (noticesFavr) {
      await removeFromFavorite(id, token);
      alert('Notice remove from favorite');
      onClick();
      return;
    } else if (!token) {
      alert('please login');
      return;
    }

    await addToFavorite(id, token);
    alert('Notice add to favorite');
    onClick();
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  console.log(notice);
  const { photo, comments, favorite, title, breed, place, age, owner } = notice;
  const idOwner = owner._id;

  return (
    <NoticeCategoryItemStyled>
      <CardImageContainer>
        <Photo src={photo ? `${BASE_URL}${photo}` : defaultPet} alt={comments} />

        <Category>{category}</Category>

        {loggedIn && idOwner && (
          <AddToFavoriteBtn
            onClick={handleBtnClick}
            className={favorite?.includes(userId) && 'remove'}
          >
            {!notice.favorite?.includes(userId) ? (
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
            <CardDetailInfo>{place}</CardDetailInfo>
            <CardDetailInfo>{age}</CardDetailInfo>
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
          />
        </Modal>
      )}
    </NoticeCategoryItemStyled>
  );
};

export default NoticeCategoryItem;
