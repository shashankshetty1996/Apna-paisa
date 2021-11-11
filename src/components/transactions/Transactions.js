import { Component } from "react";
import { withRouter } from "react-router-dom";

import { currencyFormat } from "../../utils/utilities";

import "./Transactions.css";
import style from "./Transactions.module.css";

function TransactionEntry(props) {
	const { item, showTransactionDetails } = props;
	const { id, type, desc, amount } = item;

	let amountClassName = "transactions-amount";
	if (type === "debit") {
		amountClassName += " transactions-debit";
	} else if (type === "credit") {
		amountClassName += " transactions-credit";
	}

	// const amountClassName =
	// 	type === "debit"
	// 		? "transactions-amount transactions-debit"
	// 		: "transactions-amount transactions-credit";
	return (
		<li
			className="transactions-list-item flex items-center justify-between"
			onClick={() => showTransactionDetails(id)}
		>
			<span className="transactions-desc">{desc}</span>
			<span className={amountClassName}>{currencyFormat(amount)}</span>
		</li>
	);
}

class Transactions extends Component {
	render() {
		const { entry, title = "Transitions" } = this.props;
		const { state } = this.props.location;

		const showTransactionDetails = (id) => {
			const url = `/dashboard/transaction/${id}`;
			this.props.history.push(url);
		};

		return (
			<div className="transactions">
				<h1 className={style.primary}>{title}</h1>
				{state?.fromDashboard && <p>you came using NavLink</p>}
				<ul className="transactions-list">
					{entry.map((item) => {
						return (
							<TransactionEntry
								key={item.id}
								item={item}
								showTransactionDetails={showTransactionDetails}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default withRouter(Transactions);
