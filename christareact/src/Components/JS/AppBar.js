import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../CSS/AppBar.css'

import Menu from './Menu'
import { makeStyles } from '@material-ui/core/styles';

import { Button, Typography, IconButton } from "./const"
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

function ButtonAppBar() {
    const classes = useStyles();



  

    return (
        <div className={classes.root}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Button>Login</Button>

                    <Typography variant="h6" color="secondary-constrastText" className={classes.title}>
                        Christa Cutler Photography
                    </Typography>
                    <Menu></Menu>
                </Toolbar>
            </AppBar>
           
        </div>
    );
}
export default ButtonAppBar