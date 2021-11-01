import { currencyFormat } from "../../utils/utilities";

import "./Navbar.css";

function Navbar(props) {
	const { name, balance } = props;
	return (
		<nav className="nav">
			<div className="container flex items-center justify-between">
				<h2>Apna Paisa</h2>
				<div className="navbar flex items-center justify-end">
					<p className="badge">{balance >= 10000 ? "premium" : "regular"}</p>
					<div className="balance">
						Balance: <strong>{currencyFormat(balance)}</strong>
					</div>
					<h4>{name}</h4>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
