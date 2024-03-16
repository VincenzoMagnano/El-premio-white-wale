import React from 'react'
import NavbarItems from '../NavbarItems/NavbarItems'
import Sidebar from '../Sidebar/Sidebar'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  ">
                <div className="container-fluid">
                    <a
                        className="navbar-brand position-des design-logo"
                        href="#">
                        <img
                            src="Senza titolo-1.png"
                            width={200}
                            alt="White Wale" />
                    </a>
                   <NavbarItems/>
                  
                </div>
            </nav>
        </div>
    )
}

export default Navbar
