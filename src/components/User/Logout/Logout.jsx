import logout from 'icons/logout.svg';
import { LogoutBtn } from './Logout.styled';
import { useLogOutUserMutation } from 'redux/auth/authOperations';

export const Logout = () => {
  const [logoutUser] = useLogOutUserMutation();
  // console.log(logoutUser);
  return (
    <LogoutBtn type="button" onClick={() => logoutUser()}>
      <img src={logout} alt="logout" />
      Log Out
    </LogoutBtn>
  );
};
