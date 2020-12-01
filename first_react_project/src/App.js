import React, { Component } from 'react';
import './App.css';
import Subject from './header/header';
import NavBar from './nav/nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <NavBar></NavBar>
      </div>
    );
  }
}

export default App;
