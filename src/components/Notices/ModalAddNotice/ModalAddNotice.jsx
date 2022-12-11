import { ReactComponent as DefaultCross } from 'icons/default-cross.svg';
import Notiflix from 'notiflix';
import { useState } from 'react';
import { useCreateNoticeMutation } from 'redux/auth/authOperations';
import {
  AddImageButton,
  ButtonsCategoryContainer,
  ButtonsSexPetContainer,
  ButtonsSubmitColor,
  ButtonsSubmitContainer,
  ButtonsSubmitWhite,
  CloseButton,
  CloseCrossIcon,
  Container,
  FemaleSvg,
  Fieldset,
  Form,
  Input,
  InputCategoryContainer,
  InputCategoryGoodHands,
  InputCategorySell,
  InputFile,
  InputLostCategory,
  InputSexPet,
  Label,
  LabelCategoryGoodHands,
  LabelCategoryLost,
  LabelCategorySell,
  LabelSexPet,
  Legend,
  MaleSvg,
  P,
  PetImage,
  Span,
  Textarea,
  Title,
} from './ModalAddNotice.styled';

const ModalAddNotice = ({ onClose }) => {
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
    e.preventDefault();
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
    if (location === '' || photoPet === null || comments === '') {
      return Notiflix.Notify.failure('All fields must be filled');
    }
    if (sex === '') {
      return Notiflix.Notify.failure('Please, choose sex');
    }

    createNotice(formData);
    Notiflix.Notify.success('Ad has been successfully created');

    onClose();
  };

  return (
    <Container>
      <CloseButton type="button" onClick={onClose}>
        <CloseCrossIcon />
      </CloseButton>

      <Title>Add pet</Title>

      {page ? (
        <>
          <P>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </P>

          <Form>
            <ButtonsCategoryContainer>
              <InputCategoryContainer>
                <InputLostCategory
                  id="categoryLost"
                  name="category"
                  type="radio"
                  value="lost-found"
                  onChange={handleChange}
                  checked={category === 'lost-found'}
                />

                {category === 'lost-found' ? (
                  <LabelCategoryLost
                    htmlFor="categoryLost"
                    style={{
                      color: '#ffffff',
                      backgroundColor: '#F59256',
                      borderRadius: '40px',
                    }}
                  >
                    lost-found
                  </LabelCategoryLost>
                ) : (
                  <LabelCategoryLost htmlFor="categoryLost">
                    lost-found
                  </LabelCategoryLost>
                )}
              </InputCategoryContainer>

              <InputCategoryContainer>
                <InputCategoryGoodHands
                  id="categoryGoodHands"
                  name="category"
                  type="radio"
                  value="in-good-hands"
                  onChange={handleChange}
                  checked={category === 'in-good-hands'}
                />

                {category === 'in-good-hands' ? (
                  <LabelCategoryGoodHands
                    htmlFor="categoryGoodHands"
                    style={{
                      color: '#ffffff',
                      backgroundColor: '#F59256',
                      borderRadius: '40px',
                    }}
                  >
                    In good hands
                  </LabelCategoryGoodHands>
                ) : (
                  <LabelCategoryGoodHands htmlFor="categoryGoodHands">
                    In good hands
                  </LabelCategoryGoodHands>
                )}
              </InputCategoryContainer>

              <InputCategoryContainer>
                <InputCategorySell
                  id="categorySell"
                  name="category"
                  type="radio"
                  value="sell"
                  onChange={handleChange}
                  checked={category === 'sell'}
                />

                {category === 'sell' ? (
                  <LabelCategorySell
                    htmlFor="categorySell"
                    style={{
                      color: '#ffffff',
                      backgroundColor: '#F59256',
                      borderRadius: '40px',
                    }}
                  >
                    sell
                  </LabelCategorySell>
                ) : (
                  <LabelCategorySell htmlFor="categorySell">
                    sell
                  </LabelCategorySell>
                )}
              </InputCategoryContainer>
            </ButtonsCategoryContainer>

            <Label>
              Tittle of ad
              <Span>*</Span>:
              <Input
                type="text"
                name="title"
                value={title}
                placeholder="Type name"
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Name pet
              <Span>*</Span>:
              <Input
                type="text"
                name="petName"
                value={petName}
                placeholder="Type name pet"
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Date of birth
              <Span>*</Span>:
              <Input
                type="text"
                name="birth"
                value={birth}
                placeholder="Type date of birth"
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Breed
              <Span>*</Span>:
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
              <ButtonsSubmitColor type="button" onClick={addNewNotice}>
                Next
              </ButtonsSubmitColor>
              <ButtonsSubmitWhite type="button" onClick={onClose}>
                Cancel
              </ButtonsSubmitWhite>
            </ButtonsSubmitContainer>
          </Form>
        </>
      ) : (
        <Form>
          <Fieldset>
            <Legend>
              The sex<Span>*</Span>:
            </Legend>
            <ButtonsSexPetContainer>
              <LabelSexPet htmlFor="sexPetMale">
                <InputSexPet
                  id="sexPetMale"
                  name="sex"
                  type="radio"
                  value="male"
                  onChange={handleChange}
                  checked={sex === 'male'}
                />
                <MaleSvg />
                Male
              </LabelSexPet>

              <LabelSexPet htmlFor="sexPetFemale">
                <InputSexPet
                  id="sexPetFemale"
                  name="sex"
                  type="radio"
                  value="female"
                  onChange={handleChange}
                  checked={sex === 'female'}
                />
                <FemaleSvg />
                Female
              </LabelSexPet>
            </ButtonsSexPetContainer>
          </Fieldset>

          <Label>
            Location<Span>*</Span>:
            <Input
              type="text"
              name="location"
              value={location}
              placeholder="Type location"
              onChange={handleChange}
              required
            />
          </Label>
          {category === 'sell' && (
            <Label>
              Price<Span>*</Span>:
              <Input
                type="text"
                name="price"
                value={price}
                placeholder="Type price"
                onChange={handleChange}
                required
              />
            </Label>
          )}

          <Label htmlFor="uploadFile">
            Load the pet’s image<Span>*</Span>:
            {!photoPet ? (
              <AddImageButton type="button">
                <DefaultCross width="47.33" height="47.33" />
                <InputFile
                  multiple
                  id="uploadFile"
                  type="file"
                  name="photoPet"
                  // value={photoPet}
                  onChange={handleChange}
                  required
                />
              </AddImageButton>
            ) : null}
            {photoPet ? (
              <PetImage src={URL.createObjectURL(photoPet)} alt={petName} />
            ) : null}
          </Label>
          <Label>
            Comments<Span>*</Span>
            <Textarea
              name="comments"
              value={comments}
              placeholder="Type comment"
              onChange={handleChange}
              required
            ></Textarea>
          </Label>
          <ButtonsSubmitContainer>
            <ButtonsSubmitColor type="submit" onClick={handleSubmit}>
              Done
            </ButtonsSubmitColor>
            <ButtonsSubmitWhite type="button" onClick={() => setPage(true)}>
              Back
            </ButtonsSubmitWhite>
          </ButtonsSubmitContainer>
        </Form>
      )}
    </Container>
  );
};

export default ModalAddNotice;
