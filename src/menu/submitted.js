import React, { Component } from 'react';
import './menu.css'

class Submitted extends Component {
	render() {
		return (
			<div id="menu">
				<p
					id="new-search"
					onClick={this.props.onRefresh}
				>New Search</p>
			</div>
		);
	}
}

export default Submitted;