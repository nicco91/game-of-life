import { configureStore, combineReducers } from '@reduxjs/toolkit';

import gameReducer from './gameSlice';

const rootReducer = combineReducers({
  game: gameReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
