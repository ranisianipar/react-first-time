import React from 'react';
import Board from './Board';
import Button from './Button';


class Tictactoe extends React.Component {

    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board className="Board"/>
            <Button text="reset"/>
          </div>
          <div className="game-info">
            
          </div>
        </div>
      );
    }
}

export default Tictactoe;