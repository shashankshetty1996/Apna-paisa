import "./Button.css";

export default function Button(props) {
	const {
		children,
		onClick,
		className = "",
		type = "button",
		disabled = false,
		block = false,
	} = props;

	let containerClassName = `btn`;

	if (disabled) {
		containerClassName += ` disabled`;
	}
	if (block) {
		containerClassName += ` btn-block`;
	}

	if (className) {
		containerClassName += ` ${className}`;
	}

	return (
		<button
			className={containerClassName}
			onClick={onClick}
			disabled={disabled}
			type={type}
		>
			{children}
		</button>
	);
}
