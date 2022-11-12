import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Link, Nav, Container } from "./NoticesPage.styled";

const NoticesPage = () => {
  return ( 
        <Container>
            <Nav>
                <Link to="sell">Sell</Link>
                <Link to="for-free">In good hands</Link>
                <Link to="lost-found">Lost/found</Link>
            </Nav>
            
            <Suspense fallback='Loading...'>
                <Outlet />
            </Suspense>
        </Container>
  );
};

export default NoticesPage;