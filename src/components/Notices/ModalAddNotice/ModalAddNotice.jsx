import React from 'react';
import { useState } from 'react';
import { useCreateNoticeMutation } from 'redux/auth/authOperations';
import Notiflix from 'notiflix';

import { ReactComponent as Male } from "../../../icons/male.svg";
import { ReactComponent as Female } from "../../../icons/female.svg";
import { ReactComponent as CloseCross } from "../../../icons/cross.svg";
import { ReactComponent as DefaultCross } from "../../../icons/default-cross.svg";

import { Input, Label, Form, Container, Title, P, Span, InputCategory, ButtonsCategoryContainer, ButtonsSubmitColor, ButtonsSubmitWhite, ButtonsSubmitContainer, InputSexPet, ButtonsSexPetContainer, Textarea, InputFile, SpanSexPet, CloseButton, AddImageButton, PetImage, Fieldset, Legend } from "./ModalAddNotice.styled";

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

const ModalAddNotice = ({onClose}) => {

    const [title, setTitle] = useState('');
    const [petName, setPetName] = useState('');
    const [birth, setBirth] = useState('');
    const [breed, setBreed] = useState('');
    const [category, setCategory] = useState('');
    const [comments, setComments] = useState('');
    const [sex, setSex] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('0');
    const [photoPet, setPhotoPet] = useState(null);

    const [page, setPage] = useState(true);

    const [createNotice] = useCreateNoticeMutation();

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
                setPhotoPet(e.target.files[0]);
                break;
            default:
                return;
        }
    };

    const addNewNotice = e => {
        if (title === '' || petName === '' || birth === '' || breed === '') {
            return Notiflix.Notify.failure('All fields must be filled');
        }
        if (category === '') {
            return Notiflix.Notify.failure('Please, select a category');
        }

        setPage(false);
    };

    const formData = new FormData();
    formData.append('name', petName);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('birth', birth);
    formData.append('title', title);
    formData.append('sex', sex);
    formData.append('location', location);
    formData.append('breed', breed);
    formData.append('comments', comments);
    formData.append('photoNotices', photoPet);

    const handleSubmit = e => {
        e.preventDefault();
        if (location === '' || photoPet === '') {
            return Notiflix.Notify.failure('All fields must be filled');
        }
        if (sex === '') {
            return Notiflix.Notify.failure('Please, choose sex');
        }
        createNotice(formData);
        onClose();
    }
    
    return (
        <>
            <Container>
                <CloseButton type="button" onClick={onClose}>
                    <CloseCrossIcon/>
            </CloseButton>
                
                <Title>Add pet</Title>

                {page ? (
                    <Form onSubmit={addNewNotice} >
                <P>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</P>
                        
                <ButtonsCategoryContainer>
                <Label>
                    <InputCategory
                name="category"
                type="radio"
                value="lost-found"
                onChange={handleChange}
                checked={category === 'lost-found'}
                    />
                    Lost-found
                </Label>
                <Label>
                    <InputCategory
                name="category"
                type="radio"
                value="in-good-hands"
                onChange={handleChange}
                checked={category === 'in-good-hands'}
                    />
                    In good hands
                </Label>
                <Label>
                    <InputCategory
                name="category"
                type="radio"
                value="sell"
                onChange={handleChange}
                checked={category === 'sell'}
                    />
                    Sell
                </Label>
                </ButtonsCategoryContainer>

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
                            < ButtonsSubmitColor type="button" onClick={addNewNotice}>Next</ ButtonsSubmitColor>
                            < ButtonsSubmitWhite type="button" onClick={onClose}>Cancel</ ButtonsSubmitWhite>
                            </ButtonsSubmitContainer>

                        </Form>
                        ) : (
                            <Form>
                        <Fieldset>
                            <Legend>
                                The sex<Span>*</Span>:
                            </Legend>
                        <ButtonsSexPetContainer>
                    <Label>
                            <InputSexPet
                        name="sex"
                        type="radio"
                        value="male"
                        onChange={handleChange}
                        checked={sex === 'male'}
                    />
                    <MaleSvg />
                    Male
                            </Label>
                            
                            <Label>
                            <InputSexPet
                        name="sex"
                        type="radio"
                        value="female"
                        onChange={handleChange}
                        checked={sex === 'female'}
                            />
                    <FemaleSvg />
                    Female
                        </Label>
                        </ButtonsSexPetContainer>
                        </Fieldset>

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
                            {category === "sell" ? (
                                <>
                                <Label>Price<Span>*</Span>:
                        <Input
                            type="text"
                            name="price"
                            value={price}
                            placeholder="Type date of birth"
                            onChange={handleChange}
                            required    />
                                </Label>
                                </>
                    ) : null }
                    
                            <Label htmlFor="uploadFile">Load the pet’s image<Span>*</Span>:
                                {!photoPet ? (
                                    <AddImageButton type="button">
                                        <DefaultCross width="47.33" height="47.33" />
                                        <InputFile
                                            id="uploadFile"
                                            type="file"
                                            name="photoPet"
                                            value={photoPet}
                                            onChange={handleChange}
                                            required
                                        />
                                    </AddImageButton>
                                ) : null}
                                    {photoPet ? (<PetImage src={URL.createObjectURL(photoPet)} alt={petName}  />) : null}
                    </Label>
                    <Label>Comments<Span>*</Span>:
                                <Textarea
                                    name="comments"
                                    value={comments}
                                    placeholder="Type comment"
                                    onChange={handleChange}
                                        required>
                                    </Textarea>
                                </Label>
                                <ButtonsSubmitContainer>
                                    < ButtonsSubmitColor type="submit" onClick={handleSubmit}>Done</ ButtonsSubmitColor>
                        < ButtonsSubmitWhite type="button" onClick={()=> setPage(true)}>Back</ ButtonsSubmitWhite>
                                </ButtonsSubmitContainer>
                        </Form>
                    )
                    }
            </Container>
        </>
    );
};

export default ModalAddNotice;



// import React from 'react';
// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useCreateNoticeMutation } from 'redux/auth/authOperations';
// import { response } from 'api';
// // import { fetchPetAdd } from 'api/petApi';

// import { ReactComponent as Male } from "../../../icons/male.svg";
// import { ReactComponent as Female } from "../../../icons/female.svg";
// import { ReactComponent as CloseCross } from "../../../icons/cross.svg";
// import { ReactComponent as DefaultCross } from "../../../icons/default-cross.svg";
// import { Input, Label, Form, Container, Title, P, Span, InputCategory, ButtonsCategoryContainer, ButtonsSubmitColor, ButtonsSubmitWhite, ButtonsSubmitContainer, InputSexPet, ButtonsSexPetContainer, Textarea, InputFile, SpanSexPet, CloseButton, AddImageButton, PetImage, Fieldset, Legend } from "./ModalAddNotice.styled";
// import styled from 'styled-components';

// const MaleSvg = styled(Male)`
//     @media screen and (min-width: 768px) {
//     width: 60px;
//     height: 60px;
//     }
// `;

// const FemaleSvg = styled(Female)`
//     @media screen and (min-width: 768px) {
//     width: 60px;
//     height: 60px;
//     }
// `;

// const CloseCrossIcon = styled(CloseCross)`
// width: 15px;
// height: 15px;

// @media screen and (min-width: 768px) {
//     width: 20px;
//     height: 20px;
//     }
// `;

// const MODAL_STATE = {
//     IDLE: 'idle',
//     UPLOAD_IMAGE: 'uploadImage',
//     DONE: 'done',
// }

// const ModalAddNotice = ({onClose}) => {
//     const token = useSelector(state => state.token);
    
//     const {addPet} = response;

//     const [modalState, setModalState] = useState(MODAL_STATE.IDLE);

//     const [title, setTitle] = useState('');
//     const [petName, setPetName] = useState('');
//     const [birth, setBirth] = useState('');
//     const [breed, setBreed] = useState('');
//     const [category, setCategory] = useState('');
//     const [comments, setComments] = useState('');
//     const [sex, setSex] = useState('');
//     const [location, setLocation] = useState('');
//     const [price, setPrice] = useState('');
//     const [photoPet, setPhotoPet] = useState(null);

//     const [firstModal, setFirstModal] = useState(true);

//     const [createNotice] = useCreateNoticeMutation();

//     const moveNextModal = () => {
//         firstModal ? setFirstModal(false) : setFirstModal(true);
//     }

//     const handleChange = e => {
//         const { name, value } = e.target;

//         switch (name) {
//             case 'title':
//                 setTitle(value);
//                 break;
//             case 'petName':
//                 setPetName(value);
//                 break;
//             case 'birth':
//                 setBirth(value);
//                 break;
//             case 'breed':
//                 setBreed(value);
//                 break;
//             case 'category':
//                 setCategory(value);
//                 break;
//             case 'comments':
//                 setComments(value);
//                 break;
//             case 'sex':
//                 setSex(value);
//                 break;
//             case 'location':
//                 setLocation(value);
//                 break;
//             case 'price':
//                 setPrice(value);
//                 break;
//             case 'photoPet':
//                 setPhotoPet(e.target.files[0]);
//                 break;
//             default:
//                 return;
//         }
//     };

//     const newNoticePet = {
//         title,
//         petName,
//         birth,
//         breed,
//         category,
//         comments,
//         sex,
//         location,
//         price,
//         photoPet
//     }

//     const handleSubmit = async e => {
//         e.preventDefault();
//         if (modalState === MODAL_STATE.IDLE) {
//             return setModalState(MODAL_STATE.UPLOAD_IMAGE);
//         }
//         if (modalState === MODAL_STATE.UPLOAD_IMAGE) {
//             return setModalState(MODAL_STATE.DONE);
//         }

//         await createNotice(newNoticePet);
//     };

//     useEffect(() => {
//         if (modalState === MODAL_STATE.DONE) {
//             addPet({ name: title, petName, birth, breed, category, comments, sex, location, price, photoPet }, token)
//             onClose();
//         }
//     }, [modalState, title, petName, birth, breed, category, comments, sex, location, price, photoPet, token, onClose, addPet]);

//     const selectFile = e => {
//         setPhotoPet(e.target.files[0]);
//     };
    
//     return (
//         <>
//             <Container>

//                 <CloseButton type="button" onClick={onClose}>
//                     <CloseCrossIcon/>
//             </CloseButton>
                
//                 <Title>Add pet</Title>
                
//                 {/* Pets for sell # 1*/}

//                 <Form onSubmit={handleSubmit} >

//                 {firstModal ? (
//                     <>
//                     <P>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</P>
                
//                 <ButtonsCategoryContainer>
//                 <Label>
//                     <InputCategory
//                 name="category"
//                 type="radio"
//                 value="lost-found"
//                 onChange={handleChange}
//                 checked={category === 'lost-found'}
//                     />
//                     Lost-found
//                 </Label>
//                 <Label>
//                     <InputCategory
//                 name="category"
//                 type="radio"
//                 value="in-good-hands"
//                 onChange={handleChange}
//                 checked={category === 'in-good-hands'}
//                     />
//                     In good hands
//                 </Label>
//                 <Label>
//                     <InputCategory
//                 name="category"
//                 type="radio"
//                 value="sell"
//                 onChange={handleChange}
//                 checked={category === 'sell'}
//                     />
//                     Sell
//                 </Label>
//                 </ButtonsCategoryContainer>


//                     <Label>Tittle of ad
//                         <Span>*</Span>
//                         <Input
//                             type="text"
//                             name="title"
//                             value={title}
//                             placeholder="Type name pet"
//                             onChange={handleChange}
//                             required
//                         />
//                     </Label>
//                     <Label>Name pet
//                         <Span>*</Span>
//                         <Input
//                             type="text"
//                             name="petName"
//                             value={petName}
//                             placeholder="Type name pet"
//                             onChange={handleChange}
//                             required
//                         />
//                     </Label>
//                     <Label>Date of birth
//                         <Span>*</Span>
//                         <Input
//                             type="text"
//                             name="birth"
//                             value={birth}
//                             placeholder="Type date of birth"
//                             onChange={handleChange}
//                             required
//                         />
//                     </Label>
//                     <Label>Breed
//                         <Span>*</Span>
//                         <Input
//                             type="text"
//                             name="breed"
//                             value={breed}
//                             placeholder="Type breed"
//                             onChange={handleChange}
//                             required
//                         />
//                             </Label>
//                             </>
//                         ) : (
//                     <>
//                 {/* Pets for sell # 2 */}
                
//                         <Fieldset>
//                             <Legend>
//                                 The sex<Span>*</Span>:
//                             </Legend>
//                         <ButtonsSexPetContainer>
//                     <Label>
//                             <InputSexPet
//                         name="sex"
//                         type="radio"
//                         value="male"
//                         onChange={handleChange}
//                         checked={sex === 'male'}
//                     />
//                     <MaleSvg />
//                     Male
//                             </Label>
                            
//                             <Label>
//                             <InputSexPet
//                         name="sex"
//                         type="radio"
//                         value="female"
//                         onChange={handleChange}
//                         checked={sex === 'female'}
//                             />
//                     <FemaleSvg />
//                     Female
//                         </Label>
//                         </ButtonsSexPetContainer>
//                         </Fieldset>

//                     <Label>Location<Span>*</Span>:
//                         <Input
//                             type="text"
//                             name="location"
//                             value={location}
//                             placeholder="Type name pet"
//                             onChange={handleChange}
//                             required
//                             />
//                     </Label>
//                             {category === "sell" ? (
//                                 <>
//                                 <Label>Price<Span>*</Span>:
//                         <Input
//                             type="text"
//                             name="price"
//                             value={price}
//                             placeholder="Type date of birth"
//                             onChange={handleChange}
//                             required    />
//                                 </Label>
//                                 </>
//                     ) : null }
                    
//                             <Label htmlFor="uploadFile">Load the pet’s image<Span>*</Span>:
//                                 {!photoPet ? (
//                                     <AddImageButton type="button">
//                                         <DefaultCross width="47.33" height="47.33" />
//                                         <InputFile
//                                             id="uploadFile"
//                                             type="file"
//                                             name="photoPet"
//                                             value={photoPet}
//                                             onChange={selectFile}
//                                             required
//                                         />
//                                     </AddImageButton>
//                                 ) : null}
//                                     {photoPet ? (<PetImage src={URL.createObjectURL(photoPet)} alt={petName}  />) : null}
//                     </Label>
//                     <Label>Comments<Span>*</Span>:
//                                 <Textarea
//                                     name="comments"
//                                     value={comments}
//                                     placeholder="Type comment"
//                                     onChange={handleChange}
//                                         required>
//                                     </Textarea>
//                     </Label>
//                             </>
//                     )
//                     }

//                     <ButtonsSubmitContainer>

//                         {firstModal &&
//                             (
//                                 <>
//                         < ButtonsSubmitColor type="button" onClick={moveNextModal}>Next</ ButtonsSubmitColor>
//                             < ButtonsSubmitWhite type="button" onClick={onClose}>Cancel</ ButtonsSubmitWhite>
//                             </>
//                         )}

//                         {!firstModal && (
//                         <>
//                             < ButtonsSubmitColor type="submit">Done</ ButtonsSubmitColor>
//                         < ButtonsSubmitWhite type="button" onClick={moveNextModal}>Back</ ButtonsSubmitWhite>
//                         </>
//                         )}

//                     </ButtonsSubmitContainer>
                    
//                 </Form>
//             </Container>

            
//         </>
//     );
// };

// export default ModalAddNotice;