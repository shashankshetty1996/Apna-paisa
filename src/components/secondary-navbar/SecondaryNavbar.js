import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./SecondaryNavbar.css";

class SecondaryNavbar extends Component {
	render() {
		const { options } = this.props;
		return (
			<nav className="sub-navbar">
				<div className="container">
					{options.map((option, index) => (
						<NavLink key={index} to={option.to} exact>
							{option.label}
						</NavLink>
					))}
				</div>
			</nav>
		);
	}
}

export default SecondaryNavbar;
