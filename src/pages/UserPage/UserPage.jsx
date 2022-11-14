import { UserData } from 'components/UserData/UserData';
import { Logout } from 'components/Logout/Logout';
import { PetsData } from 'components/PetsData/PetsData';
// import ModalAddsPet from 'components/ModalAddsPet/ModalAddsPet';
// import Modal from 'components/Modal';

import { Container, ContainerUser, Title } from './UserPage.styled';

const UserPage = () => {
  return (
    <>
      <Title>My information:</Title>
      <Container>
        <ContainerUser>
          <UserData />
          <Logout />
        </ContainerUser>
        <PetsData />
      </Container>
    </>
  );
};

export default UserPage;
