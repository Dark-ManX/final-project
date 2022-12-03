import { response } from 'api';
import Modal from 'components/Modal/Modal';
import { ModalNotice } from 'components/Notices/ModalNotice/ModalNotice';
import { ReactComponent as AddIcon } from 'icons/add.svg';
import { ReactComponent as RemoveIcon } from 'icons/remove.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
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
let photo;

const NoticeCategoryItem = ({ notice, onClick, loggedIn }) => {
  const [showModal, setShowModal] = useState(false);

  const userId = useSelector(state => state.auth.id);
  const token = useSelector(state => state.auth.token);

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

  console.log('notice', notice);

  const handleBtnClick = async id => {
    console.log(id);
    id = notice._id;

    if (notice.favorite?.includes(userId)) {
      console.log('remove from favorite: ', id);
      await removeFromFavorite(id, token);

      onClick();
      return;
    } else if (!token) {
      alert('please login');
      return;
    }

    console.log('add to favorite: ', id);
    await addToFavorite(id, token);
    onClick();
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  console.log(notice);
  const { photo, comments, favorite, title, breed, place, age } = notice;

  return (
    <NoticeCategoryItemStyled>
      <CardImageContainer>
        <Photo src={photo} alt={comments} />

        <Category>{category}</Category>

        {loggedIn && (
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
            onAddFavoriteBtnClick={handleBtnClick}
            onRemoveFavoriteBtnClick={handleBtnClick}
          />
        </Modal>
      )}
    </NoticeCategoryItemStyled>
  );
};

export default NoticeCategoryItem;
