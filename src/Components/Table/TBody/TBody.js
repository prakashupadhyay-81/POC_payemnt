import React from 'react';
import TRow from "./TRow";

function TBody({rows}) {
	return (
		<tbody>
		{
			rows.map((row, i) => {
				console.log(row);
				return <TRow
					key={i}
					abb={row["Abbr"]}
					allocMethod={row["AllocMethod"]}
					effectiveDate={row["EffectiveDate"]}
					num={row["productID"]}
					paymentDate={row["EffectiveDate"]}
					paymentType={row["PaymentDate"]}
					sourceType={row["SourceType"]}
					taxYear={row["TaxYear"]}/>;
			})
		}
		</tbody>
	);
}

export default TBody;