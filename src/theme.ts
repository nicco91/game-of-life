import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  palette: {
    primary: {
      main: 'rgb(235, 0, 139)',
      dark: 'rgb(168, 0, 98)',
      background: 'rgb(235, 0, 139, 0.15)',
      contrastText: '#ffffff',
    },
    secondary: {
      main: 'rgb(0, 188, 241)',
      dark: 'rgb(0, 133, 170)',
      background: 'rgb(0, 188, 241, 0.15)',
      contrastText: '#ffffff',
    },
  },
  background: {
    base: '#fafafa',
    dark: '#e0e0e0',
  },
  border: {
    color: '#afafaf',
  },
  typography: {
    color: '#202020',
    fontSize: '16px',
  },
};

export default theme;
