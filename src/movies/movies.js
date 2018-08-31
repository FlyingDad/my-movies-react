import React, { Component } from 'react';
import Movie from './movie/movie'
import axios from 'axios'

class Movies extends Component {

	constructor(props) {
		super(props)
		this.state = {
			response: null
		}
	}

	getMoviesByYear() {
		axios.get('https://api.themoviedb.org/3/discover/movie?api_key=9309086e9e6e082e5dc104b977f7a960&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1983')
		.then(response => {
			//console.log(response.data.results)
			this.setState({response: response.data.results})
		})
	}

	// componentDidMount(){
	// 	console.log('mounted movies')
	// }

	componentDidUpdate(prevProps) {
		
		if(this.props.yearSubmitted !== prevProps.yearSubmitted) {
		if(this.props.yearSubmitted) {
			console.log(this.props.yearSubmitted)
			this.getMoviesByYear()
			console.log('did update movies')
		}
	}
	}
	// componentWillReceiveProps() {
	// 	console.log('received props movies', this.props.yearSubmitted)
	// 	if(this.props.yearSubmitted) {
	// 		console.log(this.props.yearSubmitted)
	// 		//this.getMoviesByYear()
	// 	}
	// }

	render() {
		return (
			<div className="flex flex-wrap justify-center">
				{this.state.response ? (
					
					// <p>Movies Found...</p>
					// <p>adult {m[0].original_title}</p>
					// </div>
					this.state.response.map(movie => {
						return (
						// <p key={movie.id}>Movie {movie.original_title}</p>
						<Movie
							title={movie.title}
							releaseDate={movie.release_date}
							summary={movie.overview}
							posterUrl={movie.poster_path}
							id={movie.id}
							key={movie.id}
						/>
						)
					})
					
				) : (
					<p>No Movies</p>
				)}			
			</div>
		);
	}
}

export default Movies;