import React from 'react';
import './App.css';
import Button from './Button';
import Tictactoe from './Tictactoe';

import {HashRouter, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">

        <h1>HELLO!</h1>
        <NavLink to="/tic-tac-toe"><Button text="Let's play!" transformation="gone"/></NavLink>
        
        <div className="content">
          <Route path="/tic-tac-toe" component={Tictactoe}/>
          
        </div>
      </div>

    </HashRouter>
  );
}

export default App;
