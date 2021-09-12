import React from 'react';

function THead(props) {
	return (
		<thead>
		<tr>
			<th>#</th>
			<th>Abbr</th>
			<th>Effective Date</th>
			<th>Payment Amount</th>
			<th>Source Type</th>
			<th>Payment Type</th>
			<th>Tax Year</th>
			<th>Alloc Method</th>
		</tr>
		</thead>
	);
}

export default THead;