import React, { Component } from 'react';
import Header from './header/header';
import Menu from './menu/menu'
import Movies from './movies/movies';
//import './App.css';

class App extends Component {
  render() {
    return (
			
      <div className="App">
			<Header></Header>
			<Menu></Menu>
			<Movies/>
      </div>
    );
  }
}

export default App;
