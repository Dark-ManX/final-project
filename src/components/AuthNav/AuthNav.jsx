import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { StyledColoredLink, StyledWhiteLink, StyledSpan, UnregiteredUser } from "./AuthNav.styled";

const AuthNav = ({user}) => {

    return (
    
        <div>
            {user
                ? (<StyledColoredLink to={'/user'}><StyledSpan><VscAccount/></StyledSpan>Account</StyledColoredLink>)
                : (<UnregiteredUser>
                    <StyledColoredLink to={'/login'}>Login</StyledColoredLink><StyledWhiteLink to={'/register'}>Registration</StyledWhiteLink>
                </UnregiteredUser>)
            }
            
        </div>
    )
}

export default AuthNav;
