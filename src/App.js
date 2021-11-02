import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Dashboard from "./modules/dashboard/Dashboard";
import About from "./modules/about/About";

import "./App.css";

// Class based
class App extends Component {
	state = {
		name: "Shashank",
		balance: 10000,
	};

	updateBalance = (amount) => {
		this.setState({ balance: amount });
	};

	render() {
		return (
			<BrowserRouter>
				<Navbar balance={this.state.balance} name={this.state.name} />
				<Switch>
					<Route path="/" exact>
						<Dashboard
							updateBalance={this.updateBalance}
							balance={this.state.balance}
						/>
					</Route>

					<Route path="/about">
						<About />
					</Route>
				</Switch>
			</BrowserRouter>
		);
	}
}

// Default export - only one a file
export default App;
