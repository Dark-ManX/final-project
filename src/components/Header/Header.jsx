import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import { Suspense, useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { RotatingLines } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import {
  AccentSpan,
  Button,
  ModalContainer,
  Paragraph,
  StyledHeader,
  BlockAcc,
  Navigat,
  AuthNavBlock,
} from './Header.styled';

const Header = () => {
  const [user, setUser] = useState(false);

  const toggleUser = () => {
    setUser(!user);
  };

  return (
    <>
      <StyledHeader>
        <ModalContainer>
          <Paragraph>
            pe<AccentSpan>t</AccentSpan>ly
          </Paragraph>
          <Button onClick={toggleUser}>
            <TiThMenu size={36} />
          </Button>
        </ModalContainer>

        <BlockAcc>
          <div className={`headerMenu ${user ? 'shown' : ''}`}>
            <AuthNavBlock>
              <AuthNav user={user} />
            </AuthNavBlock>

            <Navigat>
              <Navigation />
            </Navigat>
          </div>
        </BlockAcc>
      </StyledHeader>

      <Suspense
        fallback={
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
