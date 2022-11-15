
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from './auth/authOperations';
import authSlice from './auth/authSlice';

const middlewareForLogger = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore
} from 'redux-persist';
import { authApi } from './auth/authAPI';

// const middlewareForLogger = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const authPersistConfig = {
//   key: 'authApi',
//   storage,
//   whitelist: ['token'],
// };


export const store = configureStore({
  reducer: {
    // pets: petsReducer,

    auth: persistReducer(authPersistConfig, authSlice),
    [authApi.reducerPath]: authApi.reducer,
  },
  middlewareForLogger,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    /* logger, */ authApi.middleware,
  ],

    [authApi.reducerPath]: authApi.reducer,
  },
  // middlewareForLogger,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),


  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
