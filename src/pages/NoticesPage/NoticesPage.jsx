import { Suspense } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { response } from "api";
import Loading from "components/Common/Loading/Loading";
import NoticesCategoriesNav from "components/Notices/NoticesCategoryNav/NoticesCategoryNav";
// import NoticesCategoryList from "components/Notices/NoticesCategoryList/NoticesCategoryList";
import { SearchForm } from "components/SearchForm/SearchForm";
import { AuthLink, Title, Nav, Container, AuthLinkContainer } from "./NoticesPage.styled";
// import SearchForm from "components/Notices/SearchForm/SearchForm";

const NoticesPage = () => {

    const [query, setQuery] = useState(null);
    const [input, setInput] = useState('')
    const [notices, setNotices] = useState([]);

    // const navigate = useNavigate();

    const { getNotices } = response;

    // const { token } = useSelector((state) => state.user);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzM0OGUyM2RhMjk5YmRlY2I2NTFlNCIsImlhdCI6MTY2ODQ5OTcwNSwiZXhwIjoxNjY4NTM1NzA1fQ.W9gK98YZ9OzenWQpIP_e6irUwwyHiAI90L2xk4_Ebmg';

    const fetchPet = async () => {
            try {
                const res = await getNotices(query);
                setNotices(res);
            } catch (err) {
                alert(err.message);
            }
        }

        const handelSearchChange = e => {
        setInput(e.currentTarget.value.toLowerCase());
    };

    const handelSubmit = e => {

        console.log(e.target.value);
        e.preventDefault();
        if (input.trim() === '') {
            alert('🦄 Boolshit!');
            return;
        }
        setInput(e.target.value);
        console.log(input)
    };

    const handleClick = async (e) => {

        const { nodeName, pathname, parentNode } = e.target;

        if (nodeName === 'A' && parentNode.className.includes('nav-block')) {

            setQuery(pathname.split('/').at(-1));
            console.log(query);

            // const res = await getNotices(query);
            getNotices(query);

            return;
        }

    }

    useEffect(() => {
        fetchPet(query);

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
     }, [query]);
    
    return ( 

        <Container>
            <Title>Find your favorite pet</Title>

            <SearchForm onSubmit={handelSubmit} handelSearchChange={ handelSearchChange} />
            <Nav>
                {/* <LinkContainer>
                    <Link to="lost-found">Lost/found</Link>
                    <Link to="for-free">In good hands</Link>
                    <Link to="sell">Sell</Link>
                </LinkContainer>     */}

                <NoticesCategoriesNav />

                {token &&
                    <AuthLinkContainer>
                        <AuthLink to="favorite">Favorite ads</AuthLink>
                        <AuthLink to="own">My ads</AuthLink>
                    </AuthLinkContainer>
                }
            </Nav>
            
            <Suspense fallback={<Loading/>}>
                <Outlet context={notices} />
            </Suspense>

        </Container>
    );
};

export default NoticesPage;