export const PetsList = ({ pets }) => {
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
