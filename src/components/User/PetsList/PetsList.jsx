import PropTypes from 'prop-types';

import remove from 'icons/remove.svg';

import { Item, Text, Image, DeleteBtn, DeleteSvg } from './PetsList.styled';

export const PetsList = ({ pets }) => {
  console.log(pets);
  return (
    <ul>
      {pets.map(({ _id, photoPet, name, birth, breed, comments }) => {
        return (
          <Item key={_id}>
            <Image
              src="https://media.wired.com/photos/5e1f66f3736d3e00096ebb11/master/pass/Science_techintwocats-98125846.jpg"
              alt={name}
            />
            <DeleteBtn>
              <DeleteSvg src={remove} alt="removePet" />
            </DeleteBtn>
            <div>
              <Text>Name:{name}</Text>
              <Text>Date of birth:{birth}</Text>
              <Text>Breed:{breed}</Text>
              <Text>Comments:{comments}</Text>
            </div>
          </Item>
        );
      })}
    </ul>
  );
};

PetsList.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      photoPet: PropTypes.string,
      name: PropTypes.string,
      birth: PropTypes.string,
      breed: PropTypes.string,
      comments: PropTypes.string,
    })
  ),
};