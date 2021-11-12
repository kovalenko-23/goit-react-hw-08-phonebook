import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import PhoneBookReducer from './phonebook/phonebook-reducer';
import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';
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
import { authReducer } from './auth';
import { phonebookReducer } from './phonebook';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

export const store = configureStore({
  reducer: {
    phonebookReducer: phonebookReducer,
    authReducer: persistReducer(authPersistConfig, authReducer),
    phoneBook: PhoneBookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
