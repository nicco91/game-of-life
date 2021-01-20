import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { InputData } from '../../models/inputData';
import { RootState } from '../../store';

import Grid from '../ui/Grid';
import Subtitle from '../ui/Subtitle';
import GameActions from './GameActions';
import GameContainer from './GameContainer';

const Game = () => {
  const inputData = useSelector(
    (state: RootState) => state.game.inputData as InputData,
    shallowEqual,
  );

  const { grid, cols, rows } = inputData;

  return (
    <GameContainer>
      <Subtitle>Generation: {inputData.generation}</Subtitle>
      <Grid grid={grid} cols={cols} rows={rows} additionalHSpace={16} />
      <GameActions />
    </GameContainer>
  );
};

export default Game;
