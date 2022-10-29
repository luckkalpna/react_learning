import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav'
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Info from './component/Info';

function App() {
  return ( 
    <div className="App">
      <Nav/> <br />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/info' element={<Info/>}/>
      </Routes>
    </div>
  );
}

export default App;
