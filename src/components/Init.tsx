import React from 'react';
import { useDispatch } from 'react-redux';
import { parseInput } from '../functions/parser';
import { startGame } from '../store/gameSlice';
import FileUpload from './ui/FileUpload';
import Subtitle from './ui/Subtitle';

const Init = () => {
  const dispatch = useDispatch();

  const handleUpload = async (file?: File) => {
    if (file) {
      const data = await parseInput(file);
      if (data) {
        dispatch(startGame(data));
      }
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
      <Subtitle>Upload an input file to start the game!</Subtitle>
      <FileUpload onUpload={handleUpload} />
    </div>
  );
};

export default Init;
