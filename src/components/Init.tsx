import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { startGame } from '../store/gameSlice';
import FileUpload from './ui/FileUpload';
import Subtitle from './ui/Subtitle';

type Props = {
  className?: string;
};

const Init: FC<Props> = ({ className }) => {
  const dispatch = useDispatch();

  const handleUpload = async (file?: File) => {
    if (file) {
      dispatch(startGame(file));
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div className={className}>
      <Subtitle>Upload an input file to start the game!</Subtitle>
      <FileUpload className="uploader" onUpload={handleUpload} />
    </div>
  );
};

export default styled(Init)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .uploader {
    margin-top: 2rem;
  }
`;
