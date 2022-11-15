import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore
} from 'redux-persist';
import { authApi } from './auth/authAPI';
import { noticesApi } from './notices/noticesApi';
import notices from './notices/notices';

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
    notices,
    [noticesApi.reducerPath]: noticesApi.reducer,
  },
  // middlewareForLogger,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(noticesApi.middleware),

  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
