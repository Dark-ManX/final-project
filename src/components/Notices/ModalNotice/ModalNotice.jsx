import { ReactComponent as AddIcon } from "icons/add.svg";
// import { ReactComponent as RemoveIcon } from "icons/remove.svg";
import { GrClose } from 'react-icons/gr';
import { IconContext } from "react-icons";
import {
    Container, InfoContainer, Info, Key,
    Value, Description, Photo, Li, BtnAddName,
    CardImageContainer, Category, ButtonAdd, ButtonCall,
    Title, Comments, Span, ButtonGroup, CloseModal
} from './ModalNotice.styled.jsx';



export const ModalNotice = ({ notice, onClose}) => {
 
 
    const { title, name, birth, breed, 
        place, sex, photo, price,
        category, comments, owner, 
    } = notice;
     
    if (!photo) {
        photo =
            'https://t4.ftcdn.net/jpg/03/08/68/19/360_F_308681935_VSuCNvhuif2A8JknPiocgGR2Ag7D1ZqN.jpg';  
    };

    return (
        <>
            <Container>
                <CloseModal type="button" onClick={onClose}>
                    <IconContext.Provider value={{ size: '20px' }}>
                        <GrClose/>
                    </IconContext.Provider>
                </CloseModal>
                <Description>
                    <CardImageContainer>
                        <Photo src={photo} alt={name} />
                        <Category>{category}</Category>
                    </CardImageContainer>
                    <InfoContainer>
                        <Title>{title}</Title>
                        <Info>
                            <Li><Key>Name:</Key><Value>{name}</Value></Li>
                            <Li><Key>Birthday:</Key><Value>{birth}</Value></Li>
                            <Li><Key>Breed:</Key><Value>{breed}</Value></Li>
                            <Li><Key>Place:</Key><Value>{place}</Value></Li>
                            <Li><Key>The sex:</Key><Value>{sex}</Value></Li>
                            <Li><Key>Email:</Key><Value>{owner.email}</Value></Li>
                            <Li><Key>Phone:</Key><Value>{owner.phone}</Value></Li>
                            {category === 'sell' ? <Li><Key>Price:</Key><Value>{price}</Value></Li>:null}
                        </Info>    
                    </InfoContainer>
                </Description>
                <Comments><Span>Comments:</Span>{comments} </Comments>
                <ButtonGroup>
                    <ButtonAdd type="button" >
                        <BtnAddName>Add to</BtnAddName> <AddIcon width="24" height="22" />
                    </ButtonAdd>
                    <ButtonCall href="tel:1111111111">Contact</ButtonCall>
                </ButtonGroup>
            </Container>
        </>
    )
};
