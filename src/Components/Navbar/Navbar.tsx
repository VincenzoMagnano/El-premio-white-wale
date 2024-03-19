import React from 'react'
import NavbarItems from '../NavbarItems/NavbarItems'
import Sidebar from '../Sidebar/Sidebar'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  ">
                <div className="container-fluid">
                    <Link to='/samplepack'>
                    <a
                        className="navbar-brand position-des design-logo"
                        href="/samplepack">
                        <img
                            src="Senza titolo-1.png"
                            width={200}
                            alt="White Wale" />
                    </a>
                    </Link>
                   <NavbarItems/>
                  
                </div>
            </nav>
        </div>
    )
}

export default Navbar
