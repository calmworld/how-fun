import React from "react";
import { useState } from "react";

function SearchForm() {
	const [searchTerm, setSearchTerm] = useState("cats");

	return (
		<>
			<form>
				<label htmlFor='search-input'>Search:</label>
				<input
					type='text'
					id='search-input'
					value={searchTerm}
					onChange={(event) => {
						setSearchTerm(event.target.value);
						// console.log(event.target.value);
					}}
				/>
			</form>
			<p>Search term: {searchTerm}</p>
			<button onClick={() => setSearchTerm(Math.random())}>Click me</button>
		</>
	);
}

export default SearchForm;
