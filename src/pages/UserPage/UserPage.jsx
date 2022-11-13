import { UserData } from 'components/UserData/UserData';
import { Logout } from 'components/Logout/Logout';
import { PetsData } from 'components/PetsData/PetsData';
// import ModalAddsPet from 'components/ModalAddsPet/ModalAddsPet';
// import Modal from 'components/Modal';

const UserPage = () => {
  return (
    <>
      <h2>My information:</h2>
      <div>
        <UserData />
        <Logout />
      </div>
      <PetsData />
      {/* <Modal children={<ModalAddsPet/>}/> */}
    </>
  );
};

export default UserPage;

