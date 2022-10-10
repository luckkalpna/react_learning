
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

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


