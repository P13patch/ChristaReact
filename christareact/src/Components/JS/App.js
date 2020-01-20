import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import '../CSS/App.css';
import Home from './Home'
import Weddings from './Weddings'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ButtonAppBar from './AppBar'

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
        <Router>
        <ButtonAppBar></ButtonAppBar>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/Weddings' component={Weddings}></Route>
            <Route></Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
