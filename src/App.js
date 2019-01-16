import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from './Clock';
import Carousel from './Carousel';
import Tabs from './Tabs';
import Search from './Search';

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
        <Search />
      </div>
    );
  }
}

export default App;
