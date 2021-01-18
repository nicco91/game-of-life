import { InputData } from '../models/inputData';
import { Grid } from '../models/grid';

let fileReader: FileReader;

const _readFile = async (file: File) => {
  return new Promise<string[] | undefined>((resolve, reject) => {
    try {
      fileReader = new FileReader();
      fileReader.onloadend = () => {
        try {
          const content = fileReader.result;
          const textContent = content?.toString();
          const rows = textContent?.split('\n');
          resolve(rows);
        } catch (err) {
          reject(err);
        }
      };
      fileReader.readAsText(file);
    } catch (err) {
      reject(err);
    }
  });
};

const _getGenerationNum = (generationRow: string) => {
  return parseInt(generationRow.split(' ')[1].split(':')[0]);
};

const _getGridSize = (gridSizeRow: string) => {
  const [rows, cols] = gridSizeRow.split(' ');
  return { rows: parseInt(rows), cols: parseInt(cols) };
};

const _getGrid = (gridRows: string[], cols: number) => {
  return gridRows.reduce<Grid>((acc, row) => {
    const parsedRow = Array.from(row)
      .slice(0, cols)
      .map((char) => char === '*');
    acc.push(parsedRow);
    return acc;
  }, []);
};

export const parseInput = async (file: File) => {
  const fileRows = await _readFile(file);
  if (fileRows) {
    const { cols, rows } = _getGridSize(fileRows[1]);
    const gridRows = fileRows.slice(2, 2 + rows);
    return {
      generation: _getGenerationNum(fileRows[0]),
      rows,
      cols,
      grid: _getGrid(gridRows, cols),
    } as InputData;
  }
  return undefined;
};
