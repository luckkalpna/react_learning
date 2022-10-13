
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <div>
          <Navbar/>
          <News pageSize={6} country="in" category="general"/>
      </div>
    );
  }
}


