import React, { Component } from 'react';
import Movie from './movie/movie'

class Movies extends Component {
	render() {
		return (
			<div className="flex flex-wrap justify-center">
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />

			</div>
		);
	}
}

export default Movies;