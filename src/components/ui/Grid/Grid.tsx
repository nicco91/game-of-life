import React, { FC, useCallback, useState } from 'react';
import { Grid as GridType } from '../../../models/grid';
import GridCell from './GridCell';
import GridContainer from './GridContainer';
import GridRow from './GridRow';

type Props = {
  grid: GridType;
  cols: number;
  rows: number;
  additionalHSpace?: number;
  additionalWSpace?: number;
};

const Grid: FC<Props> = ({
  grid,
  cols,
  rows,
  additionalHSpace = 0,
  additionalWSpace = 0,
}) => {
  const [size, setSize] = useState(30);

  const measureContainer = useCallback(
    (node: HTMLDivElement | null) => {
      if (node != null) {
        const { clientHeight, clientWidth } = node;
        const cellHeight = (clientHeight - additionalHSpace) / rows;
        const cellWidth = (clientWidth - additionalWSpace) / cols;
        setSize(Math.min(cellHeight, cellWidth));
      }
    },
    [cols, rows, additionalHSpace, additionalWSpace]
  );

  return (
    <GridContainer ref={measureContainer}>
      {grid.map((gridRow, rowIndex) => (
        <GridRow height={size} key={rowIndex}>
          {gridRow.map((gridCell, cellIndex) => (
            <GridCell alive={gridCell} size={size} key={cellIndex} />
          ))}
        </GridRow>
      ))}
    </GridContainer>
  );
};

export default Grid;
