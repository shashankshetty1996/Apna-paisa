import React, { Component } from "react";

import Navbar from "./components/navbar/Navbar";
import Transactions from "./components/transactions/Transactions";
import TransactionForm from "./components/transaction-form/TransactionFrom";

import "./App.css";

// Class based
class App extends Component {
	state = {
		name: "Shashank",
		balance: 10000,
		transactions: [
			{
				id: 1,
				desc: "Paid for HotStar, But India lost!!!",
				amount: 580,
				type: "debit",
			},
			{ id: 2, desc: "Dividend from Stocks", amount: 100, type: "credit" },
		],
	};

	updateBalance = (amount) => {
		this.setState({ balance: amount });
	};

	addTransaction = (desc, amount) => {
		const transactions = [...this.state.transactions];
		const transaction = {
			id: transactions.length + 1,
			desc: desc,
			amount: amount,
			type: "debit",
		};
		transactions.push(transaction);

		const updatedBalance = this.state.balance - amount;

		this.setState({ transactions, balance: updatedBalance });
	};
	// updateTransactions = (transactions) => {
	// 	this.setState({ transactions });
	// };

	render() {
		return (
			<div className="container">
				<Navbar balance={this.state.balance} name={this.state.name} />
				{this.state.balance >= 100000 ? (
					<p>You are a Premium customer</p>
				) : (
					<p>You are a Regular customer</p>
				)}

				{/* {this.state.transactions.length > 2 && (
					<Transactions entry={this.state.transactions} />
				)} */}

				<TransactionForm addTransaction={this.addTransaction} />
				{/* <TransactionForm
					transactions={this.state.transactions}
					updateTransactions={this.updateTransactions}
				/> */}

				<Transactions entry={this.state.transactions} />
			</div>
		);
	}
}

// Default export - only one a file
export default App;
