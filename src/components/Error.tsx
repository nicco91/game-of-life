import React, { FC } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import styled from 'styled-components';
import Button from './ui/Button';
import Link from './ui/Link';
import Subtitle from './ui/Subtitle';
import { ReactComponent as FileErrorImg } from '../assets/file-error.svg';
import { useDispatch } from 'react-redux';
import { endGame } from '../store/gameSlice';

type Props = {
  className?: string;
};

const Error: FC<Props> = ({ className }) => {
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(endGame());
  };

  return (
    <div className={className}>
      <FileErrorImg width={200} height={200} />
      <Subtitle>Invalid input file!</Subtitle>
      <p>Please, check your input file and try again.</p>
      <p>
        Only text files are supported. Read more about file specs{' '}
        <Link
          href="https://github.com/extendi/game-of-life"
          target="_blank"
          rel="noreferrer"
        >
          here
        </Link>
        .
      </p>
      <Button
        variant="secondary"
        startIcon={<FiArrowLeft />}
        className="button"
        onClick={handleBack}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default styled(Error)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 0;
  }

  .button {
    margin-top: 2rem;
  }
`;
