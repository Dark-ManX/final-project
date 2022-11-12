import { configureStore } from '@reduxjs/toolkit';
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
    [authApi.reducerPath]: authApi.reducer,
  },
  // middlewareForLogger,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),

  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
