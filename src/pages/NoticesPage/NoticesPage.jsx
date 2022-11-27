import { response } from "api";
import Loading from "components/Common/Loading/Loading";
import NoticesCategoriesNav from "components/Notices/NoticesCategoryNav/NoticesCategoryNav";
import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// import NoticesCategoryList from "components/Notices/NoticesCategoryList/NoticesCategoryList";
import { SearchForm } from "components/SearchForm/SearchForm";
import { AuthLink, AuthLinkContainer, Category, Container, Nav, Title } from "./NoticesPage.styled";
// import SearchForm from "components/Notices/SearchForm/SearchForm";
import Modal from '../../components/Modal/Modal';
import { ReactComponent as AddIcon } from '../../icons/addPet.svg';
import {
    //   NavSection,
    AddPet,
    AddPetBlock,
    Icon, LinkAddPet
} from './ButtonAddNotice.styled';

const NoticesPage = () => {
const [showModal, setShowModal] = useState(false);
    const [query, setQuery] = useState(null);
    const [ownQuery, setOwnQuery] = useState(null);
    const [search, setSearch] = useState(null)
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');
    const [notices, setNotices] = useState([]);

    // const navigate = useNavigate();

    const { getNotices, getOwn, findNotices } = response;

    const token = useSelector((state) => state.auth.token);
 
    const fetchNotices = async (req, key) => {
        try {
            const res = await getNotices(req, key);
            
            setNotices(res);
            return;
        
        } catch (err) {
            console.log(err.message);
        }
    }

    const fetchSearch = async (req) => {
        try {
            const res = await findNotices(req);
            
            setNotices(res);
         
        } catch (err) {
            console.log(err.message);
        }
    }
        const handleSubmit = formInput => {
            setOwnQuery(null);
            setQuery(null);
            setSearch(formInput);
            setCount(count + 1);
        }
    console.log(input)


    const handleClick = async (e) => {
        try {
            const { nodeName, pathname, parentNode } = e.target;

            if (nodeName === 'A' && parentNode.className.includes('nav-block')) {
                setOwnQuery(null);
                setCount(count + 1);

                setQuery(pathname.split('/').at(-1));
                console.log(query);

                return;
            } else if (nodeName === 'A' && parentNode.className.includes('own-block')) {
                setQuery(null);
                setOwnQuery(null);
                setCount(count + 1);

                const path = (pathname.split('/').at(-1));
                setOwnQuery(path);

                return;
            }
        } catch (err) {
            console.log(err.message);
        }

    }

    console.log('input :>> ', input);
    const toggleModal = evt => {
        setShowModal(!showModal);
    }

    console.log(notices);

    useEffect(() => {

        if (!count || query) {
            
            const result = fetchNotices(query);
            console.log(result);
        } else if (ownQuery) {
            
            fetchNotices(ownQuery, token);
        } else if (count && search) {

            fetchSearch(search);
        };


        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
     }, [count]);

    return (

        <Container>
            <Title>Find your favorite pet</Title>

            <SearchForm onSubmit={handleSubmit}/>
            <Nav>
             
            <Category>
                <NoticesCategoriesNav />

                {token &&
                    <AuthLinkContainer className="own-block">
                        <AuthLink to="favorite">Favorite ads</AuthLink>
                        <AuthLink to="owner">My ads</AuthLink>
                    </AuthLinkContainer>
                }
            </Category>

           <AddPetBlock>
          <AddPet>Add pet</AddPet>
          <LinkAddPet onClick={toggleModal}>
            <Icon>
              <AddIcon width="100%" height="100%" />
            </Icon>
          </LinkAddPet>
        </AddPetBlock>
            </Nav>
             {showModal && (
        <Modal onClose={toggleModal}>{/* <FormAddNotice /> */}</Modal>
      )}
            <Suspense fallback={<Loading/>}>
                <Outlet context={notices} />
            </Suspense>

        </Container>
    );
};

export default NoticesPage;
