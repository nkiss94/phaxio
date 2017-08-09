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
		this._onSelectMethod=this._onSelectMethod.bind(this);
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
		    selected: 'none',
		    options: [
				{ value: 0, label: 'none' },
				{ value: 1, label: 'transfer type' },
				{ value: 2, label: 'account type' },
				{ value: 3, label: 'account number length' },
				{ value: 4, label: 'account number contents' },
				{ value: 5, label: 'starts with' },
				],
			sendOptions: [
				{ value: 0, label: 'Fax' },
				{ value: 1, label: 'ATON' },
				{ value: 2, label: 'Mail' },
			],
			selectedMethod:"Fax"
		}
	}

	createDivision(){
		console.log("fired!")
		const parent = this.refs.parent.value;
		const division = this.refs.division.value;
		const hard_validation = this.state.selected;
		const soft_validation = this.refs.soft_validation.value;
		const method = this.state.selectedMethod;
		const aton_cuid = 'GIST';
		const fax_number = this.refs.fax_number.value;
		const call_number = this.refs.call_number.value;
		const email = this.refs.email.value;
		const other_intel = this.refs.other_intel.value;
		Meteor.call('insert.division', parent, division, hard_validation, soft_validation, method, aton_cuid, fax_number, call_number, email, other_intel)
	}

	_onSelect (option) {
	    //console.log('You selected ', option.label)
	    this.setState({selected: this.state.options[option].label})
	    console.log(this.state.options[option].label);
  	}
  	_onSelectMethod (option) {
	    //console.log('You selected ', option.label)
	    this.setState({selectedMethod: this.state.sendOptions[option].label})
  	}
// <Dropdown  options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
	render(){
	const defaultOption = this.state.options[0]
	return(
		<div className="container">	
	      	<div className="jumbotron centerME"> 
	      	<form>
	      		<div className="form-group col-xs-6 col-md-6">
			        <label className=" dialogueMed inActive control-label">Parent:</label>
			        <input className="form-control foc " ref="parent" id="name" placeholder="BMO"/>
			    </div>
			    <div className="form-group col-xs-6 col-md-6">
			        <label className=" dialogueMed inActive control-label">Division:</label>
			        <input className="form-control foc " ref="division" id="name" placeholder="BMO Branch"/>
			    </div>
	      	</form>
			<br />
				<div className="row">
					<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" />
					 <div className = "center col-lg-6 col-md-6 col-sm-6 col-xs-6">
					 <div className="dialogueMed inActive">Hard Validation:</div>
						 <DropdownButton id="hardVal" className="inputs foc "title={this.state.selected} onSelect={(eventKey:any)=>this._onSelect(eventKey)} >
						      {this.state.options.map(function(element){
						      	return(<MenuItem eventKey={element.value}>{element.label}</MenuItem>)
						      })}
					    </DropdownButton>
					</div>
				    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" />
				</div>
				<br />
				
				{this.state.selected != 'none' ? <ValidationDropdown /> : null}
				<br />
				  	<form>
	      		<div className="form-group col-xs-12 col-md-12">
			        <label className="dialogueMed inActive control-label">Soft Validation:</label>
			        <input className="form-control foc " ref="soft_validation" id="name" placeholder="8-10 digits long"/>
			    </div>
			    	<div className="row">
					<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" />
					 <div className = "center col-lg-6 col-md-6 col-sm-6 col-xs-6">
					 <div className="dialogueMed inActive">Send Method:</div>
						 <DropdownButton id="hardVal" className="inputs foc "title={this.state.selectedMethod} onSelect={(eventKey:any)=>this._onSelectMethod(eventKey)} >
						      {this.state.sendOptions.map(function(element){
						      	return(<MenuItem eventKey={element.value}>{element.label}</MenuItem>)
						      })}
					    </DropdownButton>
					</div>
				    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" />
				</div>
				{this.state.selectedMethod != 'none' ? <ValidationDropdown /> : null}
			    </form>
			
				<br />
				<input  className="divisionInput url foc inputs form-control " placeholder="Fax Number" ref="fax_number" />
				<br />
				<input  className="divisionInput url foc inputs form-control " placeholder="Follow-up Call Number" ref="call_number" />
				<br />
				<input  className="divisionInput url foc inputs form-control " placeholder="Follow-up Email" ref="email"/>
				<br />
				<input  className="divisionInput url foc inputs form-control " placeholder="Other Intel" ref="other_intel"/>
				<br />
				<button onClick={() => this.createDivision()}>create division</button>
	    	</div>
	    </div>
		)
	}
}
