import { VscAccount } from 'react-icons/vsc';
import {
  StyledColoredLink,
  StyledSpan,
  StyledWhiteLink,
  UnregiteredUser,
} from './AuthUserNav.styled';

const AuthNav = ({ user }) => {
  return (
    
    <>
      <StyledColoredLink to={'/login'}>Login</StyledColoredLink>
      <StyledWhiteLink to={'/register'}>Registration</StyledWhiteLink>
    </>
  );
};

export default AuthNav;
