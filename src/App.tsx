import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SamplePackPage from './Page/SamplePackPage/SamplePackPage';
function App() {
  return (
    <Router> 
    <div className="App">
      <Hero />
      <Routes>
        <Route path='/samplepack' Component={SamplePackPage} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
