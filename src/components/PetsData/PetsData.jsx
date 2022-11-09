import { PetsList } from 'components/PetsList/PetsList';

export const PetsData = () => {
  return (
    <>
      <h2>My pets:</h2>
      <button type="button">Add pet</button>{' '}
      {/* відкриває модалку - компонент ModalAddsPet */}
      <PetsList />
    </>
  );
};
