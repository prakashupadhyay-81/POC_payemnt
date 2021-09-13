import React, {useState} from 'react';
import THead from "./THead";
import TBody from "./TBody/TBody";
import api from "../../Public/api";
import TFrom from './TForm/TFrom';

function Table(props) {
	const [data, setData] = useState([]);
	const [editing, startEditing] = useState(false)
	const [prodId, setProdId] = useState();
	const [abbr, setAbbr] = useState();
	const [effectiveDate, setEffectiveDate] = useState();
	const [paymentAmount, setPaymentAmount] = useState();
	const [sourceType, setSourceType] = useState();
	const [paymentType, setPaymentType] = useState();
	const [taxYear, setTaxYear] = useState();
	const [allocMethod, setAllocMethod] = useState();
	
	function load() {
		api.get("prod/products").then(
			res => {
				setData(res.data.products);
			}
		)
	}
	
	function setStartEditing() {
		setData([]);
		startEditing(true)
	}
	
	function submit() {
		const final_object = {
			"productID": prodId,
			"Abbr": abbr,
			"PaymentAmount": paymentAmount,
			"EffectiveDate": effectiveDate,
			"SourceType": sourceType,
			"PaymentType": paymentType,
			"TaxYear": taxYear,
			"AllocMethod": allocMethod
		}
		
		api.post(
			"prod/product",
			final_object
		).then(
			res => {
				console.log(res.data);
				startEditing(false);
			}
		)
	}
	
	return (
		<div className="table">
			<table>
				<THead/>
				{
					editing ?
						<TFrom
							prodId={prodId} setProdId={setProdId}
							abbr={abbr} setAbbr={setAbbr}
							effectiveDate={effectiveDate} setEffectiveDate={setEffectiveDate}
							paymentAmount={paymentAmount} setPaymentAmount={setPaymentAmount}
							sourceType={sourceType} setSourceType={setSourceType}
							paymentType={paymentType} setPaymentType={setPaymentType}
							taxYear={taxYear} setTaxYear={setTaxYear}
							allocMethod={allocMethod} setAllocMethod={setAllocMethod}
						/> :
						<TBody rows={data}/>}
			</table>
			
			<div className={"load-button"}>
				{editing ?
					<button onClick={submit}>Submit</button>
					:
					<button onClick={setStartEditing}>Create</button>}
				<button onClick={load}>Load</button>
			</div>
		</div>
	);
}

export default Table;