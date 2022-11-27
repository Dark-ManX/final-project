import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { response } from 'api';
import { fetchPetAdd } from 'api/petApi';

import { ReactComponent as Male } from "../../../icons/male.svg";
import { ReactComponent as Female } from "../../../icons/female.svg";
import { ReactComponent as CloseCross } from "../../../icons/cross.svg";
// import { ReactComponent as DefaultCross } from "../../../icons/default-cross.svg";
import { Input, Label, Form, Container, Title, P, Span, ButtonCategory, ButtonsCategoryContainer, ButtonsSubmitColor, ButtonsSubmitWhite, ButtonsSubmitContainer, ButtonsSexPet, ButtonsSexPetContainer, Textarea, InputFile, SpanSexPet, CloseButton } from "./ModalAddNotice.styled";
import styled from 'styled-components';

const MaleSvg = styled(Male)`
    @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
    }
`;

const FemaleSvg = styled(Female)`
    @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
    }
`;

const CloseCrossIcon = styled(CloseCross)`
width: 15px;
height: 15px;

@media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    }
`;

const MODAL_STATE = {
    IDLE: 'idle',
    UPLOAD_IMAGE: 'uploadImage',
    DONE: 'done',
}

const ModalAddNotice = ({onClose}) => {
const token = useSelector(state => state.token);
    const {addPet} = response;

    const [modalState, setModalState] = useState(MODAL_STATE.IDLE);

    const [title, setTitle] = useState('');
    const [petName, setPetName] = useState('');
    const [birth, setBirth] = useState('');
    const [breed, setBreed] = useState('');
    const [category, setCategory] = useState('');
    const [comments, setComments] = useState('');
    const [sex, setSex] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [photoPet, setPhotoPet] = useState(null);

    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'petName':
                setPetName(value);
                break;
            case 'birth':
                setBirth(value);
                break;
            case 'breed':
                setBreed(value);
                break;
            case 'category':
                setCategory(value);
                break;
            case 'comments':
                setComments(value);
                break;
            case 'sex':
                setSex(value);
                break;
            case 'location':
                setLocation(value);
                break;
            case 'price':
                setPrice(value);
                break;
            case 'photoPet':
                setPhotoPet(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (modalState === MODAL_STATE.IDLE) {
            return setModalState(MODAL_STATE.UPLOAD_IMAGE);
        }
        if (modalState === MODAL_STATE.UPLOAD_IMAGE) {
            return setModalState(MODAL_STATE.DONE);
        }
    };

    useEffect(() => {
        if (modalState === MODAL_STATE.DONE) {
            addPet({ name: title, petName, birth, breed, category, comments, sex, location, price, photoPet }, token)
            onClose();
        }
    }, [modalState, title, petName, birth, breed, category, comments, sex, location, price, photoPet, token, onClose]);

    const selectFile = e => {
        setPhotoPet(e.target.files[0]);
    };
    
    return (
        <>
            <Container>

                <CloseButton type="button" onClick={onClose}>
                    <CloseCrossIcon/>
            </CloseButton>
                
                    <Title>Add pet</Title>

                    <P>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</P>
                
                <ButtonsCategoryContainer>
                    <ButtonCategory type="button" value={category}>lost/found</ButtonCategory>
                    <ButtonCategory type="button" value={category}>In good hands</ButtonCategory>
                    <ButtonCategory type="button" value={category}>sell</ButtonCategory>
                </ButtonsCategoryContainer>

                {/* Pets for sell # 1*/}

                <Form onSubmit={handleSubmit}>

                    {modalState === MODAL_STATE.IDLE ? (
                    <>
                    <Label>Tittle of ad
                        <Span>*</Span>
                        <Input
                            type="text"
                            name="title"
                            value={title}
                            placeholder="Type name pet"
                            onChange={handleChange}
                            required
                        />
                    </Label>
                    <Label>Name pet
                        <Span>*</Span>
                        <Input
                            type="text"
                            name="petName"
                            value={petName}
                            placeholder="Type name pet"
                            onChange={handleChange}
                            required
                        />
                    </Label>
                    <Label>Date of birth
                        <Span>*</Span>
                        <Input
                            type="text"
                            name="birth"
                            value={birth}
                            placeholder="Type date of birth"
                            onChange={handleChange}
                            required
                        />
                    </Label>
                    <Label>Breed
                        <Span>*</Span>
                        <Input
                            type="text"
                            name="breed"
                            value={breed}
                            placeholder="Type breed"
                            onChange={handleChange}
                            required
                        />
                    </Label>

                    <ButtonsSubmitContainer>
                        < ButtonsSubmitColor type="submit">Next</ ButtonsSubmitColor>
                        < ButtonsSubmitWhite type="submit">Cancel</ ButtonsSubmitWhite>
                    </ButtonsSubmitContainer>
                        </>) : null}
                    {modalState === MODAL_STATE.UPLOAD_IMAGE ? (
                    <>

                {/* Pets for sell # 2 */}
                
                    <Label>The sex<Span>*</Span>:
                        <ButtonsSexPetContainer>
                            <ButtonsSexPet value={sex} name="sex"> <MaleSvg /> <SpanSexPet>Male</SpanSexPet></ButtonsSexPet>
                            <ButtonsSexPet value={sex} name="sex"> <FemaleSvg/> <SpanSexPet>Female</SpanSexPet></ButtonsSexPet>
                        </ButtonsSexPetContainer>
                    </Label>

                    <Label>Location<Span>*</Span>:
                        <Input
                            type="text"
                            name="location"
                            value={location}
                            placeholder="Type name pet"
                            onChange={handleChange}
                            required
                            />
                    </Label>
                    <Label>Price<Span>*</Span>:
                        <Input
                            type="text"
                            name="price"
                            value={price}
                            placeholder="Type date of birth"
                            onChange={handleChange}
                            required    />
                    </Label>
                    <Label>Load the pet’s image<Span>*</Span>:
                        <InputFile type="file" />
                        {/* <DefaultCross width="47.33" height="47.33" /> */}
                    </Label>
                    <Label>Comments<Span>*</Span>:
                                <Textarea
                                    name="comments"
                                    value={comments} placeholder="Type comment" onChange={handleChange}
                                    required></Textarea>
                    </Label>
                    <ButtonsSubmitContainer>
                        < ButtonsSubmitColor type="submit">Done</ ButtonsSubmitColor>
                        < ButtonsSubmitWhite type="submit">Back</ ButtonsSubmitWhite>
                            </ButtonsSubmitContainer>
                            </>
                    ) : null}
                    
                </Form>
            </Container>

            
        </>
    );
};

export default ModalAddNotice;