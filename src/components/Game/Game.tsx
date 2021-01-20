import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { calculateNextGeneration } from '../../functions/gamer';
import { RootState } from '../../store';
import { setNextGen } from '../../store/gameSlice';

const Game = () => {
  const inputData = useSelector(
    (state: RootState) => state.game.inputData,
    shallowEqual,
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    if (inputData) {
      const nextGen = calculateNextGeneration(inputData);
      dispatch(setNextGen(nextGen));
    }
  };

  return (
    <div>
      Game
      <button type="button" onClick={handleClick}>
        Generate next
      </button>
    </div>
  );
};

export default Game;
