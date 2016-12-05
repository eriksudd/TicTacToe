import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      square1: '',
      square2: '',
      square3: '',
      square4: '',
      square5: '',
      square6: '',
      square7: '',
      square8: '',
      square9: '',
      turn: 'X'
    }
  }

  checkForWinner() {
    const { square1, square2, square3, square4, square5, square6, square7, square8, square9 } = this.state;
    const H1 = [ square1, square2, square3 ];
    const H2 = [ square4, square5, square6 ];
    const H3 = [ square7, square8, square9 ];
    const V1 = [ square1, square4, square7 ];
    const V2 = [ square2, square5, square8 ];
    const V3 = [ square3, square6, square9 ];
    
    if ( square1 === square2 === square3) {
      console.log('winner')
    } else if ()
  }


  startGame() {
    console.log('starting game');
    // clear board
    for (var i = 1; i < 10; i++) {
      let setter = `square${i}`
      this.setState({ [setter]: ''})
    }

    // pick first player
    let coinFlip = Math.random();
    if (coinFlip > .5) {
      this.setState({turn: 'X'})
    } else {
      this.setState({turn: 'O'})
    }
  }

  makeMove(square) {
    const { turn } = this.state;
    this.setState({ [square]: turn });
    this.switchTurns()
  }

  switchTurns() {
    const { turn } = this.state;
    let nextTurn = turn === 'X' ? 'O' : 'X';
    this.setState({ turn: nextTurn })
  }


  render() {
    const { turn, square1, square2, square3, square4, square5, square6, square7, square8, square9 } = this.state;
    return (
      <div>
        <div>
          Player { turn } has the next move
        </div>
        <div className='flex'>
          <Square makeMove={this.makeMove.bind(this)} val={ square1 } id={'square1'}/>
          <Square makeMove={this.makeMove.bind(this)} val={ square2 } id={'square2'}/>
          <Square makeMove={this.makeMove.bind(this)} val={ square3 } id={'square3'}/>
          <Square makeMove={this.makeMove.bind(this)} val={ square4 } id={'square4'}/>
          <Square makeMove={this.makeMove.bind(this)} val={ square5 } id={'square5'}/>
          <Square makeMove={this.makeMove.bind(this)} val={ square6 } id={'square6'}/>
          <Square makeMove={this.makeMove.bind(this)} val={ square7 } id={'square7'}/>
          <Square makeMove={this.makeMove.bind(this)} val={ square8 } id={'square8'}/>
          <Square makeMove={this.makeMove.bind(this)} val={ square9 } id={'square9'}/>
        </div>
        <button onClick={this.startGame.bind(this)}>Start Game</button>
      </div>
    )
  }
}

export default Board;