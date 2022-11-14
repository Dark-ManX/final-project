import AuthNav from 'components/AuthUserNav/AuthNav';
import UserNav from 'components/AuthUserNav/UserNav';
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
// import { useSelector } from 'react-redux';
import { AuthUserContainer, Button, MobileMenu, StyledHeader } from './Header.styled';


const Header = () => {

  // const user = useSelector(state => state.isLoggedIn)
  const [shown, setShown] = useState(false);

  const toggleUser = () => {
    setShown(!shown);
  };

  return (
    <>
      <StyledHeader>
        {/* <ModalContainer> */}
        <Logo />
        
        <MobileMenu>
          <Nav />
        
          <AuthUserContainer>
            {shown
              ? <AuthNav />
              : <UserNav />
            }
          </AuthUserContainer>
        </MobileMenu>

          
          <Button onClick={toggleUser}>
            <TiThMenu size={36} />
          </Button>
        {/* </ModalContainer> */}
          
          {/* <BlockAcc className={`headerMenu ${user ? 'shown' : ''}`}> */}

            {/* Можливо варто зробити одним компонентом без обгортки AuthNavBlock */}
            {/* <AuthNavBlock> */}
              {/* <AuthNav user={user} /> */}
            {/* </AuthNavBlock> */}
            {/* ------------------ */}

            {/* Create new component UserNav */}
            {/* <Navigat>
              <Navigation />
            </Navigat> */}
        
      
            {/* ----------- */}

          {/* </BlockAcc> */}
      </StyledHeader>
      
    </>
  );

};

export default Header;
