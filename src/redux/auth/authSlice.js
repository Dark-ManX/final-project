import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authOperations';

const initialState = {
  user: { email: null, id: null },
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF3ZXJAbWFpbC5jb20iLCJpYXQiOjE2Njg5MDMwNTEsImV4cCI6MTY2ODkzOTA1MX0.gRcd-B2lrIqg8odMK9OKY4HpveMY01vaAhs1ofqrd8Y',
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
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = true;
      }
    );
    builder.addMatcher(authApi.endpoints.logOutUser.matchFulfilled, state => {
      state.user = { name: null, email: null, city: null, phone: null };
      state.token = null;

      state.isLoading = false;
    });
    builder.addMatcher(authApi.endpoints.currentUser.matchPending, state => {
      state.isFetchingCurrent = false;
    });
    builder.addMatcher(
      authApi.endpoints.currentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLoading = true;
        state.isFetchingCurrent = true;
      }
    );
  },
});

export default authSlice.reducer;
