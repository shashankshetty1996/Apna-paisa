import "./Input.css";

export default function Input(props) {
	const {
		value,
		onChange,
		type = "text",
		placeholder = "",
		name = "",
		className = "",
	} = props;

	const containerClassName = `input ${className}`;

	return (
		<input
			className={containerClassName}
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
}
