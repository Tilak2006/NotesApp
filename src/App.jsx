import { useState } from 'react'
import Navbar from './Navbar';
import Landing from './Landing';
import Notes from './Notes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Footer from './Footer';
import Loginn from './Loginn';
import Draw from './Draw';

function App() {
 

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/notes" element = {<Notes />}/>
        <Route path="/create" element = {<Landing />}/>
        <Route path="/draw" element = {<Draw />}/>
        <Route path="/login" element = {<Loginn />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
