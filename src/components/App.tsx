import React, { FC, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { gridToString } from '../functions/formatter';
import { RootState } from '../store';

import Game from './Game';
import Init from './Init';
import Layout from './Layout';
import Error from './Error';
import Loader from './Loader';

const App: FC = () => {
  const { inputData, error, loading } = useSelector(
    (state: RootState) => state.game,
    shallowEqual,
  );
  const gameStarted = Boolean(inputData);

  useEffect(() => {
    console.log('-------------------------');
    if (inputData) {
      console.log('Generation', inputData?.generation);
      console.log(inputData && gridToString(inputData.grid));
    } else {
      console.log('Data is empty');
    }
    console.log('-------------------------');
  }, [inputData]);

  return (
    <div className="App">
      <Layout>
        {loading && <Loader />}
        {error ? <Error /> : gameStarted ? <Game /> : <Init />}
      </Layout>
    </div>
  );
};

export default App;
