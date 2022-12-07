import { StyledWhiteLink } from './AuthUserNav.styled';

const AuthNav = () => {
  return (
    <>
      <StyledWhiteLink to={'/login'}>Login</StyledWhiteLink>
      <StyledWhiteLink to={'/register'}>Registration</StyledWhiteLink>
    </>
  );
};

export default AuthNav;
