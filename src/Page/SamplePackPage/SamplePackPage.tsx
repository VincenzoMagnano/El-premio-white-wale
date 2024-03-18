import React from 'react'
import './SamplePackPage.css'
import { Link } from 'react-router-dom'
const SamplePackPage = () => {
  return (
    <>
      <div className='main'>
        <div className="submain">
        <img className='z-0 position-absolute' src="whitewaleBG.png" alt="" />
        <div className='left flex-column'>
          <h1 className='dimension-text z-3'>ONLY QUALITY FOR YOUR <span className='spanned'>MUSIC</span> <u>INSPIRATION</u>.</h1>
          <Link to="/innersamplepack">
          
          <button className='btn-design justify-content-start'>PURCHASE NOW <i className="ri-arrow-right-s-line"></i></button>
          </Link>
        </div>
        <div className="right">
          <img className='image-control' src="DRUMKIT.png" alt="" />
        </div>
        </div>
      </div>
    </>
  )
}

export default SamplePackPage
