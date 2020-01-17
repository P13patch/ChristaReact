import React, {useState} from 'react'

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

function ButtonAppBar(props) {
  
    const [openMenue, setOpenMenue] = useState(false)
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Button>Login</Button>

                    <Typography variant="h6" color="secondary-constrastText" className={classes.title}>
                        Christa Cutler Photography
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={props.state}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default ButtonAppBar