import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { indigo } from '@mui/material/colors';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    action: {
      disabled: '#FFFFFF',
      action: {
        active: indigo[100],
        activeOpacity: 1,
        hover: indigo[100],
        hoverOpacity: 0.7,
        focus: indigo[100],
        focusOpacity: 1,
        selected: indigo[100],
        selectedOpacity: 1
      },
    },
    primary: {
      main: '#D5896F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#ffffff',
      light: '#f3e5f5',
    },
    background: {
      default: '#FFDDA1',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#540804',
      secondary: '#031D44',
      disabled: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 500,
    fontWeightRegular: 600,
    fontWeightBold: 900,
    fontWeightMedium: 700,
    h1: {
      fontWeight: 600,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals