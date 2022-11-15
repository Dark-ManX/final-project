import { StyledColoredLink, StyledSpan } from "./AuthUserNav.styled";

const UserNav = () => {

  return (
      
        <StyledColoredLink to={'/user'}>
          <StyledSpan>
            <p>ICON</p>
          </StyledSpan>
          Account
        </StyledColoredLink>
    )
}

export default UserNav;

        