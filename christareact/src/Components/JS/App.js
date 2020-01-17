import React, { useState } from 'react';

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
  const [openMenue, setOpenMenue] = useState(false)

  
  const menueClick = event => {
    setOpenMenue(true)
  }

  function menueField(openMenue) {
    
    if (openMenue === true) {
    
      return (
        <div>
          <div>menue item</div>
          
          <div>menue item</div>
        </div>
      )
    }

  }


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <ButtonAppBar state={menueClick}></ButtonAppBar>
        </header>
        <div>
          <div className="appBody">
            <div>app body</div>

          </div>
          <div className="menueBody">
            {menueField(openMenue)}
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
