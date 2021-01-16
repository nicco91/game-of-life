import React, { FC, useState } from 'react';
import { parseInput } from './functions/parser';
import { InputData } from './models/inputData';

const App: FC = () => {
  const [inputData, setInputData] = useState<InputData>();

  const handleChange = async (files: FileList | null) => {
    if (files && files.length) {
      const data = await parseInput(files[0]);
      setInputData(data);
      console.log(data);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div className="App">
      <input type="file" onChange={(e) => handleChange(e.target.files)} />
    </div>
  );
};

export default App;
