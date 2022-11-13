import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import {
  AccentSpan, AuthNavBlock, BlockAcc, Button,
  ModalContainer, Navigat, Paragraph,
  StyledHeader
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
      
    </>
  );

};

export default Header;
