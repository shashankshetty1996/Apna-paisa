import React, { Component } from "react";

import TransactionForm from "../../components/transaction-form/TransactionFrom";
import Transactions from "../../components/transactions/Transactions";

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

	render() {
		return (
			<div className="container">
				<TransactionForm addTransaction={this.addTransaction} />
				<Transactions entry={this.state.transactions} />
			</div>
		);
	}
}
