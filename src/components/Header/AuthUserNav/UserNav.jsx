import { StyledColoredLink, StyledSpan } from "./AuthUserNav.styled";
import accountIcon from 'icons/Vector.svg';

const UserNav = () => {

  return (
      
        <StyledColoredLink to={'/user'}>
          <StyledSpan>
            <img src={accountIcon} alt="account icon" />
          </StyledSpan>
          Account
        </StyledColoredLink>
    )
}

export default UserNav;

        