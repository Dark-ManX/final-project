import { UserData } from 'components/UserData/UserData';
import { Logout } from 'components/Logout/Logout';
import { PetsData } from 'components/PetsData/PetsData';

const UserPage = () => {
  return (
    <>
      <h2>My information:</h2>
      <div>
        <UserData />
        <Logout />
      </div>
      <PetsData />
    </>
  );
};

export default UserPage;
