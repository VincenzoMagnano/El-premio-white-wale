import React from 'react'
import './Bookingpage.css'
import { Link } from 'react-router-dom'

const BookingPage = () => {
  return (
    <>
          <div className='main'>

              <div className="submain">
                  <img className='z-0 position-absolute w-100 rotate' src="whitewaleBG.png" alt="" />
                  <div className='left flex-column'>
                      <h1 className='dimension-text z-3'>PRENOTA ORA LA TUA <span className='spanned'>STUDIO</span> <u>SESSION</u>.</h1>
                      <Link to="/innerbooking">
                          <button className='btn-design justify-content-start'>PRENOTA ORA <i className="ri-arrow-right-s-line"></i></button>
                      </Link>
                  </div>
                  <div className="right">
                      <img className='image-control' src="STUDIOIMAGE.png" alt="" />
                  </div>
              </div>
          </div>
    </>
  )
}

export default BookingPage
