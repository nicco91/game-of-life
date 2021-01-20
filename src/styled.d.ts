import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        main: string;
        background: string;
        contrastText: string;
      };
    };
    background: {
      color: string;
    };
    typography: {
      color: string;
      fontSize: string;
    };
    border: {
      color: string;
    };
  }
}
