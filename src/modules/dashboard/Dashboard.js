import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import SecondaryNavbar from "../../components/secondary-navbar/SecondaryNavbar";
import TransactionDetails from "../../components/transaction-details/TransactionDetails";
import TransactionForm from "../../components/transaction-form/TransactionFrom";
import Transactions from "../../components/transactions/Transactions";

import "./Dashboard.css";

export default class Dashboard extends Component {
	state = {
		transactions: [
			{
				id: 1,
				desc: "HotStar, Subscription",
				amount: 580,
				type: "debit",
			},
			{ id: 2, desc: "Dividend from Stocks", amount: 100, type: "credit" },
			{ id: 3, desc: "Car loan EMI", amount: 13780, type: "debit" },
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
		{ label: "Add Transaction", to: "/dashboard/add-transactions" },
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

	getTransaction = (id) => {
		const { transactions } = this.state;
		return transactions.find((transaction) => transaction.id === +id);
	};

	// path="/dashboard"
	// path="/dashboard/transactions"
	// path="/dashboard/add-transactions"
	render() {
		const { transactions } = this.state;

		// const debitTransactionsList = transactions.filter(
		// 	(transaction) => transaction.type === "debit"
		// );
		// const creditTransactionsList = transactions.filter(
		// 	(transaction) => transaction.type === "credit"
		// );

		// Components
		const allTransactions = <Transactions entry={transactions} />;
		const transactionForm = (
			<TransactionForm addTransaction={this.addTransaction} />
		);

		return (
			<>
				<SecondaryNavbar options={this.secondaryNavOptions} />
				<div className="container">
					<Switch>
						<Route path="/dashboard/add-transactions" exact>
							{transactionForm}
						</Route>
						<Route path="/dashboard/transactions" exact>
							{allTransactions}
						</Route>
						<Route path="/dashboard/transaction/:transactionId" exact>
							<TransactionDetails getTransaction={this.getTransaction} />
						</Route>
						<Route path="/dashboard" exact>
							<div className="flex justify-between flex-wrap gap-4">
								{allTransactions}
								{transactionForm}
								{/* <Transactions
									title="Debit Transactions"
									entry={debitTransactionsList}
								/>
								<Transactions
									title="Credit Transactions"
									entry={creditTransactionsList}
								/> */}
							</div>
						</Route>
					</Switch>
				</div>
			</>
		);
	}
}
