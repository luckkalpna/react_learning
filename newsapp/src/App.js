import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import News from './components/News'

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/> 
        <News pageSize={6}/> 
      </div>
    );
  }
}

export default App;

