import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
	render() {
		return (
			<section className="container">
				<h1>About Us</h1>
				{/* <a href="/">Dashboard</a> */}
				<Link to="/">Dashboard using Link</Link>
			</section>
		);
	}
}
