import React, { Component } from "react";
import "./Images.css";

class HomeHeader extends Component {
	render() {
		return (
			<div className='homeHeader d-flex flex-column'>
				<h1>Country Explorer</h1>
				<h5>Learn About the World!</h5>
			</div>
		);
	}
}
export default HomeHeader;

