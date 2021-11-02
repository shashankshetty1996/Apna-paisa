import { Component } from "react";

import Button from "../../common/button/Button";
import FormElement from "../../common/form-element/FormElement";
import Input from "../../common/input/Input";

import "./TransactionForm.css";

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
				<form autoComplete="off">
					<FormElement
						label="Enter Description"
						name="description"
						className="form-container"
					>
						<Input
							type="text"
							name="desc"
							value={this.state.description}
							onChange={this.descriptionUpdate}
						/>
					</FormElement>
					<FormElement
						label="Enter Amount"
						name="amount"
						className="form-container"
					>
						<Input
							type="number"
							name="amount"
							value={this.state.amount}
							onChange={this.updateAmount}
						/>
					</FormElement>

					<FormElement
						label="Select the type of payment"
						name="type"
						className="form-container"
					>
						<label>
							<input
								type="radio"
								name="type"
								checked={this.state.type === "debit"}
								// onChange={() => this.updateType("debit")}
								onChange={this.updateType.bind(this, "debit")}
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
					</FormElement>
					<Button type="submit" onClick={this.handleForm} disabled={btnDisable}>
						Submit
					</Button>
				</form>
			</div>
		);
	}
}

export default TransactionForm;
