import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { calculateNextGeneration } from '../functions/gamer';
import { parseInput } from '../functions/parser';
import { InputData } from '../models/inputData';

interface GameState {
  inputData?: InputData;
  loading: boolean;
  error: boolean;
}

const initialState: GameState = {
  loading: false,
  error: false,
};

export const startGame = createAsyncThunk<InputData, File>(
  'game/start',
  async (file) => {
    const data = await parseInput(file);
    return data;
  },
);

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    generateNext(state) {
      if (state.inputData) {
        const nextGen = calculateNextGeneration(state.inputData);
        state.inputData.generation += 1;
        state.inputData.grid = nextGen;
      }
    },
    endGame(state) {
      state.inputData = undefined;
      state.loading = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(startGame.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(startGame.fulfilled, (state, action) => {
        state.inputData = action.payload;
        state.loading = false;
      })
      .addCase(startGame.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { endGame, generateNext } = gameSlice.actions;

export default gameSlice.reducer;
