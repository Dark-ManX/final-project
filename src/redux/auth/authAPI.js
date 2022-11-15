import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// const create = createAsyncThunk(
//   'auth/create',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/register', credentials);
//       console.log('first', res);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://team-api-blended2.herokuapp.com',
  }),
  tagTypes: ['user'],

  endpoints: build => ({
    registerUser: build.mutation({
      query: user => ({
        url: '/register',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});
// IS BEING EDITED
// const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/register/:id', credentials);
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// const logIn = createAsyncThunk('/login', async (credentials, thunkAPI) => {
//   try {
//     const { data } = await axios.post('/login', credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// const logOut = createAsyncThunk('/logout', async (credentials, thunkAPI) => {
//   try {
//     await axios.post('/logout');
//     token.unset();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// const updateInfoUser = createAsyncThunk('/refresh', async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const persistedToken = state.auth.token;

// if (persistedToken === null) {
/* console.log('Токена нет, уходим из fetchCurrentUser'); */
//   return thunkAPI.rejectWithValue();
// }

// token.set(persistedToken);
// try {
//   const { data } = await axios.get('/current');
//   return data;
// } catch (error) {

// TODO: Добавить обработку ошибки error.message

//   }
// });

export const { useRegisterUserMutation } = authApi;

// export default operations;
