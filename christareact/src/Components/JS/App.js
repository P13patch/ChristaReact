import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import '../CSS/App.css';
import Home from './Home'
import Weddings from './Weddings'
import Portraits from './Portraits'
import Contact from './Contact'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ButtonAppBar from './AppBar'
import WGMarble from '../../Images/WG-Marble.jpg'

var WebFont = require('webfontloader')

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

WebFont.load({
  google: {
    families: ['Righteous', 'cursive']
  }
})



function App() {



  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className='webHeaderBox'>
          <img className="marbleImg" src={WGMarble} alt=''></img>
          <div className='webHeaderTextBox'>Christa Cutler Photography</div>
        </div>
        <Router>
          <ButtonAppBar></ButtonAppBar>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/Weddings' component={Weddings}></Route>
            <Route path='/Portraits' component={Portraits}></Route>
            <Route path='/Contact' component={Contact}></Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
