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

        {/* Дублює наступний div варто відредагувати */}
        <BlockAcc>
          {/* ------------- */}
          
          <div className={`headerMenu ${user ? 'shown' : ''}`}>

            {/* Можливо варто зробити одним компонентом без обгортки AuthNavBlock */}
            <AuthNavBlock>
              <AuthNav user={user} />
            </AuthNavBlock>
            {/* ------------------ */}

            {/* Create new component UserNav */}
            <Navigat>
              <Navigation />
            </Navigat>
            {/* ----------- */}

          </div>
        </BlockAcc>
      </StyledHeader>
      
    </>
  );

};

export default Header;
