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
        zIndex: 3,
        
    },
   
    title: {
        flexGrow: 1,
        color: '#9e7f00',
        
        fontSize: '3vw',
    },

    button: {
        color: '#9e7f00'
    }
}));

function ButtonAppBar() {
    const classes = useStyles();



  

    return (
        <div className={classes.root}>
            <AppBar position="static"  className='appBar'>
                <Toolbar >
                    <Button className={classes.button}>Login</Button>

                    <Typography variant="h6"  className={classes.title}>
                        Christa Cutler Photography
                    </Typography>
                    <Menu></Menu>
                </Toolbar>
            </AppBar>
           
        </div>
    );
}
export default ButtonAppBar