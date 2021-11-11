import "./FormElement.css";

export default function FormElement(props) {
	const {
		children,
		label,
		name = "",
		className = "",
		labelClassName = "",
		inline = false,
	} = props;

	let containerClassName = "form-group";
	if (inline) {
		containerClassName += " form-group-inline";
	}
	if (className) {
		containerClassName += ` ${className}`;
	}
	const labelClass = `form-label ${labelClassName}`;

	return (
		<div className={containerClassName}>
			<label htmlFor={name} className={labelClass}>
				{label}
			</label>
			<div className="form-element">{children}</div>
		</div>
	);
}
