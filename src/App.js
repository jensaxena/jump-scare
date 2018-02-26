import React, { Component } from 'react';
import Game from './Game';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Jump Scare</h1>
        <p>Turn up the volume, <em>if you dare</em>!</p>
        <Game />
      </div>
    );
  }
}
