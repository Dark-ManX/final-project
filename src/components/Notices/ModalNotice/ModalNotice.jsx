import { useSelector } from "react-redux";
import { response } from 'api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ReactComponent as AddIcon } from "icons/add.svg";
import { ReactComponent as RemoveIcon } from "icons/remove.svg";
import { GrClose } from 'react-icons/gr';
import { IconContext } from "react-icons";
import {
    Container, InfoContainer, Info, Key,
    Value, Description, Photo, Li, BtnAddName,
    CardImageContainer, Category, Button, ButtonCall,
    Title, Comments, Span, ButtonGroup, CloseModal
} from './ModalNotice.styled.jsx';



export const ModalNotice = ({ notice, onClose, onClick, handleBtnClick}) => {
    
    const { removePet } = response;
    const userId = useSelector(state => state.auth.id);
    const token = useSelector(state => state.auth.token);
    
    const { _id, title, name, birth, breed, 
        place, sex, photo, price, favorite,
        category, comments, owner, 
    } = notice;

    const idOwner = owner._id;

    const favoriteId = favorite?.includes(userId); 

    const handleRemotePet = async (id) => {
        console.log(id)
        await removePet(id, token);
        Notify.success('Pet remove');
        onClick();
    }
    
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

                    {userId !== idOwner ? <Button type="button"
                        onClick={handleBtnClick}
                        className={favoriteId && 'remove'}>
                        <BtnAddName>{!favoriteId ? 'Add to' : 'Remove'}</BtnAddName>
                        <AddIcon width="24" height="22" />
                    </Button> :
                    <Button type="button" className='trash' onClick={()=>handleRemotePet(_id)} >
                            <BtnAddName>Remove Pet</BtnAddName>
                            <RemoveIcon width="19.5" height="21" />
                    </Button>
                    }
                    
                    <ButtonCall href={`tel:${owner.phone}`}>Contact</ButtonCall>
                </ButtonGroup>
            </Container>
        </>
    )
};
