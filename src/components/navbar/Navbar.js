import { currencyFormat } from "../../utils/utilities";

import "./Navbar.css";

function Navbar(props) {
	const { name, balance } = props;
	return (
		<nav className="nav flex items-center justify-between">
			<h2>Apna Paisa</h2>
			<div className="navbar flex items-center justify-end">
				<div className="balance">
					Balance: <strong>{currencyFormat(balance)}</strong>
				</div>
				<h4>{name}</h4>
			</div>
		</nav>
	);
}

export default Navbar;
