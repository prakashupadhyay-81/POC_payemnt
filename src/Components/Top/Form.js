import React from 'react';

function Form(props) {
	return (
		<form action="">
			<fieldset>
				<legend>Payment Option</legend>
				<div className="">
					<input type="radio" id="batch" value="batch"/>
					<label htmlFor="batch">Batch</label>
				</div>
				<div className="">
					<input type="radio" id="selectFromSAMS" value="Select from SAMS"/>
					<label htmlFor="selectFromSAMS">Select from SAMS</label>
				</div>
			</fieldset>
		</form>
	);
}

export default Form;