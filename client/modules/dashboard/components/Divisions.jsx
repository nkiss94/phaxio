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
		this.createDivision=this.createDivision.bind(this);
		this.loadDivisions=this.loadDivisions.bind(this);
		this.loadParents=this.loadParents.bind(this);
		this.findDivisions=this.findDivisions.bind(this);
		this.state={
			
			value:null,
			institution:null,
			parents:[],
			division:null,
			default:null,
			allDivisions:[],
			hardValidation:"hardValidation",
			softValidation:"softValidation",
			sendMethod:"sendMethod",
			faxATON:"faxATON",
			followUpNum:"followUpNum",
			followUpEmail:"followUpEmail",
			otherIntel:"otherIntel"


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

createDivision(name){
	Meteor.call('insert.division', name, function(err, resp){
		if(err){
			console.log(err)
		} else {
			console.log(resp)
		}
	})
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
	 	if(this.props.divisions[i].Division==divToFind){
	 		index=i;
	 		break;
	 	}
	}

	this.setState({
		hardValidation:this.props.divisions[index].HardValidation,
		softValidation:this.props.divisions[index].SoftValidation,
		sendMethod:this.props.divisions[index].Method,
		faxATON:this.props.divisions[index].FaxNumber + ' ' + this.props.divisions[index].ATONCUID,
		followUpNum:this.props.divisions[index].FollowUPCallNumber,
		followUpEmail:this.props.divisions[index].FollowUpEmail,
		otherIntel:this.props.divisions[index].OtherIntel
	})
	document.getElementById("divisionInfo").style.display = 'block';
}
loadParents(){
	var newParents = [];  
	 var length = this.props.divisions.length;
	 for(var i = 0;i<length;i++){
	 	if(!newParents.includes(this.props.divisions[i].Parent)){
	 		newParents.push(this.props.divisions[i].Parent);  
	 	}
	 	
	 }
	 this.setState({parents:newParents});
}
loadDivisions(){
	 var newDivisions = [];  
	 var length = this.props.divisions.length;
	 for(var i = 0;i<length;i++){
	 	newDivisions.push(this.props.divisions[i].Division);   
	 }
	 this.setState({allDivisions:newDivisions});
	 this.loadParents();
}
findDivisions(Parent){
	 document.getElementById("searchSelection").style.display = 'none';
	 document.getElementById("divisionInfo").style.display = 'none';
	 this.setState({division:null});
	 this.state.value = Parent;
	 var newDivisions = [];  
	 var length = this.props.divisions.length;
	 for(var i = 0;i<length;i++){
	 	if(this.props.divisions[i].Parent==Parent){
	 	newDivisions.push(this.props.divisions[i].Division);   
	 	}	
	 }
	 this.setState({allDivisions:newDivisions});
	 this.state.institution = Parent;
}

//<button onClick={ () => this.loadDivisions()}>load</button>
render(){
	 
	return(
	<div className="container">	
      	<div className="pageTitle center">Find a Dvision</div>
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
      	</div>
      	<div id="searchSelection" style={{display:'none'}} className="jumbotron centerME">
      		<div className="row center">
      				<div className="col-lg-2"></div>
      				<div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
						<div className="dialogue inActive">{this.state.institution}:</div>
					</div>
					<div className="col-lg-4 col-md-0 col-sm-0 col-xs-0">
						<div className="dialogue">{this.state.division}</div>
					</div>
					<div className="col-lg-2"></div>
      		</div>
      	</div>
      	<div id="divisionInfo" className="jumbotron centerME" style={{display:'none'}}>

		      		<div className="row center">
							<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
								<div className="dialogueMed inActive">Soft Validation:</div>
								<div className="dialogueMed">{this.state.softValidation}</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
								<div className="dialogueMed inActive">Hard Validation:</div>
								<div className="dialogueMed">{this.state.hardValidation}</div>
							</div>
		      		</div>
	      			<hr></hr>
					<div className="row center" style={{marginTop:'6%'}}>
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="dialogueMed inActive">Send Method:</div>
							<div className="dialogueMed ">{this.state.sendMethod}</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="dialogueMed inActive">Fax Number or ATON CUID:</div>
							<div className="dialogueMed">{this.state.faxATON}</div>
						</div>
					</div>
					<hr></hr>
					<div className="row center" style={{marginTop:'6%'}}>		
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="dialogueMed inActive">Follow-Up Phone Number:</div>
							<div className="dialogueMed">{this.state.followUpNum}</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="dialogueMed inActive">Follow-Up Email:</div>
							<div className="dialogueMed">{this.state.followUpEmail}</div>
						</div>
					</div>
					<hr></hr>
					<div className="row center" style={{marginTop:'6%'}}>	
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="dialogueMed inActive">Other Intel:</div><div className="dialogueMed">{this.state.otherIntel}</div>
						</div>
					</div>
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