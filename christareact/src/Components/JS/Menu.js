import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../CSS/Menu.css'

import { IconButton } from "./const"
import MenuIcon from '@material-ui/icons/Menu';




function Menu(props) {
    const [openMenu, setOpenMenu] = useState(false)

    const showMenu = event => {
        document.getElementById("menuBody").style.zIndex = "2"
        setOpenMenu(true)
    }

    const menuBody  = openMenu => {

        if (openMenu === true) {

            return (
                <div className="menuBody">
                    <nav>
                        <button className='homeButton' component={Link} to='/'>Home</button>
                        <button component={Link} to='/Weddings'>Weddings</button>
                    </nav>
                </div>
            )
        }

    }


    return (
        <div>
            <div>
                <IconButton onClick={showMenu}>
                    <MenuIcon></MenuIcon>
                </IconButton>

            </div>
            <div id="menuBody">
                {menuBody(openMenu)}
            </div>
        </div>
    )

}

export default Menu