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

export const NoticeCategoryItem = ({ notice, onClick }) => {
  const [showModal, setShowModal] = useState(false);

  const userId = useSelector(state => state.auth.id);

  const { addToFavorite, removeFromFavorite } = response;

  const token = useSelector(state => state.auth.token);
  // const notices = useSelector(state => state.notices.items)

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

  if (notice.photo) {
    // photo= notice.photo;
    photo = `https://team-api-blended2.herokuapp.com/${notice.photo}`;
  } else {
    photo =
      'https://t4.ftcdn.net/jpg/03/08/68/19/360_F_308681935_VSuCNvhuif2A8JknPiocgGR2Ag7D1ZqN.jpg';
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

  // const handleAddFavoriteBtnClick = id => {
  // id = notice._id;

  // if (!token) {
  //   alert('please login');
  //   return;
  // }
  // console.log('token', token)
  // console.log('add to favorite: ', id);
  // addToFavorite(id, token);
  // };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  console.log(notice);

  return (
    <NoticeCategoryItemStyled>
      <CardImageContainer>
        <Photo src={photo} alt={notice.comments} />
        <Category>{category}</Category>
        <AddToFavoriteBtn
          onClick={handleBtnClick}
          className={notice.favorite?.includes(userId) && 'remove'}
        >
          {!notice.favorite?.includes(userId) ? (
            <AddIcon width="24" height="22" />
          ) : (
            <RemoveIcon width="19.5" height="21" />
          )}
        </AddToFavoriteBtn>
        {/* // : (<RemoveFromFavoriteBtn onClick={handleBtnClick}>
                  //         <RemoveIcon width="19.5" height="21" />
                  //     </RemoveFromFavoriteBtn>) */}
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
