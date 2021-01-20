import 'styled-components';

declare module 'styled-components' {
  interface ThemePalette {
    main: string;
    dark: string;
    background: string;
    contrastText: string;
  }

  export interface DefaultTheme {
    palette: {
      primary: ThemePalette;
      secondary: ThemePalette;
    };
    background: {
      base: string;
      dark: string;
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
