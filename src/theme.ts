import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  palette: {
    primary: {
      main: 'rgb(235, 0, 139)',
      background: 'rgb(235, 0, 139, 0.15)',
      contrastText: '#ffffff',
    },
    secondary: {
      main: 'rgb(0, 188, 241)',
      background: 'rgb(0, 188, 241, 0.15)',
      contrastText: '#ffffff',
    },
  },
  background: {
    color: '#fafafa',
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
