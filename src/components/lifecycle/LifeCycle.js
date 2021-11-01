import { Component } from "react";

export default class LifeCycle extends Component {
	constructor(props) {
		super(props);
		console.log("Constructor");

		this.state = {
			counter: 0,
			amount: 0,
		};
	}

	// API call, Setting one time job when component is initialized
	componentDidMount() {
		console.log("componentDidMount");
		// side effect
		this.setState({ counter: 1 });
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate");

		if (prevState.counter !== this.state.counter) {
			// API Call
		}
		console.log(prevState);
		console.log(prevProps);
	}

	componentWillUnmount() {
		console.log("componentWillUnmount");
	}

	render() {
		console.log("Render is called");

		return (
			<h1>LifeCycle Method, open console tab. Counter: {this.state.counter}</h1>
		);
	}
}
