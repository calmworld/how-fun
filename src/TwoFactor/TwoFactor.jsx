import React, { useState } from "react";

const CORRECT_CODE = Math.floor(Math.random() * 9000 + 1000).toString();
console.log("Correct code:", CORRECT_CODE);

function TwoFactor() {
	const [secret, setSecret] = useState("");
	return (
		<>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					window.alert(secret === CORRECT_CODE ? "thats correct" : "try again");
				}}
			>
				<label htmlFor='auth-code'>Enter authorization code:</label>
				<div className='row'>
					<input
						id='auth-code'
						type='text'
						required={true}
						maxLength={4}
						value={secret}
						onChange={(event) => {
							setSecret(event.target.value);
						}}
					/>

					<button>Validate</button>
				</div>
				<p>{CORRECT_CODE}</p>
			</form>
		</>
	);
}

export default TwoFactor;
