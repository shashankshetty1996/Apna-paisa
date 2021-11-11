import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./TransactionDetails.css";

class TransactionDetails extends Component {
	render() {
		const { match, getTransaction } = this.props;
		const {
			params: { transactionId },
		} = match;

		const transaction = getTransaction(transactionId);

		// Guard
		if (transaction === undefined) {
			return (
				<section className="transaction-details">
					<h1>Invalid Transaction ID {transactionId}</h1>
				</section>
			);
		}

		return (
			<section className="transaction-details">
				<h1>Transaction details here</h1>
				<ul>
					<li>
						<span>Description</span>
						<p>{transaction.desc}</p>
					</li>
					<li>
						<span>Amount</span>
						<p>{transaction.amount}</p>
					</li>
				</ul>
			</section>
		);
	}
}

export default withRouter(TransactionDetails);
