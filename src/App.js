import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from './Travel.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Travel
          destination='plop'
          country='Inde'
          photo= 'Photo'
          distance= '5000 bornes'
        />
        <Travel
          destination='plop2'
          country='Guatemala'
          photo= 'Photo'
          distance= '7000 bornes'
        />
      </div>
    );
  }
}

export default App;
