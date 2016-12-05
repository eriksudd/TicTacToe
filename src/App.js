import React, { Component } from 'react';
import './App.css';
import Board from './Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Tic Tac Toe</h2>
        </div>
        <Board />
      </div>
    );
  }
}

export default App;
