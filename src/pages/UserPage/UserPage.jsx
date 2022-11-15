import { UserData } from 'components/UserData/UserData';
import { Logout } from 'components/Logout/Logout';
import { PetsData } from 'components/PetsData/PetsData';
import {
  Container,
  ContainerUser,
  Title,
  ContainerInfo,
} from './UserPage.styled';

const UserPage = () => {
  return (
    <ContainerInfo>
      <div>
        <Title>My information:</Title>
        <Container>
          <ContainerUser>
            <UserData />
            <Logout />
          </ContainerUser>
        </Container>
      </div>
      <PetsData />
    </ContainerInfo>
  );
};

export default UserPage;
