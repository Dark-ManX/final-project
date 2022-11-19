import {
    Container, InfoContainer, Info, InfoKey,
    InfoValue, Description, Photo,
    CardImageContainer, Category, ButtonAdd, ButtonCall,
    Title, Comments, Span, ButtonGroup, CloseModal
} from './ModalNotice.styled.jsx';



export const ModalNotice = ({ notice, onClose }) => {
 
 
    const { title, name, breed, birth,
        place, age, sex, price, photo,
        category, comments, owner,
    } = notice;
     
    console.log({ owner })
    const photoUrl = `https://team-api-blended2.herokuapp.com/${photo}`;

    return (
        <>
            <Container>
                <CloseModal type="button" onClick={onClose}></CloseModal>
                <Description>
                    <CardImageContainer>
                        <Photo src={photoUrl} alt={name} />
                        <Category>{category}</Category>
                    </CardImageContainer>
                    <InfoContainer>
                        <Title>{title}</Title>
                        <Info>
                            <InfoKey>
                                <p>Name:</p>
                                <p>Birthday:</p>
                                <p>Breed:</p>
                                <p>Place:</p>
                                <p>The sex:</p>
                                <p>Email:</p>
                                <p>Phone:</p>
                            </InfoKey>
                            <InfoValue>
                                <p>{name}</p>
                                <p>{birth}</p>
                                <p>{breed}</p>
                                <p>{place}</p>
                                <p>{sex}</p>
                                {/* <p>{email}</p> */}
                                {/* <p>{phone}</p> */}
                            </InfoValue>
                            
                        </Info>
                        
                    </InfoContainer>
                </Description>
                <Comments><Span>Comments:</Span>{comments} </Comments>
                <ButtonGroup>
                    <ButtonAdd type="button">Add to</ButtonAdd>
                    <ButtonCall href="tel:1111111111">Contact</ButtonCall>
                </ButtonGroup>
            </Container>
        </>
    )
};
