import { Component } from "react";

class TransactionForm extends Component {
	state = {
		description: "",
		amount: 0,
		type: "debit",
	};

	descriptionUpdate = ($event) => {
		const updatedDescription = $event.target.value;
		this.setState({ description: updatedDescription });
	};

	updateAmount = ($event) => {
		const amount = $event.target.value;
		this.setState({ amount });
	};

	updateType = (type) => this.setState({ type });

	handleForm = ($event) => {
		$event.preventDefault();
		// const transactions = [...this.props.transactions];
		// const transaction = {
		// 	id: transactions.length + 1,
		// 	desc: this.state.description,
		// 	amount: this.state.amount,
		// 	type: "debit",
		// };
		// transactions.push(transaction);

		// this.setState({ description: "", amount: 0 });
		// this.props.updateTransactions(transactions);

		const { amount, description, type } = this.state;
		this.setState({ description: "", amount: 0 });
		this.props.addTransaction(description, +amount, type);
	};

	render() {
		const btnDisable = this.state.amount === 0 || this.state.description === "";
		return (
			<div className="transaction-form">
				<h1>Add new Transaction Entry</h1>
				<form>
					<div className="flex items-center justify-between">
						<label htmlFor="desc">Enter Description</label>
						<input
							type="text"
							name="desc"
							value={this.state.description}
							onChange={this.descriptionUpdate}
						/>
					</div>
					<div className="flex items-center justify-between">
						<label htmlFor="amount">Enter Amount</label>
						<input
							type="number"
							name="amount"
							value={this.state.amount}
							onChange={this.updateAmount}
						/>
					</div>
					<div className="flex items-center justify-between">
						<label htmlFor="type">Select the type of payment</label>
						<div>
							<label>
								<input
									type="radio"
									name="type"
									checked={this.state.type === "debit"}
									onChange={() => this.updateType("debit")}
								/>
								Debit
							</label>
							<label>
								<input
									type="radio"
									name="type"
									checked={this.state.type === "credit"}
									onChange={() => this.updateType("credit")}
								/>
								Credit
							</label>
						</div>
					</div>
					<button type="submit" onClick={this.handleForm} disabled={btnDisable}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default TransactionForm;
