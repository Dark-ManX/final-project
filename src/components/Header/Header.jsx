import AuthNav from "components/AuthNav/AuthNav";
import { MainContainer } from "components/commonStyles/Container.styled";
import Modal from "components/Modal/Modal";
import AddPet from "components/ModalAddsPet/ModalAddsPet";
import Navigation from "components/Navigation/Navigation";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import {
    AccentSpan,
    Button,
    MenuContainer,
    ModalContainer,
    Paragraph,
    StyledHeader
} from "./Header.styled";

const Header = () => {
    
    const [user, setUser] = useState(false)

    const toggleUser = () => {
        
        setUser(!user)
    }

    return (

        <>
            <MainContainer>
                <StyledHeader>
                    <ModalContainer>
                        <Paragraph>pe<AccentSpan>t</AccentSpan>ly</Paragraph>
                        <Button onClick={toggleUser}><TiThMenu /></Button>
                    </ModalContainer>
                    
                    <MenuContainer className={`headerMenu ${user ? 'shown' : ''}`} >

                        <AuthNav user={user} />

                        <Navigation />
                        
                    </MenuContainer>
                </StyledHeader>

            </MainContainer>
          </>  
    )
};

export default Header;
