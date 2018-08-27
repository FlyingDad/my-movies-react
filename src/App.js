import React, { Component } from 'react';
import Header from './header/header';
import Menu from './menu/menu'
//import './App.css';

class App extends Component {
  render() {
    return (
			
      <div className="App">
			<Header></Header>
			<Menu></Menu>
        <header className="App-header">
          <h1 className="App-title">MOVIE BOX</h1>
        </header>
      </div>
    );
  }
}

export default App;
