import "./FormElement.css";

export default function FormElement(props) {
	const {
		children,
		label,
		name = "",
		className = "",
		labelClassName = "",
	} = props;

	const containerClassName = `form-group ${className}`;
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
