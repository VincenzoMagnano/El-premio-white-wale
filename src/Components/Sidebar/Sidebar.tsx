import React from 'react'
import Login from '../Form/Login/Login'
import SidebarItems from '../SidebarItems/SidebarItems'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <>
            <button 
            className="btn effect" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasRight" 
            aria-controls="offcanvasRight">
             LOGIN
            </button>

           
        </>
    )
}

export default Sidebar
