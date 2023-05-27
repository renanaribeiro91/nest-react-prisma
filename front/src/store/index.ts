import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/users';

export const store = configureStore({
  reducer: rootReducer,
})

