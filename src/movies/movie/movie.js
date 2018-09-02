import React, { Component } from 'react';
import './movie.css';
// import axios from 'axios'

class Movie extends Component {

	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		image: null
	// 	}
	// }

	// Poster url example
	//https://image.tmdb.org/t/p/w500/xqECHNvzbDL5I3iiOVUkVPJMSbc.jpg
	render() {
		return (
			<div className="movie-container w-20 pa3 ma2 br1"
					onClick={() => this.props.onSelect(this.props.index)}>
				<p>{this.props.title}</p>
				<p>{this.props.releaseDate}</p>
				{/* <img src={require("./poster.jpg")} className="" alt="" height="200px" width="140px"/> */}
				<img src={'https://image.tmdb.org/t/p/w300' + this.props.posterUrl} className="" alt=""/>
			</div>
		);
	}
}

export default Movie;