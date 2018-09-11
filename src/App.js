import React, { Component } from 'react';
import Header from './header/header';
import Menu from './menu/menu'
import Movies from './movies/movies';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			yearSubmitted: null,
			queryType: null
		}
	}

	yearsubmitted(year) {
		// console.log(year)
		this.setState({yearSubmitted: year})
	}

	popular() {
		this.setState({queryType: 'popular'})
	}

  render() {
		//console.log('app render: ', this.state.yearSubmitted)
    return (			
      <div className="App">
			<Header></Header>
			<Menu
				submitYear={this.yearsubmitted.bind(this)}
				queryType={this.popular.bind(this)}
			/>
			<hr className="style14" />
			<Movies
				yearSubmitted={this.state.yearSubmitted}
				queryType={this.state.queryType}
			/>
      </div>
    );
  }
}

export default App;
