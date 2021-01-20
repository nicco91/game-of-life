import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Grid } from '../models/grid';
import { InputData } from '../models/inputData';

interface GameState {
  inputData?: InputData;
}

const initialState: GameState = {};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame(state, action: PayloadAction<InputData>) {
      state.inputData = action.payload;
    },
    setNextGen(state, action: PayloadAction<Grid>) {
      if (state.inputData) {
        state.inputData.generation += 1;
        state.inputData.grid = action.payload;
      }
    },
    endGame(state, _) {
      state.inputData = undefined;
    },
  },
});

export const { startGame, endGame, setNextGen } = gameSlice.actions;

export default gameSlice.reducer;
