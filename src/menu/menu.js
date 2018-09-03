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
		this.onYearChange = this.onYearChange.bind(this)
		this.onSubmitYear = this.onSubmitYear.bind(this)
	}

	onYearChange(event){
		this.setState({year: event.target.value})
	}

	onSubmitYear(event) {
		event.preventDefault()
		//console.log(this.state.year)
		this.setState({submitted: true})
		this.props.submitYear(this.state.year)
	}

	onRefresh() {
		this.setState({submitted: false})
	}

	render() {

		return (
			<div>
				{!this.state.submitted ? (
					<div id="menu" className="flex justify-start w-50 bg-navy ba b--green br2">
					<form onSubmit={this.onSubmitYear}>
						<label htmlFor="year" className="ma2">Select year</label>
						<input
							type="number"
							min="1900"
							max="2018"
							name="year" 
							id="year" 
							className="ma2" 
							onChange={this.onYearChange}
							value={this.state.year} 
						/>
						<input type="submit" value="Submit" />
					</form>
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