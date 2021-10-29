export const currencyFormat = (amount) =>
	amount.toLocaleString("en-IN", {
		maximumFractionDigits: 2,
		style: "currency",
		currency: "INR",
	});
