import React, { FC } from 'react';
import styled from 'styled-components';
import Subtitle from '../ui/Subtitle';

type Props = {
  generation: number;
  className?: string;
};

const GameHeading: FC<Props> = ({ generation, className }) => {
  return (
    <div className={className}>
      <Subtitle>Generation: {generation}</Subtitle>
    </div>
  );
};

export default styled(GameHeading)`
  margin-bottom: 1.5rem;
`;
