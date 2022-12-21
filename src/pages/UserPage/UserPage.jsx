import UserData from 'components/User/UserData/UserData';
import { Logout } from 'components/User/Logout/Logout';
import { PetsData } from 'components/User/PetsData/PetsData';
import { MainContainer } from 'components/commonStyles/Container.styled';
import {
  Container,
  ContainerUser,
  Title,
  ContainerInfo,
  AboutUser,
} from './UserPage.styled';
import { useOutletContext } from 'react-router-dom';

const UserPage = () => {
  const { user } = useOutletContext();
  return (
    <MainContainer>
      <ContainerInfo>
        <AboutUser>
          <Title>My information:</Title>
          <Container>
            <ContainerUser>
              <UserData data={user} />
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
