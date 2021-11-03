import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import TransactionForm from "../../components/transaction-form/TransactionFrom";
import Transactions from "../../components/transactions/Transactions";

import "./Dashboard.css";

export default class Dashboard extends Component {
	state = {
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

	addTransaction = (desc, amount, type) => {
		const transactions = [...this.state.transactions];
		const transaction = {
			id: transactions.length + 1,
			desc,
			amount,
			type,
		};
		transactions.push(transaction);

		let updatedBalance;
		if (type === "debit") {
			updatedBalance = this.props.balance - amount;
		} else {
			updatedBalance = this.props.balance + amount;
		}

		this.setState({ transactions });
		this.props.updateBalance(updatedBalance);
	};

	// path="/dashboard"
	// path="/dashboard/transactions"
	// path="/dashboard/add-transactions"
	render() {
		const transactions = <Transactions entry={this.state.transactions} />;
		const transactionForm = (
			<TransactionForm addTransaction={this.addTransaction} />
		);
		return (
			<div className="container">
				{/* Nested routes */}
				<div className="flex justify-center items-center sub-nav">
					<NavLink exact to="/dashboard">
						Dashboard
					</NavLink>
					<NavLink
						exact
						to={{
							pathname: "/dashboard/transactions",
							state: { fromDashboard: true },
						}}
					>
						Transaction List
					</NavLink>
					<NavLink exact to="/dashboard/add-transactions">
						Add Transactions
					</NavLink>
				</div>
				<Switch>
					<Route path="/dashboard/transactions" exact>
						{transactions}
					</Route>
					<Route path="/dashboard/add-transactions" exact>
						{transactionForm}
					</Route>
					<Route path="/dashboard">
						{transactions}
						{transactionForm}
					</Route>
				</Switch>
			</div>
		);
	}
}
