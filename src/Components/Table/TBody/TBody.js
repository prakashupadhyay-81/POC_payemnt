import React from 'react';
import TRow from "./TRow";

function TBody({rows}) {
	return (
		<tbody>
		{
			rows.map(row => (
				<TRow
					abb=""
					allocMethod=""
					effectiveDate=""
					num={row}
					paymentDate=""
					paymentType=""
					sourceType=""
					taxYear="" />
			))
		}
		</tbody>
	);
}

export default TBody;