import React from 'react';
import List from "./List";
import Form from "./Form";

function Top(props) {
	return (
		<div className="top center">
			<div className="list">
				<List />
			</div>
			<div className="form">
				<Form />
			</div>
		</div>
	);
}

export default Top;