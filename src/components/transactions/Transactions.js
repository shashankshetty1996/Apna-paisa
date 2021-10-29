import { Component } from "react";

import "./Transactions.css";
import style from "./Transactions.module.css";

function TransactionEntry(props) {
	return (
		<li className="transactions-list-item flex items-center justify-between">
			<span className="transactions-desc">{props.item.desc}</span>
			<span className="transactions-amount">{props.item.amount}</span>
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
