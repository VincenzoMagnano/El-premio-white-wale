import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SamplePackPage from './Page/SamplePackPage/SamplePackPage';
import InnerSamplePack from './Page/InnerSamplePack/InnerSamplePack';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import './App.css';
import SidebarItems from './Components/SidebarItems/SidebarItems';
import BookingPage from './Page/BookingPage/BookingPage';
import InnerBooking from './Page/InnerBooking/InnerBooking';
function App() {
  return (
    <Router> 
    <div className="App">
      <Nav />
        <SidebarItems />
      <Routes>
        <Route path="/" element={<SamplePackPage />}/>
        <Route  path='/samplepack' element={<SamplePackPage/>} />
        <Route path='/innersamplepack' element={<InnerSamplePack/>} />
        <Route path='/bookingpage' element={<BookingPage/>} />
        <Route path='/innerbooking' element={<InnerBooking/>} />
      </Routes>
    </div>
      <Footer/>
    </Router>
  );
}

export default App;
