import { Component } from "react";

// import "./Transactions.css";
import style from "./Transactions.module.css";

function TransactionEntry(props) {
	return (
		<li>
			{props.item.desc} - {props.item.amount}
		</li>
	);
}

class Transactions extends Component {
	render() {
		return (
			<div className="transactions">
				<h1 className={style.primary}>Transitions</h1>
				<ul>
					{this.props.entry.map((item) => {
						return <TransactionEntry key={item.id} item={item} />;
					})}
				</ul>
			</div>
		);
	}
}

export default Transactions;
