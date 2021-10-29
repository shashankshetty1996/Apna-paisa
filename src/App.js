import React, { Component } from "react";

import Navbar from "./components/navbar/Navbar";
import Transactions from "./components/transactions/Transactions";

import "./App.css";

// Class based
class App extends Component {
	state = {
		name: "Shashank",
		balance: 100,
		transactions: [
			{
				id: 1,
				desc: "Paid for HotStar, But India lost!!!",
				amount: 580,
				type: "debit",
			},
			{ id: 2, desc: "Dividend from Stocks", amount: 100, type: "credit" },
		],
		description: "",
		amount: 0,
	};

	updateBalance = (amount) => {
		this.setState({ balance: amount });
	};

	descriptionUpdate = ($event) => {
		const updatedDescription = $event.target.value;
		this.setState({ description: updatedDescription });
	};

	updateAmount = ($event) => {
		const amount = $event.target.value;
		this.setState({ amount });
	};

	handleForm = ($event) => {
		$event.preventDefault();
		const transactions = [...this.state.transactions];
		const transaction = {
			id: transactions.length + 1,
			desc: this.state.description,
			amount: this.state.amount,
			type: "debit",
		};
		transactions.push(transaction);

		this.setState({ transactions, description: "", amount: 0 });
	};

	render() {
		const btnDisable = this.state.amount === 0 || this.state.description === "";

		return (
			<div className="container">
				<Navbar balance={this.state.balance} name={this.state.name} />
				{this.state.balance >= 100000 ? (
					<p>You are a Premium customer</p>
				) : (
					<p>You are a Regular customer</p>
				)}

				{this.state.transactions.length > 2 && (
					<Transactions entry={this.state.transactions} />
				)}

				<div className="transaction-form">
					<h1>Add new Transaction Entry</h1>
					<form>
						<div className="flex items-center justify-between">
							<label htmlFor="desc">Enter Description</label>
							<input
								type="text"
								name="desc"
								value={this.state.description}
								onChange={this.descriptionUpdate}
							/>
						</div>
						<div className="flex items-center justify-between">
							<label htmlFor="amount">Enter Amount</label>
							<input
								type="number"
								name="amount"
								value={this.state.amount}
								onChange={this.updateAmount}
							/>
						</div>
						<button
							type="submit"
							onClick={this.handleForm}
							disabled={btnDisable}
						>
							Submit
						</button>
					</form>
				</div>
				<Transactions entry={this.state.transactions} />
			</div>
		);
	}
}

// Default export - only one a file
export default App;
