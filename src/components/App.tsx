import React, { FC, useEffect, useState } from 'react';
import { gridToString } from '../functions/formatter';
import { calculateNextGeneration } from '../functions/gamer';
import { parseInput } from '../functions/parser';
import { InputData } from '../models/inputData';
import FileUpload from './ui/FileUpload';

const App: FC = () => {
  const [inputData, setInputData] = useState<InputData>();

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

  const handleUpload = async (file?: File) => {
    if (file) {
      const data = await parseInput(file);
      setInputData(data);
    } else {
      console.log('No file selected');
    }
  };

  const handleClick = () => {
    if (inputData) {
      const nextGen = calculateNextGeneration(inputData);
      setInputData({
        ...inputData,
        generation: inputData.generation + 1,
        grid: nextGen,
      });
      // console.log(nextGen);
    }
  };

  return (
    <div className="App">
      <FileUpload onUpload={handleUpload} />
      <button onClick={handleClick}>Calc next gen</button>
    </div>
  );
};

export default App;
