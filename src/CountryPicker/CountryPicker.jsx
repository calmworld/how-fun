import React from "react";
import { COUNTRIES } from "./data";

/*
  “COUNTRIES” is a dictionary-like object
  with the following shape:

  {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
  }
*/

const countryName = Object.entries(COUNTRIES);

function CountryPicker() {
	const [country, setCountry] = React.useState("");

	return (
		<form>
			<fieldset>
				<legend>Shipping Info</legend>
				<label htmlFor='country'>Country:</label>
				<select
					required
					id='country'
					name='country'
					value={country}
					onChange={(event) => {
						setCountry(event.target.value);
					}}
				>
					<option value=''>-- Select a country --</option>
					<optgroup label='Countries'>
						{countryName.map(([id, label]) => {
							return (
								<option
									key={id}
									value={id}
								>
									{label}
								</option>
							);
						})}
					</optgroup>
				</select>
			</fieldset>

			<p className='country-display'>Selected country: {COUNTRIES[country]}</p>

			<button>Submit</button>
		</form>
	);
}

export default CountryPicker;
