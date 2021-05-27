import React from 'react'
import { MenuItems } from './MenuItems'
import { useState } from 'react'
import { Button } from '../Button'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState({
        clicked: false,
    })

    const handleClick = () => {
        setClick({clicked: !click.clicked})
    }

    return (
        <nav className="NavBarItems">
            <h1 className="navbar-logo">React <i className="fab fa-react"></i></h1>
            <div className="menu-icon" onClick = {handleClick}>
                <i className={click.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click.clicked ? 'nav-menu active' : 'nav-menu'}>
                { MenuItems.map((item) => {
                    return(                 // map always return
                        <li>
                            <a className={ item.cName } href={ item.url }>
                                {item.title}
                            </a>
                        </li>
                        )
                })}
            </ul>
            <Button> SignUp </Button>
        </nav>
    )
}

export default Navbar
