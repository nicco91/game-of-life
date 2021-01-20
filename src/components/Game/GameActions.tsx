import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { FiPower, FiArrowRight } from 'react-icons/fi';
import styled from 'styled-components';
import { endGame, generateNext } from '../../store/gameSlice';
import Button from '../ui/Button';

type Props = {
  className?: string;
};

const GameActions: FC<Props> = ({ className }) => {
  const dispatch = useDispatch();

  const handleNextGen = () => {
    dispatch(generateNext());
  };

  const handleQuit = () => {
    dispatch(endGame());
  };

  return (
    <div className={className}>
      <Button
        variant="secondary"
        type="button"
        startIcon={<FiPower />}
        onClick={handleQuit}
      >
        Quit game
      </Button>
      <Button
        variant="primary"
        type="button"
        endIcon={<FiArrowRight />}
        onClick={handleNextGen}
      >
        Generate next
      </Button>
    </div>
  );
};

export default styled(GameActions)`
  padding-top: 1rem;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  > *:not(:last-child) {
    margin-right: 1.5rem;
  }
`;
