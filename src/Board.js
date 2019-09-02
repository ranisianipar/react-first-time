import React from 'react';

// Square in Tic-tac-toe will be clickable. 
// So, i try to reuse the Button component (class), as Tic-tac-toe 'square'
// to demonstrate one of React utilities.
import Square from './Button';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xIsNext: true,
        };
      }
  
      handleClick(i) {
        const squares = this.state.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
          return;
        }
  
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        
        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext,
        });
      }

      // solution
      calculateWinner(squares) {
        const lines = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,4,8],
          [0,3,6],
          [1,4,7],
          [2,4,6],
          [2,5,8]
        ]
      
        // iterate the solutions and match with the current condition
        for (let i = 0; i < lines.length; i++) {
          const [a,b,c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
          return squares[a];
        }
        return null;
      }
  
      renderSquare(i) {
        return (
        <Square 
          className = "Square"
          text = {this.state.squares[i]} 
          onClick = {() => this.handleClick(i)}
        />
        );
      }
    
      render() {
        const winner = this.calculateWinner(this.state.squares);
        let status = 'Next player: '+ (this.state.xIsNext ? 'X' : 'O');
  
        if (winner) {
          status = "Winner: "+winner;

          this.className = this.className +" win";
        }
        
    
        return (
          <div className={this.props.className}>
            <div className="status">{status}</div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
      }
}

export default Board;