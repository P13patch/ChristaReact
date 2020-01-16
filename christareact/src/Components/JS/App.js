import React from 'react';

import '../CSS/App.css';
import ButtonAppBar from './AppBar'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff8dc',
      light: '#ffffff',
      dark: '#ccc5aa',
      constrastText: '#5c5746',
    },
    secondary: {
      main: '#d4af37',
      light: '#ffe168',
      constrastText: '#393317',
    }
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <ButtonAppBar></ButtonAppBar>

        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
