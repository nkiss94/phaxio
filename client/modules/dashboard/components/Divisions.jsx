import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import Autocomplete from 'react-autocomplete';
import faxable_institutions from '../../../../config/faxable_institutions.js';
import Dropdown from 'react-dropdown';
import Select from 'react-select';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class Divisions extends React.Component {
	constructor(props){
		super(props);
		this.checkInputInstitution=this.checkInputInstitution.bind(this);
		this.saveDivision=this.saveDivision.bind(this);
		this.loadParents=this.loadParents.bind(this);
		this.findDivisions=this.findDivisions.bind(this);
		this.editDivision = this.editDivision.bind(this);
		this.state={
			value:null,
			institution:null,
			parents:[],
			division:null,
			default:null,
			allDivisions:[],
			inCashOnly:" ",
			onlyRegisteredAccounts:" ",
			accountNumPattern:" ",
			AccountNumLength:" ",
			Alphanumeric:" ",
			digitsOnly:" ",
			startsWith:" ",
			softValidation:" ",
			sendMethod:" ",
			faxATON:" ",
			followUpNum:" ",
			followUpEmail:" ",
			otherIntel:" "
		}
	}
 checkInputInstitution(item){
 	this.setState({value:item});
  	this.state.institution = item;
  	console.log(this.state.institution);
  	for(var i = 0; i < 7;i++){
  		this.state.divisionsState[i] = divisions[i].value;
  	}
}

componentDidMount() {
    this.loadParents();
  }
saveDivision(divToFind){
	document.getElementById("searchSelection").style.display = 'block';
	this.setState({division:divToFind});
	var index;
	var length = this.props.divisions.length;
	for(var i = 0;i<length;i++){
	 	if(this.props.divisions[i].name==divToFind){
	 		index=i;
	 		break;
	 	}
	}

	this.setState({
		_id:this.props.divisions[index]._id,
		inCashOnly:this.props.divisions[index].transfer_cash_only,
		onlyRegisteredAccounts:this.props.divisions[index].registered_account_types_only,
		accountNumPattern:this.props.divisions[index].account_number_pattern,
		AccountNumLength:this.props.divisions[index].account_number_lengths,
		Alphanumeric:this.props.divisions[index].account_number_alphanumeric,
		digitsOnly:this.props.divisions[index].account_number_digits_only,
		startsWith:this.props.divisions[index].account_number_starts_with,
		softValidation:this.props.divisions[index].hint,
		sendMethod:this.props.divisions[index].Method,
		faxATON:this.props.divisions[index].FaxNumber + ' ' + this.props.divisions[index].cuid,
		followUpNum:this.props.divisions[index].FollowUpCallNumber,
		followUpEmail:this.props.divisions[index].FollowUpEmail,
		otherIntel:this.props.divisions[index].OtherIntel
	});
	if(this.props.divisions[index].address!=null){
		this.setState({
			address:this.props.divisions[index].address,
			city:this.props.divisions[index].city,
			province:this.props.divisions[index].province,
			postalCode:this.props.divisions[index].postalCode
		})
	}
	else{
		this.setState({
			address:"",
			city:"",
			province:"",
			postalCode:""
		})
	}
	document.getElementById("divisionInfo").style.display = 'block';
}
loadParents(){
	var newParents = [];  
	 var length = this.props.divisions.length;
	 for(var i = 0;i<length;i++){
	 	if(!newParents.includes(this.props.divisions[i].parent_institution)){
	 		newParents.push(this.props.divisions[i].parent_institution);  
	 	}
	 	else if(this.props.divisions[i].parent_institution==""){
	 		newParents.push(this.props.divisions[i].name);
	 	}
	 	
	 }
	 this.setState({parents:newParents});
}

findDivisions(Parent){
	 document.getElementById("searchSelection").style.display = 'none';
	 document.getElementById("divisionInfo").style.display = 'none';
	 this.setState({division:null});
	 this.state.value = Parent;
	 var newDivisions = [];  
	 var length = this.props.divisions.length;

	 for(var i = 0;i<length;i++){
	 	if(this.props.divisions[i].parent_institution==Parent){
	 	newDivisions.push(this.props.divisions[i].name);   
	 	}	
	 }
	 if(newDivisions.length == 0){
	 	this.saveDivision(Parent);
	 	this.setState({allDivisions:[]});
		this.state.institution = "";

	 }
	 else{
		 this.setState({allDivisions:newDivisions});
		 this.state.institution = Parent;
	}
}
editDivision(){
	var _this = this;
	this.props.selectEditTab(
		'editDivision', 
		_this.state._id,
		_this.state.institution,
		_this.state.inCashOnly,
		_this.state.division, 
		_this.state.onlyRegisteredAccounts,
		_this.state.digitsOnly,
		_this.state.Alphanumeric,
		_this.state.accountNumPattern,
		_this.state.AccountNumLength,
		_this.state.startsWith, 
		_this.state.softValidation, 
		_this.state.sendMethod,
		_this.state.faxATON, 
		_this.state.followUpNum, 
		_this.state.followUpEmail, 
		_this.state.otherIntel,
		_this.state.address,
		_this.state.city,
		_this.state.province,
		_this.state.postalCode
	);
}

render(){
	 
	return(
	<div className="container">	
      	<div className="pageTitle center">Find a Division</div>
      	<div className=" centerME">
      		<div className="row"> 
		        <div className = "col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>  
		        <div className = "center col-lg-10 col-md-10 col-sm-10 col-xs-10">
				          <Autocomplete
				          inputProps={{
				            id:'faxIn',
				            className: 'foc form-control dialogueMed',
				            placeholder: 'institution',
				            style: {
				              borderRadius:'4px',
				              position:'relative',
				              boxShadow:'none',
				              background: '#ffffff',
				            }
				          }}
				          menuStyle = {{
				            background: '#d1d1e0',
				          }}
				          shouldItemRender={matchStateToTerm}
				          value={this.state.value}
				          items={this.state.parents}
				          getItemValue={(item) => item}
				          onChange={(event, value) => this.setState({value:value})}
          				  onSelect={(item) => this.findDivisions(item)}
				          renderItem={(item, isHighlighted) => (
				              <div
				                style={isHighlighted ? styles.highlightedItem : styles.item}
				                key={item}
				              >
				                {item}
				              </div>
				            )}
				          renderMenu={children =>
				                <div className = "inputs" style={{ ...styles.menu, position: 'absolute', width: '100%' }}>
				                    {children}
				                </div>
				            }
				              wrapperStyle={{ position: 'relative', display: 'inline-block'}}
				              >
				          </Autocomplete>
		        </div>
          		<div className = "col-lg-1 col-md-1 col-sm-1 col-xs-1"></div> 
      		</div>
      		{this.state.allDivisions.length>0 ? (
      			<div className="row"> 
			        <div className = "col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>  
			        <div className = "center col-lg-10 col-md-10 col-sm-10 col-xs-10">
					    <DropdownButton className="dialogueMed" style={{marginTop:'10%'}}title="Divisions" onSelect={(eventKey:any)=>this.saveDivision(eventKey)}>
						      {this.state.allDivisions.map(function(element){
						      	return(<MenuItem eventKey={element}>{element}</MenuItem>)
						      })}
					    </DropdownButton>
			        </div>
	          		<div className = "col-lg-1 col-md-1 col-sm-1 col-xs-1"></div> 
      			</div> 
      			):(<div/>)}
      		
      	</div>
      	<div id="searchSelection" style={{display:'none'}} className="jumbotron centerME">
      		<div className="row center">
      				<div className="col-lg-2"></div>
      				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="dialogueMed inActive">{this.state.institution}</div>
					</div>
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="dialogue">{this.state.division}</div>
						<button
				            className= "foc center glyphicon glyphicon-pencil send btn btn-default"
				            style={{
				              boxShadow:'none',
				              borderWidth:'0',
				              borderRadius:'0',
				            }}
				            onClick={this.editDivision}>
				        </button>
					</div>
					<div className="col-lg-2"></div>
      		</div>
      	</div>
      	<div id="divisionInfo" className="jumbotron centerME" style={{display:'none'}}>
      				{this.state.softValidation? (
		      		<div className="row center">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div className="dialogueMed inActive">Soft Validation:</div>
								<div className="dialogueMed">{this.state.softValidation}</div>
							</div>
		      		</div>
		      		):(<div/>)}
	      			
	      			<div className="row center" style={{marginTop:'2%'}}>
							{this.state.inCashOnly=="TRUE" ? (
								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
										<div className="dialogueMed inActive">In-Cash only:</div>
										<div className="dialogueMed">{this.state.inCashOnly}</div>									
								</div>
							):(<div/>)}
							{this.state.onlyRegisteredAccounts=="TRUE"  ? (
								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
									<div className="dialogueMed inActive">Only registered accounts:</div>
									<div className="dialogueMed">{this.state.onlyRegisteredAccounts}</div>
								</div>
							):(<div/>)}
							{this.state.accountNumPattern ? (
								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
									<div className="dialogueMed inActive">Account # pattern:</div>
									<div className="dialogueMed">{this.state.accountNumPattern}</div>
								</div>
							):(<div/>)}
							{this.state.AccountNumLength ? (
								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
									<div className="dialogueMed inActive">Account # length:</div>
									<div className="dialogueMed">{this.state.AccountNumLength}</div>
								</div>
							):(<div/>)}
							{this.state.Alphanumeric=="TRUE" ? (
								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
									<div className="dialogueMed inActive">Alphanumeric:</div>
									<div className="dialogueMed">{this.state.Alphanumeric}</div>
								</div>
							):(<div/>)}
							{this.state.digitsOnly=="TRUE" ? (
								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
									<div className="dialogueMed inActive">Digits only:</div>
									<div className="dialogueMed">{this.state.digitsOnly}</div>
								</div>
							):(<div/>)}
							{this.state.startsWith? (
								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
									<div className="dialogueMed inActive">Starts with:</div>
									<div className="dialogueMed">{this.state.startsWith}</div>
								</div>
							):(<div/>)}
					</div>
					<div className="row center">
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="dialogueMed inActive">Send Method:</div>
							<div className="dialogueMed ">{this.state.sendMethod}</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="dialogueMed inActive">Fax Number or ATON CUID:</div>
							<div className="dialogueMed">{this.state.faxATON}</div>
						</div>
					</div>
					{(this.state.followUpNum||this.state.followUpEmail)? (
						<hr></hr>
					):(<div/>)}
					<div className="row center">
						{this.state.followUpNum? (		
							<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
								<div className="dialogueMed inActive">Follow-Up Phone Number:</div>
								<div className="dialogueMed">{this.state.followUpNum}</div>
							</div>
						):(<div/>)}
						{this.state.followUpEmail? (	
							<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
								<div className="dialogueMed inActive">Follow-Up Email:</div>
								<div className="dialogueMed">{this.state.followUpEmail}</div>
							</div>
						):(<div/>)}
					</div>
					{this.state.address? (
						<hr></hr>
					):(<div/>)}
					{this.state.address? (	
						<div className="row center">	
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div className="dialogueMed inActive">Address:</div>
								<div className="dialogueMed">
									{this.state.address + ", " + this.state.city + ", " + this.state.province + ", " + this.state.postalCode}
								</div>
							</div>
						</div>
					):(<div/>)}
					{this.state.otherIntel? (	
						<hr></hr>
					):(<div/>)}
					{this.state.otherIntel? (	
						<div className="row center">	
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div className="dialogueMed inActive">Other Intel:</div><div className="dialogueMed">{this.state.otherIntel}</div>
							</div>
						</div>
					):(<div/>)}			
      	</div>
    </div>


		)
	}
}
export function matchStateToTerm(item, value) {
  return (
    (item.toLowerCase().indexOf(value.toLowerCase()) !== -1) 
  )
}
export function renderMenuItem (){

}
export let styles = {
  item: {
    zIndex:'1',
    padding: '2px 6px',
    cursor: 'default'
  },

  highlightedItem: {
    zIndex:'1',
    color: 'white',
    background: '#a3a6a7',
    padding: '2px 6px',
    cursor: 'default'
  },

  menu: {
    zIndex:'1',
    border: 'solid 1px #ccc',
    background: 'white'
  }
}