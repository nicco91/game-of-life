import { Grid } from '../models/grid';

export const gridToString = (grid: Grid) => {
  return grid
    .map((gridRow) =>
      gridRow.map((gridCell) => (gridCell ? '*' : '.')).join(''),
    )
    .join('\n');
};
