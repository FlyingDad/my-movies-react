import React, { Component } from 'react';
import './moviedetails.css';

class MovieDetails extends Component {

	render() {
		console.log(this.props.movie)
		return (
			<div className="flex flex-column items-center">
				<p
					id="return"
					onClick={this.props.onReturnFromDetails}
				>Back</p>
				<h1>{this.props.movie.original_title}</h1>
				<img src={'https://image.tmdb.org/t/p/w500' + this.props.movie.backdrop_path} className="" alt=""/>
				<p>Released: {this.props.movie.release_date}</p>
				<p>Average rating: {this.props.movie.vote_average}</p>
				<h2>Summary</h2>
				<p className="w-75">{this.props.movie.overview}</p>
			</div>
		);
	}
}

export default MovieDetails;