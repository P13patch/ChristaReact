import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../CSS/Menu.css'

import { IconButton } from "./const"
import MenuIcon from '@material-ui/icons/Menu';




function Menu(props) {
    const [openMenu, setOpenMenu] = useState(false)

    const showMenu = event => {
        if (openMenu === false) {
            document.getElementById("menuBody").style.zIndex = "2"
        setOpenMenu(true)
        }
        else {
            setOpenMenu(false)
        }
        
    }

    const menuBody  = openMenu => {

        if (openMenu === true) {

            return (
                <div className="menuBody">
                    
                        <Link className='menuButton' to='/' onClick={() => {refreshPage()}}>Home</Link>
                        <Link className='menuButton' to='/Weddings' onClick={() => {refreshPage()}}>Weddings</Link>
                        <Link className='menuButton' to='/Portraits' onClick={() => {refreshPage()}}>Portraits</Link>
                        <Link className='menuButton' to='/Contact' onClick={() => {refreshPage()}}>Contact</Link>
                    
                </div>
            )
        }

    }

    const refreshPage = () => {
        
        setOpenMenu(false)
    }

    return (
        <div>
            <div>
                <IconButton onClick={showMenu} size="medium">
                    <MenuIcon style={{color: '9e7f00'}} fontSize="large"></MenuIcon>
                </IconButton>

            </div>
            <div id="menuBody">
                {menuBody(openMenu)}
            </div>
        </div>
    )

}

export default Menu