import React from 'react'
import Navbar from '../Navbar/Navbar'
import Login from '../Form/Login/Login'
import Sidebar from '../Sidebar/Sidebar'
import { Route } from 'react-router-dom'
import SamplePackPage from '../../Page/SamplePackPage/SamplePackPage'
const Hero = () => {
  return (
    
    <div className='d-flex justify-content-around bg-body-tertiary py-2'>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

export default Hero
