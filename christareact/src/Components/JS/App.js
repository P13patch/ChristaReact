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
  const [openMenu, setOpenMenu] = useState(false)

  const showMenu = event => {
      document.getElementById("menuBody").style.zIndex = "2"
      setOpenMenu(true)
    } 

  function menuField(openMenu) {
    
    if (openMenu === true) {
    
      return (
        <div>
          <div>menu item</div>
          <button>MENU</button>
          <div>menu item</div>
        </div>
      )
    }

  }


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <ButtonAppBar state={showMenu}></ButtonAppBar>
        </header>
        <div>
          <div className="appBody">
            <div>app body</div>

          </div>
          <div className="menuBody" id="menuBody">
            {menuField(openMenu)}
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
