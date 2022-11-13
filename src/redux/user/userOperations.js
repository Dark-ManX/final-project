// import axios from 'axios';

// GET @ /user
const getUser = () => async dispatch => {
  dispatch(fetchRequest());

//   try {
//     const { data } = await axios.get('/user');

//     dispatch(fetchSuccess(data));
//   } catch (error) {
//     dispatch(fetchError(error.message));
//   }
// };

// // PATCH @ /updateUserInfo
// // IS BEING EDITED

// const updateUser = contacts => dispatch => {
//   dispatch(addContactRequest());

//   axios
//     .post('/contacts', contacts)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error.message)));
// };

// // GET @ /get pets
// const getPets = createAsyncThunk('/userPets', async credentials => {
//   {
//     try {
//       const { data } = await axios.get('/pets');
//       return data;
//     } catch (error) {}
//   }
// });

<<<<<<< Updated upstream
// POST @ /add pet
const addPets = createAsyncThunk('/userPets', async credentials => {
  {
    try {
      const { data } = await axios.post('/pets');
      return data;
    } catch (error) {}
  }
});
// PATCH @ /add pet
const changePets = createAsyncThunk('/pet', async () => {
  try {
    await axios.patch('/pets/:id');
  } catch (error) {}
});

// POST @ /delete pet
const deletePets = createAsyncThunk('/pet', async () => {
  try {
    await axios.post('/pets/:id');
  } catch (error) {}
});
const operations = {
  getUser,
  updateUser,
  getPets,
  addPets,
  changePets,
  deletePets,
};

export default operations;
=======
// // POST @ /add pet
// const addPets = createAsyncThunk('/userPets', async credentials => {
//   {
//     try {
//       const { data } = await axios.post('/pets');
//       return data;
//     } catch (error) {}
//   }
// });
// // PATCH @ /delete pet
// const changePets = createAsyncThunk('/pet', async () => {
//   try {
//     await axios.patch('/pets/:id');
//   } catch (error) {}
// });

// // POST @ /delete pet
// const deletePets = createAsyncThunk('/pet', async () => {
//   try {
//     await axios.post('/pets/:id');
//   } catch (error) {}
// });
>>>>>>> Stashed changes
