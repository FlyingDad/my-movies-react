import React, { Component } from 'react';
import './movie.css'

class Movie extends Component {
	render() {
		return (
			<div className="movie-container w-20 pa3 ma2 br1">
				<p>Deadpool 2</p>
				<p>May 18, 2018</p>
				<img src={require("./poster.jpg")} className="" alt="" height="200px" width="140px"/>
				<p>Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.</p>			
			</div>
		);
	}
}

export default Movie;