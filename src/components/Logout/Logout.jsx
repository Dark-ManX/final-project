import logout from '../../components/icons/logout.svg';
import { LogoutBtn } from './Logout.styled';

export const Logout = () => {
  return (
    <LogoutBtn>
      <img src={logout} alt="logout" />
      Log Out
    </LogoutBtn>
  );
};
