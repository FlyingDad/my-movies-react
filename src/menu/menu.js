import React, { Component } from 'react';
import './menu.css';

class menu extends Component {
	render() {
		return (
			<div id="menu" className="flex justify-around w-50 bg-navy ba b--green br2">
				<p className="outline w-25 pa2 mr2">menus</p>
				<p className="outline w-25 pa2 mr2">menus</p>
				<p className="outline w-25 pa2">menus</p>
			</div>
		);
	}
}

export default menu;