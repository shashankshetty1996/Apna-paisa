import { Component } from "react";

import { currencyFormat } from "../../utils/utilities";

import "./Transactions.css";
import style from "./Transactions.module.css";

function TransactionEntry(props) {
	let amountClassName = "transactions-amount";
	if (props.item.type === "debit") {
		amountClassName += " transactions-debit";
	} else if (props.item.type === "credit") {
		amountClassName += " transactions-credit";
	}
	// const amountClassName =
	// 	props.item.type === "debit"
	// 		? "transactions-amount transactions-debit"
	// 		: "transactions-amount transactions-credit";
	return (
		<li className="transactions-list-item flex items-center justify-between">
			<span className="transactions-desc">{props.item.desc}</span>
			<span className={amountClassName}>
				{currencyFormat(props.item.amount)}
			</span>
		</li>
	);
}

class Transactions extends Component {
	render() {
		return (
			<div className="transactions">
				<h1 className={style.primary}>Transitions</h1>
				<ul className="transactions-list">
					{this.props.entry.map((item) => {
						return <TransactionEntry key={item.id} item={item} />;
					})}
				</ul>
			</div>
		);
	}
}

export default Transactions;
