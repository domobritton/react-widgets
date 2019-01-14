import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from './Clock';
import Carousel from './Carousel';
import Tabs from './Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Carousel />
        <Clock />
        <Tabs />
      </div>
    );
  }
}

export default App;
