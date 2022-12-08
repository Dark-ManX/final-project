import AuthNav from 'components/Header/AuthUserNav/AuthNav';
import UserNav from 'components/Header/AuthUserNav/UserNav';
import Logo from 'components/Header/Logo/Logo';
import Nav from 'components/Header/Nav/Nav';
import { useEffect, useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import {
  AuthUserContainer,
  Button,
  MobileMenu,
  StyledHeader,
} from './Header.styled';

const Header = ({ state, load }) => {
  const [shown, setShown] = useState(false);

  const toggleUser = () => {
    setShown(!shown);
  };

  const handleLinkClick = e => {
    const { nodeName } = e.target;

    if (nodeName === 'A') {
      setShown(false);
    }
  };

  console.log(load);

  useEffect(() => {
    document.addEventListener('click', handleLinkClick);

    return () => document.removeEventListener('click', handleLinkClick);
  }, [shown]);

  return (
    <>
      <StyledHeader className={load === true ? 'firstLoad' : 'notFirstLoad'}>
        <Logo />

        <MobileMenu className={shown && 'shown'}>
          <Nav set={shown} />

          <AuthUserContainer>
            {!state ? <AuthNav /> : <UserNav />}
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
