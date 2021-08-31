import React, { FC } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { RootState } from '../store';

import Game from './Game';
import Init from './Init';
import Layout from './Layout';
import Error from './Error';

const App: FC = () => {
  const { inputData, error } = useSelector(
    (state: RootState) => state.game,
    shallowEqual
  );
  const gameStarted = Boolean(inputData);

  return (
    <div className="App">
      <Layout>{error ? <Error /> : gameStarted ? <Game /> : <Init />}</Layout>
    </div>
  );
};

export default App;
