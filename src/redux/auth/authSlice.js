import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authOperations';

const initialState = {
  user: { email: null, password: null, id: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrent: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.data.user;
        state.id = payload.data.id;
        state.isLoggedIn = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.addUserInfo.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.data.user;
        state.user = payload.data.id;
        state.token = payload.data.user.token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.id = payload.id;
        state.token = payload.token.token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.logOutUser.matchFulfilled,
      (state, _) => {
        state.user = {
          name: null,
          email: null,
          city: null,
          phone: null,
          id: null,
        };
        state.token = null;

        state.isLoggedIn = false;
        state.isLoading = false;
      }
    );
    builder.addMatcher(authApi.endpoints.currentUser.matchPending, state => {
      state.isFetchingCurrent = false;
    });
    builder.addMatcher(
      authApi.endpoints.currentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;

        state.isFetchingCurrent = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.getUserInfo.matchFulfilled,
      (state, { payload }) => {
        // state.user = payload.data.user;
        // state.token = payload.token;
        // state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.getUserPets.matchFulfilled,
      (state, { payload }) => {
        // state.user = payload.data.user;
        // state.token = payload.token;
        // state.isLoggedIn = true;
      }
    );
  },
});

export default authSlice.reducer;
