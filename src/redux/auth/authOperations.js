import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://team-api-blended2.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const create = createAsyncThunk('/create', async credentials => {
  try {
    const { data } = await axios.post('auth/register', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

// IS BEING EDITED
const register = createAsyncThunk('/register', async credentials => {
  try {
    const { data } = await axios.post('auth/register/:id', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const logIn = createAsyncThunk('/login', async credentials => {
  try {
    const { data } = await axios.post('auth/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const logOut = createAsyncThunk('/logout', async () => {
  try {
    await axios.post('auth/logout');
    token.unset();
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const updateInfoUser = createAsyncThunk('/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    /* console.log('Токена нет, уходим из fetchCurrentUser'); */
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get('/current');
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
