import React from "react";
import styles from "./Toggle.module.css";

function Toggle({
	label,
	checked,
	handleToggle,
	backdropColor = "white",
	size = 16,
}) {
	const id = React.useId();

    const toggleId = `${id}-toggle`;

	const padding = size * 0.1;
	const width = size * 2 + padding * 2;

	const wrapperStyle = {
		width,
		padding,
		"--radius": size * 0.25 + "px",
		"--backdrop-color": backdropColor,
	};

	const ballStyle = {
		width: size,
		height: size,
		transform: checked ? `translateX(100%)` : `translateX(0%)`,
	};

    console.log('toggleId:', toggleId);
    
	return (
		<div className={styles.wrapper}>
			<label>{label}</label>
			<button
				className={styles.toggle}
                id={toggleId}
				type="button"
				aria-pressed={checked}
				style={wrapperStyle}
				onClick={() => {
					handleToggle(!checked);
				}}
			>
				<span className={styles.ball} style={ballStyle} />
			</button>
		</div>
	);
}

export default Toggle;
