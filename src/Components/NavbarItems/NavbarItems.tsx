import React from 'react'
import './NavbarItems.css'
import { Link } from 'react-router-dom'
const NavbarItems = () => {
    return (
        <>
            <button
                className="navbar-toggler border-0 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i className="ri-menu-3-line"></i>
            </button>
            <div className="collapse navbar-collapse justify-content-center mx-5 position-design " id="navbarNavAltMarkup">
                <div className="navbar-nav  dimension-design">
                    <Link to="/innersamplepack">
                    <a className="nav-link active mx-5 " aria-current="page" href="#">SAMPLE PACK</a>
                    </Link>
                    <a className="nav-link mx-5" href="#">ABOUT US</a>
                    <a className="nav-link mx-5" href="#">PRENOTA</a>
                    <a className="nav-link mx-5" href="#">PREVENTIVI</a>

                </div>
            </div>
        </>
    )
}

export default NavbarItems
