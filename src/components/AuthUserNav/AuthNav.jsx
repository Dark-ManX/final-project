import {
  StyledColoredLink, StyledWhiteLink
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
