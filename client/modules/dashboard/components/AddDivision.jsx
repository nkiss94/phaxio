import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import ValidationDropdown from './ValidationDropdown';


export default class AddDivision extends React.Component {
	constructor(props){
		super(props);
		this.createDivision=this.createDivision.bind(this);
		this._onSelect = this._onSelect.bind(this)
		this.state={
			"Parent": null,
		    "Division": null,
		    "Hard Validation": [],
		    "Soft Validation": [],
		    "Method": null,
		    "ATON CUID": null,
		    "Fax Number": null,
		    "Follow-Up Call Number": null,
		    "Follow-Up Email": null,
		    "Other Intel": [],
		    selected: 'none'
		}
	}

	createDivision(){
		const parent = this.refs.parent.value;
		const division = this.refs.division.value;
		const hard_validation = this.refs.hard_validation.value;
		const soft_validation = this.refs.soft_validation.value;
		const method = this.refs.method.value;
		const aton_cuid = this.refs.aton_cuid.value;
		const fax_number = this.refs.fax_number.value;
		const call_number = this.refs.call_number.value;
		const email = this.refs.email.value;
		const other_intel = this.refs.other_intel.value;
		Meteor.call('insert.division', parent, division, hard_validation, soft_validation, method, aton_cuid, fax_number, call_number, email, other_intel)
	}

	_onSelect (option) {
	    console.log('You selected ', option.label)
	    this.setState({selected: option.value})
	    console.log(option)
  	}

	render(){
	const options = [
		{ value: 0, label: 'none' },
		{ value: 1, label: 'transfer type' },
		{ value: 2, label: 'account type' },
		{ value: 3, label: 'account number length' },
		{ value: 4, label: 'account number contents' },
		{ value: 5, label: 'starts with' }
	]
	const defaultOption = options[0]
	return(
		<div className="container">	
	      	<div className="cards jumbotron centerME"> 
				<input className="divisionInput" placeholder="Parent" ref="parent" />
				<br />
				<input placeholder="Division" ref="division"  />
				<br />
				<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
				{this.state.selected != 'none' ? <ValidationDropdown /> : null}
				<br />
				<input placeholder="Soft Validation" ref="soft_validation" />
				<br />
				<input placeholder="Method" ref="method" />
				<br />
				<input placeholder="ATON CUID" ref="aton_cuid" />
				<br />
				<input placeholder="Fax Number" ref="fax_number" />
				<br />
				<input placeholder="Follow-up Call Number" ref="call_number" />
				<br />
				<input placeholder="Follow-up Email" ref="email"/>
				<br />
				<input placeholder="Other Intel" ref="other_intel"/>
				<br />
				<button onClick={() => this.createDivision()}>create division</button>
	    	</div>
	    </div>
		)
	}
}
