import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SecondaryNavbar from "../../components/secondary-navbar/SecondaryNavbar";

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

	secondaryNavOptions = [
		{ label: "Dashboard", to: "/dashboard" },
		{
			label: "All Transactions",
			to: {
				pathname: "/dashboard/transactions",
				state: { fromDashboard: true },
			},
		},
		{ label: "Add Transition", to: "/dashboard/add-transactions" },
	];

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
		const { transactions } = this.state;
		const allTransactions = <Transactions entry={transactions} />;
		const transactionForm = (
			<TransactionForm addTransaction={this.addTransaction} />
		);

		return (
			<>
				<SecondaryNavbar options={this.secondaryNavOptions} />
				<div className="container">
					<Switch>
						<Route path="/dashboard/transactions" exact>
							{allTransactions}
						</Route>
						<Route path="/dashboard/add-transactions" exact>
							{transactionForm}
						</Route>
						<Route path="/dashboard">
							<div className="flex justify-between flex-wrap">
								{allTransactions}
								{transactionForm}
							</div>
						</Route>
					</Switch>
				</div>
			</>
		);
	}
}
