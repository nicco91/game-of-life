import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { InputData } from '../../models/inputData';
import { RootState } from '../../store';

import Grid from '../ui/Grid';
import GameActions from './GameActions';
import GameContainer from './GameContainer';
import GameHeading from './GameHeading';

const Game = () => {
  const inputData = useSelector(
    (state: RootState) => state.game.inputData as InputData,
    shallowEqual,
  );

  return (
    <GameContainer>
      <GameHeading generation={inputData.generation} />
      <Grid grid={inputData.grid} />
      <GameActions />
    </GameContainer>
  );
};

export default Game;
