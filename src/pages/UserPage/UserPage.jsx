import { UserData } from 'components/User/UserData/UserData';
import { Logout } from 'components/User/Logout/Logout';
import { PetsData } from 'components/User/PetsData/PetsData';
import {
  Container,
  ContainerUser,
  Title,
  ContainerInfo,
  AboutUser,
} from './UserPage.styled';

const UserPage = () => {
  return (
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
  );
};

export default UserPage;
