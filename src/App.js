import React, { Component } from 'react';
import Header from './header/header';
import Menu from './menu/menu'
import Movies from './movies/movies';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			yearSubmitted: null
		}
	}

	yearsubmitted(year) {
		// console.log(year)
		this.setState({yearSubmitted: year})
	}

  render() {
		//console.log('app render: ', this.state.yearSubmitted)
    return (			
      <div className="App">
			<Header></Header>
			<Menu
				submitYear={this.yearsubmitted.bind(this)}
			/>
			<hr className="style14" />
			<Movies
				yearSubmitted={this.state.yearSubmitted}
			/>
      </div>
    );
  }
}

export default App;
