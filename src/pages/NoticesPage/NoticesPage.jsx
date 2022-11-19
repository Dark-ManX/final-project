import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "components/Common/Loading/Loading";
import { Link, AuthLink, Title, Nav, Container, LinkContainer, AuthLinkContainer } from "./NoticesPage.styled";

const NoticesPage = () => {
    // const { token } = useSelector((state) => state.user);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzM0OGUyM2RhMjk5YmRlY2I2NTFlNCIsImlhdCI6MTY2ODQ5OTcwNSwiZXhwIjoxNjY4NTM1NzA1fQ.W9gK98YZ9OzenWQpIP_e6irUwwyHiAI90L2xk4_Ebmg';
    
    return ( 

        <Container>
            <Title>Find your favorite pet</Title>
            <Nav>
                <LinkContainer>
                    <Link to="lost-found">Lost/found</Link>
                    <Link to="for-free">In good hands</Link>
                    <Link to="sell">Sell</Link>
                </LinkContainer>    

                {token &&
                    <AuthLinkContainer>
                        <AuthLink to="favorite">Favorite ads</AuthLink>
                        <AuthLink to="own">My ads</AuthLink>
                    </AuthLinkContainer>
                }
            </Nav>
            
            <Suspense fallback={<Loading/>}>
                <Outlet />
            </Suspense>
        </Container>
    );
};

export default NoticesPage;