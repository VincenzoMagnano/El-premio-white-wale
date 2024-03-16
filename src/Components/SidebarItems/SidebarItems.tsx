import React from 'react'
import Login from '../Form/Login/Login'
import './SidebarItems.css'
const SidebarItems = () => {
    return (
        <>
            <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">

                    <h5
                        className="offcanvas-title"
                        id="offcanvasRightLabel">
                        Welcome Back!</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                <Login />
                <br />
                <h5>Non hai un account?</h5>
                <button className='btn btn-design2 fs-5 m-3'>Registrati</button>
                </div>
            </div>
        </>
    )
}

export default SidebarItems
