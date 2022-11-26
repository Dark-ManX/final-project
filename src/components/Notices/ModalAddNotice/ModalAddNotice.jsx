import React from 'react';
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

const ModalAddNotice = () => {

    
    return (
        <>
            <Container>

                <CloseButton>
                    <CloseCrossIcon/>
            </CloseButton>
                
                    <Title>Add pet</Title>

                    <P>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</P>
                
                <ButtonsCategoryContainer>
                    <ButtonCategory type="button">lost/found</ButtonCategory>
                    {/* value="category" */}
                    <ButtonCategory type="button">In good hands</ButtonCategory>
                    {/* value="category" */}
                    <ButtonCategory type="button">sell</ButtonCategory>
                    {/* value="category" */}
                </ButtonsCategoryContainer>

                {/* Pets for sell # 1*/}

                <Form>
                    <Label>Tittle of ad
                        <Span>*</Span>
                        <Input
                            type="text"
                            name="title"
                            // value="title"
                            placeholder="Type name pet"
                        />
                    </Label>
                    <Label>Name pet
                        <Span>*</Span>
                        <Input
                            type="text"
                            name="name"
                            // value="name"
                            placeholder="Type name pet"
                        />
                    </Label>
                    <Label>Date of birth
                        <Span>*</Span>
                        <Input
                            type="text"
                            name="birth"
                            // value="birth"
                            placeholder="Type date of birth"
                        />
                    </Label>
                    <Label>Breed
                        <Span>*</Span>
                        <Input
                            type="text"
                            name="breed"
                            // value="breed"
                            placeholder="Type breed"
                        />
                    </Label>

                    <ButtonsSubmitContainer>
                        < ButtonsSubmitColor type="submit">Next</ ButtonsSubmitColor>
                        < ButtonsSubmitWhite type="submit">Cancel</ ButtonsSubmitWhite>
                    </ButtonsSubmitContainer>
                </Form>

                {/* Pets for sell # 2 */}

                <Title>Add pet</Title>

                <Form>
                    <Label>The sex<Span>*</Span>:
                        <ButtonsSexPetContainer>
                            <ButtonsSexPet value="sex" name="sex"> <MaleSvg /> <SpanSexPet>Male</SpanSexPet></ButtonsSexPet>
                            <ButtonsSexPet value="sex" name="sex"> <FemaleSvg/> <SpanSexPet>Female</SpanSexPet></ButtonsSexPet>
                        </ButtonsSexPetContainer>
                    </Label>

                    <Label>Location<Span>*</Span>:
                        <Input
                            type="text"
                            name="location"
                            // value="location"
                            placeholder="Type name pet" />
                    </Label>
                    <Label>Price<Span>*</Span>:
                        <Input
                            type="text"
                            name="price"
                            // value="price"
                            placeholder="Type date of birth" />
                    </Label>
                    <Label>Load the pet’s image<Span>*</Span>:
                        <InputFile type="file" />
                        {/* <DefaultCross width="47.33" height="47.33" /> */}
                    </Label>
                    <Label>Comments<Span>*</Span>:
                        <Textarea name="comments" placeholder="Type comment"></Textarea>
                    </Label>
                    <ButtonsSubmitContainer>
                        < ButtonsSubmitColor type="submit">Done</ ButtonsSubmitColor>
                        < ButtonsSubmitWhite type="submit">Back</ ButtonsSubmitWhite>
                    </ButtonsSubmitContainer>
                </Form>
            </Container>

            
        </>
    );
};

export default ModalAddNotice;