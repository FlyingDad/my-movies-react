import React, { Component } from 'react';
import Movie from './movie/movie'
import axios from 'axios'
import MovieDetails from './moviedetails/moviedetails';

class Movies extends Component {

	constructor(props) {
		super(props)
		this.state = {
			response: null,
			movieSelection: false,
			movieIndex: null
		}
	}

	getMoviesByYear() {
		axios.get('https://api.themoviedb.org/3/discover/movie?api_key=9309086e9e6e082e5dc104b977f7a960&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=' + this.props.yearSubmitted)
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

	onMovieClick(index) {
		this.setState({movieSelection: true, movieIndex: index})
		console.log('clicked a movie')
	}

	render() {
		
		return (
			<div>
				{!this.state.movieSelection ? (
					<div className="flex flex-wrap justify-center">
						{this.state.response ? (
							this.state.response.map((movie, index) => {
								return (
								// <p key={movie.id}>Movie {movie.original_title}</p>
								<Movie
									title={movie.title}
									releaseDate={movie.release_date}
									summary={movie.overview}
									posterUrl={movie.poster_path}
									id={movie.id}
									key={movie.id}
									onSelect={this.onMovieClick.bind(this)}
									index={index}
								/>
								)
							})						
						) : (
							<p>No Movies</p>
						)}
					</div>
				):
				(
					<MovieDetails 
						movie={this.state.response[this.state.movieIndex]}
					/>
				)}
			</div>
		)		
	}
}

export default Movies;

