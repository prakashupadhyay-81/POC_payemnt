import React from 'react';
import THead from "./THead";
import TBody from "./TBody/TBody";

function get_list() {
	let list_of_instances = []
	for (let i = 1; i < 26; i++) {
		list_of_instances.push(i)
	}
	return list_of_instances
}

function Table(props) {
	return (
		<div className="table">
			<table>
				<THead />
				<TBody rows={get_list()}/>
			</table>
		</div>
	);
}

export default Table;