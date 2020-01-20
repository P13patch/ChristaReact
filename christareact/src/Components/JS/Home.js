import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import '../CSS/Home.css'
import ButtonAppBar from './AppBar'






function Home() {
    const [openMenu, setOpenMenu] = useState(false)

    const showMenu = event => {
        document.getElementById("menuBody").style.zIndex = "2"
        setOpenMenu(true)
    }

    function menuField(openMenu) {

        if (openMenu === true) {

            return (
                <div>
                    <nav>
                        <button component={Link} to='/'>Home</button>
                        <button component={Link} to='/Weddings'>Weddings</button>
                    </nav>
                </div>
            )
        }

    }


    return (
<div>
        <header>
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
</div>
    )
}

export default Home