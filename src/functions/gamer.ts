import { InputData } from '../models/inputData';

const _getAliveNeighborsCount = (
  { grid, rows, cols }: InputData,
  rowIndex: number,
  colIndex: number,
) => {
  let aliveNeighborsCount = 0;

  for (let row = rowIndex - 1; row <= rowIndex + 1; row++) {
    for (let col = colIndex - 1; col <= colIndex + 1; col++) {
      const isCell = row === rowIndex && col === colIndex;
      const isInBound = row >= 0 && row < rows && col >= 0 && col < cols;
      if (!isCell && isInBound && grid[row][col]) {
        aliveNeighborsCount++;
      }
    }
  }

  return aliveNeighborsCount;
};

const _getAliveNeighborsCountGrid = (inputData: InputData) => {
  return inputData.grid.map((gridRow, rowIndex) =>
    gridRow.map((gridCell, colIndex) =>
      _getAliveNeighborsCount(inputData, rowIndex, colIndex),
    ),
  );
};

export const calculateNextGeneration = (inputData: InputData) => {
  const aliveNeighborsCount = _getAliveNeighborsCountGrid(inputData);
  return inputData.grid.map((gridRow, rowIndex) =>
    gridRow.map((gridCell, colIndex) => {
      const cellAliveNeighbors = aliveNeighborsCount[rowIndex][colIndex];
      return cellAliveNeighbors === 3 || (gridCell && cellAliveNeighbors === 2);
    }),
  );
};
