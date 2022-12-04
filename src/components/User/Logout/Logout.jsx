import logout from 'icons/logout.svg';
import { LogoutBtn } from './Logout.styled';
import { useLogOutUserMutation } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const [logoutUser] = useLogOutUserMutation();
  const navigate = useNavigate();

  return (
    <LogoutBtn
      type="button"
      onClick={() => logoutUser(navigate('/', { replace: true }))}
    >
      <img src={logout} alt="logout" />
      Log Out
    </LogoutBtn>
  );
};
