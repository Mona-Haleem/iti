import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1988d2 !important',
    },
    background: {
      default: '#d5dfef !important',
      paper: '#eaeaea !important',
    },
    secondary: {
      main: '#999955 !imortant', 
    },
    text:{
      primary:'#7a90ff !important',
      secondary:'#aac '
    }
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#232424',
      paper: '#1e1e1e',
    },
    secondary: {
      main: '#1976d2',
    },
    text:{
      primary:'#fff',
      secondary:'#afa',
    }
  },
});

//error-main  text-primary-secondary 