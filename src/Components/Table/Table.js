import React, {useEffect, useState} from 'react';
import THead from "./THead";
import TBody from "./TBody/TBody";
import api from "../../Public/api";
import TFrom from './TForm/TFrom';

function Table(props) {
	const [data, setData] = useState([]);
	const [editing, startEditing] = useState(false)
	
	function load() {
		api.get("prod/products").then(
			res => {
				setData(res.data.products);
			}
		)
	}
	
	function setStartEditing() {
		setData([]);
		startEditing(!editing)
	}
	
	return (
		<div className="table">
			<table>
				<THead/>
				{editing ? <TFrom /> : <TBody rows={data}/>}
			</table>
			
			<div className={"load-button"}>
				<button onClick={setStartEditing}>{editing ? 'Save' : 'Create'}</button>
				<button onClick={load}>Load</button>
			</div>
		</div>
	);
}

export default Table;