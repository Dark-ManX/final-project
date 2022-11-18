import AuthNav from 'components/AuthUserNav/AuthNav';
import UserNav from 'components/AuthUserNav/UserNav';
import Logo from 'components/Header/Logo/Logo';
import Nav from 'components/Header/Nav/Nav';
import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { AuthUserContainer, Button, MobileMenu, StyledHeader } from './Header.styled';

const Header = () => {

  const user = useSelector(state => state.isLoggedIn)
  const [shown, setShown] = useState(false);

  const toggleUser = () => {
    setShown(!shown);
  };

  return (
    <>
      <StyledHeader>
        
        <Logo />
        
        <MobileMenu className={shown && 'shown'}>
          <Nav set={shown} />
        
          <AuthUserContainer >
            {!user
              ? <AuthNav />
              : <UserNav />
            }
          </AuthUserContainer>
        </MobileMenu>

          
          <Button onClick={toggleUser}>
            <TiThMenu size={36} />
          </Button>
        
      </StyledHeader>
      
    </>
  );

};

export default Header;
