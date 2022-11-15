import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import { useSelector } from 'react-redux';
import { Link, Nav, Container } from "./NoticesPage.styled";

const NoticesPage = () => {
    // const { token } = useSelector((state) => state.user);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzM0OGUyM2RhMjk5YmRlY2I2NTFlNCIsImlhdCI6MTY2ODQ5OTcwNSwiZXhwIjoxNjY4NTM1NzA1fQ.W9gK98YZ9OzenWQpIP_e6irUwwyHiAI90L2xk4_Ebmg';
    
    return ( 
        <Container>
            <Nav>
                <Link to="sell">Sell</Link>
                <Link to="for-free">In good hands</Link>
                <Link to="lost-found">Lost/found</Link>

                {token &&
                    <>
                        <Link to="favorite">Favorite ads</Link>
                        <Link to="own">My ads</Link>
                    </>
                }
            </Nav>
            
            <Suspense fallback='Loading...'>
                <Outlet />
            </Suspense>
        </Container>
    );
};

export default NoticesPage;