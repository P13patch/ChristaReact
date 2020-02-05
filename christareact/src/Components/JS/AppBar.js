import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../CSS/AppBar.css'

import Menu from './Menu'
import { makeStyles } from '@material-ui/core/styles';

import { Button, Typography, IconButton } from "./const"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        position: "relative",
        position: 'relative',
        top: '-60px',
        
    },

   appBar: {
        backgroundColor: "rgba(249, 249, 249, 0)",
        boxShadow: 'none',
        
   },

    title: {
        flexGrow: 1,
    },

    button: {
        color: '#9e7f00'
    }
}));

function ButtonAppBar() {
    const classes = useStyles();



  

    return (
        <div className={classes.root}>
            <AppBar position="static"  className={classes.appBar}>
                <Toolbar >
                    <Button className={classes.button} size="large" variant="text">Login</Button>
                    <Typography variant="h6"  className={classes.title}></Typography>
                    <Menu></Menu>
                </Toolbar>
            </AppBar>
           
        </div>
    );
}
export default ButtonAppBar