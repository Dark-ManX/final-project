import PropTypes from 'prop-types';

export const PetsList = ({ pets }) => {
  console.log(pets);
  return (
    <ul>
      {pets.map(({ _id, photoPet, name, birth, breed, comments }) => {
        return (
          <li key={_id}>
            <img src={photoPet} alt={name} />
            <button>Delete</button>
            <div>
              <p>Name:{name}</p>
              <p>Date of birth:{birth}</p>
              <p>Breed:{breed}</p>
              <p>Comments:{comments}</p>
            </div>
          </li>
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
