import { useEffect } from 'react';
import { UserData } from 'components/User/UserData/UserData';
import { Logout } from 'components/User/Logout/Logout';
import { PetsData } from 'components/User/PetsData/PetsData';
import { response } from 'api';
import { MainContainer } from 'components/commonStyles/Container.styled';
import {
  Container,
  ContainerUser,
  Title,
  ContainerInfo,
  AboutUser,
} from './UserPage.styled';
import { useSelector } from 'react-redux';

const UserPage = () => {

  // const token = useSelector(state => state.auth.token.token)

  // const {getUser} = response;

  // useEffect(() => {
  
  // }, [])

  return (
    <MainContainer>

      <ContainerInfo>
        <AboutUser>
          <Title>My information:</Title>
          <Container>
            <ContainerUser>
              <UserData />
              <Logout />
            </ContainerUser>
          </Container>
        </AboutUser>
        <PetsData />
      </ContainerInfo>
      
    </MainContainer>
  );
};

export default UserPage;
