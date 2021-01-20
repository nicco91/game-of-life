import React, { FC } from 'react';
import cellImage from '../../assets/cell.png';

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

const AppLogo: FC<Props> = ({ className, width = 100, height = 100 }) => {
  return (
    <img
      className={className}
      src={cellImage}
      width={width}
      height={height}
      alt="Game of Life"
    />
  );
};

export default AppLogo;
