import { UserData } from 'components/UserData/UserData';
import { Logout } from 'components/Logout/Logout';
import { PetsData } from 'components/PetsData/PetsData';

import { Container } from './UserPage.styled';

const UserPage = () => {
  return (
    <Container>
      <h2>My information:</h2>
      <div>
        <UserData />
        <Logout />
      </div>
      <PetsData />
    </Container>
  );
};

export default UserPage;
