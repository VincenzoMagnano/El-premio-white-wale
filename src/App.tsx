import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SamplePackPage from './Page/SamplePackPage/SamplePackPage';
import InnerSamplePack from './Page/InnerSamplePack/InnerSamplePack';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <Router> 
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<SamplePackPage />}/>
        <Route  path='/samplepack' element={<SamplePackPage/>} />
        <Route path='/innersamplepack' element={<InnerSamplePack/>} />
      </Routes>
    </div>
      <Footer/>
    </Router>
  );
}

export default App;
