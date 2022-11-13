import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authOperations';

const initialState = {
  user: { email: null, name: null, city: null, phone: null },
  token: null,
  isLoading: false,
  isLoggedIn: false,
  isFetchingCurrent: true,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.createUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = false;
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = false;
        state.isLoading = true;
      }
    );
  },
});

export default authSlice.reducer;
