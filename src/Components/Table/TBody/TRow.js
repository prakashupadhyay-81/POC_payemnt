import React from 'react';

function TRow({num, abb, effectiveDate, paymentDate, sourceType, paymentType, taxYear, allocMethod}) {
	return (
		<tr>
			<td>{num}</td>
			<td>{abb}</td>
			<td>{effectiveDate}</td>
			<td>{paymentDate}</td>
			<td>{sourceType}</td>
			<td>{paymentType}</td>
			<td>{taxYear}</td>
			<td>{allocMethod}</td>
		</tr>
	);
}

export default TRow;