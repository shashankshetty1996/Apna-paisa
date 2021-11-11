import React, { Component } from "react";
import { Link } from "react-router-dom";

import NotFoundSvg from "../../assets/not-found.svg";
// import { ReactComponent as NotFoundSvg } from "../../assets/not-found.svg";

import "./NotFound.css";

class NotFound extends Component {
	componentDidMount() {
		// Hide Navigation bar.
		// Ideally this should hideNavbar method
		this.props.toggleShowNav();
	}

	componentWillUnmount() {
		// Hide Navigation bar.
		// Ideally this should showNavbar method
		this.props.toggleShowNav();
	}

	render() {
		return (
			<main className="container flex flex-column items-center justify-center not-found">
				<img src={NotFoundSvg} alt="non found" height="480" />
				{/* <NotFoundSvg /> */}
				<h1>Page not found</h1>
				<Link to="/">Go To Dashboard</Link>
			</main>
		);
	}
}

export default NotFound;
