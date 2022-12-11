import { response } from 'api';
import Loading from 'components/Common/Loading/Loading';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoryNav/NoticesCategoryNav';
import { Suspense, useEffect, useState } from 'react';
import { MainContainer } from 'components/commonStyles/Container.styled';
import Modal from 'components/Modal/Modal';
import ModalAddNotice from 'components/Notices/ModalAddNotice/ModalAddNotice';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ReactComponent as AddIcon } from 'icons/addPet.svg';
import { useSelector } from 'react-redux';
import { Outlet, useOutletContext, useParams } from 'react-router-dom';
import {
  AddPet,
  AddPetBlock,
  AuthLink,
  AuthLinkContainer,
  Category,
  Container,
  Icon,
  LinkAddPet,
  Nav,
  StyledErr,
  Title,
} from './NoticesPage.styled';

const NoticesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState(null);
  const [ownQuery, setOwnQuery] = useState(null);
  const [search, setSearch] = useState(null);
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const { path } = useParams();

  const { getNotices, findNotices } = response;

  const { isActual } = useOutletContext();

  const token = useSelector(state => state.auth.token);

  const handleSubmit = formInput => {
    setOwnQuery(null);
    setQuery(null);
    setSearch(formInput);
  };

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };

  const toggleModal = evt => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const pathChecker = path => {
      if (!query && !ownQuery) {
        switch (path) {
          case 'lost-found':
            setQuery('lost-found');
            setOwnQuery(null);
            break;

          case 'for-free':
            setQuery('for-free');
            setOwnQuery(null);
            break;

          case 'sell':
            setQuery('sell');
            setOwnQuery(null);
            break;

          case 'favorite':
            setOwnQuery('favorite');
            setQuery(null);
            break;

          case 'owner':
            setOwnQuery('owner');
            setQuery(null);
            break;

          default:
            return;
        }
      }
    };

    pathChecker(path);
    // console.log(path);

    const handleClick = async e => {
      try {
        const { nodeName, pathname, parentNode } = e.target;

        if (nodeName === 'A' && parentNode.className.includes('nav-block')) {
          setOwnQuery(null);
          setSearch(null);

          setQuery(pathname.split('/').at(-1));

          return;
        } else if (
          nodeName === 'A' &&
          parentNode.className.includes('own-block')
        ) {
          setQuery(null);
          setSearch(null);

          const path = pathname.split('/').at(-1);
          setOwnQuery(path);
          return;
        }
      } catch (err) {
        setError(true);
      }
    };

    const fetchNotices = async (req, ownReq, search, key) => {
      try {
        if (search) {
          const res = await findNotices(search);
          setNotices(res);

          return;
        } else if (ownReq && key) {
          const res = await getNotices(ownReq, key);
          setNotices(res);

          return;
        }
        const res = await getNotices(req);
        setNotices(res);
      } catch (err) {
        console.log(err.message);
        setError(true);
      }
    };

    fetchNotices(query, ownQuery, search, token);

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [findNotices, getNotices, ownQuery, query, search, token, favorite]);

  return (
    <MainContainer>
      <Container>
        <Title>Find your favorite pet</Title>

        <SearchForm onSubmit={handleSubmit} />
        <Nav>
          <Category>
            <NoticesCategoriesNav />

            {isActual && (
              <AuthLinkContainer className="own-block">
                <AuthLink to="favorite">Favorite ads</AuthLink>
                <AuthLink to="owner">My ads</AuthLink>
              </AuthLinkContainer>
            )}
          </Category>

          {isActual && (
            <AddPetBlock>
              <AddPet>Add pet</AddPet>
              <LinkAddPet onClick={toggleModal}>
                <Icon>
                  <AddIcon width="100%" height="100%" />
                </Icon>
              </LinkAddPet>
            </AddPetBlock>
          )}
        </Nav>

        {showModal && (
          <Modal onClose={toggleModal}>
            <ModalAddNotice onClose={toggleModal} />{' '}
          </Modal>
        )}
        {!error ? (
          <Suspense fallback={<Loading />}>
            <Outlet context={{ notices, handleFavoriteClick, isActual }} />
          </Suspense>
        ) : (
          <StyledErr>There is no information</StyledErr>
        )}
      </Container>
    </MainContainer>
  );
};

export default NoticesPage;
