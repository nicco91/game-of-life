import React, { FC } from 'react';
import { Grid as GridType } from '../../../models/grid';
import GridCell from './GridCell';
import GridContainer from './GridContainer';
import GridRow from './GridRow';

type Props = {
  grid: GridType;
};

const Grid: FC<Props> = ({ grid }) => {
  // const size =

  return (
    <GridContainer>
      {grid.map((gridRow, rowIndex) => (
        <GridRow height={30} key={rowIndex}>
          {gridRow.map((gridCell, cellIndex) => (
            <GridCell alive={gridCell} size={30} key={cellIndex} />
          ))}
        </GridRow>
      ))}
    </GridContainer>
  );
};

export default Grid;
