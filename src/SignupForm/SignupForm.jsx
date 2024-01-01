import React from "react";

function SignupForm() {
	const [username, setUsername] = React.useState();

	return (
		<form>
			<label htmlFor='username'>Select a username:</label>
			<input
				type='text'
				id='username'
				value={username}
				onChange={(event) => {
					setUsername(event.target.value);
				}}
			/>
		</form>
	);
}

export default SignupForm;
