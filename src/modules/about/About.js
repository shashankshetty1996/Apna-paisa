import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
	render() {
		return (
			<section className="container">
				<h1>About someone you and I don't know about</h1>
				{/* <a href="/">Dashboard</a> */}
				<Link to="/">Dashboard using Link</Link>
			</section>
		);
	}
}
