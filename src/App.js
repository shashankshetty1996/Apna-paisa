import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import NotFound from "./modules/not-found/NotFound";
import Dashboard from "./modules/dashboard/Dashboard";
import About from "./modules/about/About";

import "./App.css";

// Class based
class App extends Component {
	state = {
		name: "Shashank",
		balance: 10000,
		showNav: true,
	};

	updateBalance = (amount) => {
		this.setState({ balance: amount });
	};

	toggleShowNav = () =>
		this.setState((prevState) => ({ showNav: !prevState.showNav }));

	render() {
		const { name, balance, showNav } = this.state;
		return (
			<BrowserRouter>
				{showNav && <Navbar balance={balance} name={name} />}
				<Switch>
					<Route path="/dashboard">
						<Dashboard updateBalance={this.updateBalance} balance={balance} />
					</Route>

					<Route path="/about" component={About} exact />

					{/* <Route
						path="/not-found"
						render={() => (
							<div className="container">
								<h1>Page not found</h1>
							</div>
						)}
						exact
					/> */}
					<Route path="/not-found" exact>
						<NotFound toggleShowNav={this.toggleShowNav} />
					</Route>

					<Redirect from="/" to="/dashboard" exact />
					<Redirect to="/not-found" />
				</Switch>
			</BrowserRouter>
		);
	}
}

// Default export - only one a file
export default App;
