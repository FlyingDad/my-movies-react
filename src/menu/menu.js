import React, { Component } from 'react';
import './menu.css';
import Submitted from './submitted';

class menu extends Component {

	constructor(props) {
		super(props)
		this.state = {
			year: 1983,
			submitted: false
		}
		this.favoriteByYear = this.favoriteByYear.bind(this)
		this.onSubmitFavByYear = this.onSubmitFavByYear.bind(this)
		this.onPopularSubmit = this.onPopularSubmit.bind(this)
	}

	favoriteByYear(event){
		this.setState({year: event.target.value})
	}

	onSubmitFavByYear(event) {
		event.preventDefault()
		//console.log(this.state.year)
		this.setState({submitted: true})
		this.props.submitYear(this.state.year)
	}

	onPopularSubmit(event) {
		event.preventDefault()
		this.setState({submitted: true})
		this.props.queryType()
	}

	onRefresh() {
		this.setState({submitted: false})
	}

	render() {

		return (
			<div>
				{!this.state.submitted ? (
					<div>
						<div id="menu" className="flex justify-around items-center w-75 bg-navy ba bg-green br2" >
						<h3>Popular Movies</h3>
						<div>
							<form onSubmit={this.onPopularSubmit} className="">
								{/* <label htmlFor="year" className="ma2">Select year</label> */}
								{/* <input
									type="number"
									min="1900"
									max="2018"
									name="year" 
									id="year" 
									className="ma2" 
									onChange={this.favoriteByYear}
									value={this.state.year} 
								/> */}
								<input type="submit" value="Submit" />
							</form>
						</div>
				</div>
						<div id="menu" className="flex justify-around items-center w-75 bg-navy ba bg-green br2" >
							<h3>Favorite Movies by Year</h3>
							<div>
								<form onSubmit={this.onSubmitFavByYear} className="">
									{/* <label htmlFor="year" className="ma2">Select year</label> */}
									<input
										type="number"
										min="1900"
										max="2018"
										name="year" 
										id="year" 
										className="ma2" 
										onChange={this.favoriteByYear}
										value={this.state.year} 
									/>
									<input type="submit" value="Submit" />
								</form>
							</div>
					</div>
				</div>):
				(
					<Submitted
						onRefresh={this.onRefresh.bind(this)}
					/>
				)
			}
			</div>
		);
	}
}

export default menu;