import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import { Button, Typography, IconButton} from "./const"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="secondary-contrastText" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="secondary-constrastText" className={classes.title}>
              Christa Cutler Photography
            </Typography>
            <Button color="secondary-contrastText">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
