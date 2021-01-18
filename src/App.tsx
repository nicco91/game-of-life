import React, { FC, useEffect, useState } from 'react';
import { gridToString } from './functions/formatter';
import { calculateNextGeneration } from './functions/gamer';
import { parseInput } from './functions/parser';
import { InputData } from './models/inputData';

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

  const handleChange = async (files: FileList | null) => {
    if (files && files.length) {
      const data = await parseInput(files[0]);
      setInputData(data);
      // console.log('Parsed input', 'rows', data?.rows, 'cols', data?.cols);
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
      <input type="file" onChange={(e) => handleChange(e.target.files)} />
      <button onClick={handleClick}>Calc next gen</button>
    </div>
  );
};

export default App;
