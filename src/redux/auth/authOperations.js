import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://team-api-blended2.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    createUser: builder.mutation({
      query: newUser => ({
        url: 'register',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
    registerUser: builder.mutation({
      query: userId => ({
        url: `/register/${userId}`,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
  }),
});
export const { useCreateUserMutation, useRegisterUserMutation } = authApi;
// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://team-api-blended2.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// // POST create: '/register',
// const create = createAsyncThunk(
//   'auth/create',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/register', credentials);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // PATCH register: '/register/:id',
// const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await axios.patch(`/register/`, credentials);
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// // POST  login: '/login',
// const logIn = createAsyncThunk('/login', async (credentials, thunkAPI) => {
//   try {
//     const { data } = await axios.post('/login', credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
// // GET logout: '/logout',
// const logOut = createAsyncThunk('/logout', async (credentials, thunkAPI) => {
//   try {
//     await axios.post('/logout');
//     token.unset();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// // GET current: '/current',
// const fetchCurrentUser = createAsyncThunk('/refresh', async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const persistedToken = state.auth.token;

//   if (persistedToken === null) {
//     /* console.log('Токена нет, уходим из fetchCurrentUser'); */
//     return thunkAPI.rejectWithValue();
//   }

//   token.set(persistedToken);
//   try {
//     const { data } = await axios.get('/current');
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue();
//   }
// });

// const operations = {
//   create,
//   register,
//   logIn,
//   logOut,
//   fetchCurrentUser,
// };

// export default operations;
