import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import Autocomplete from 'react-autocomplete';
import faxable_institutions from '../../../../config/faxable_institutions.js';
import Dropdown from 'react-dropdown';
import Select from 'react-select';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class AddDivision extends React.Component {
	constructor(props){
		super(props);
		this.checkInputInstitution=this.checkInputInstitution.bind(this);
		this.saveDivision=this.saveDivision.bind(this);
		this.createDivision=this.createDivision.bind(this);
		this.state={
			
			value:null,
			institution:null,
			division:null,
			default:null,
			divisionsState:[],
			accountValidation:"accountValidation",
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
saveDivision(element){
	//console.log(collections.Divisions);
	document.getElementById("searchSelection").style.display = 'block';
	console.log(element);
	this.setState({division:element});
}

render(){
	return(
	<div className="container">	
      	<div className="pageTitle center">Add a Division</div>
      	<div className="cards jumbotron centerME">
      		<div className="row"> 
		        <div className = "col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>  
		        <div className = "center col-lg-10 col-md-10 col-sm-10 col-xs-10">
				          <Autocomplete
				          inputProps={{
				            id:'faxIn',
				            className: 'foc form-control dialogue',
				            placeholder: 'institution',
				            style: {
				              borderRadius:'4px',
				              position:'relative',
				              boxShadow:'none',
				              background: '#ffffff',
				              borderRadius:'0px'
				            }
				          }}
				          menuStyle = {{
				            borderRadius: '4px',
				            background: '#d1d1e0',
				          }}
				          shouldItemRender={matchStateToTerm}
				          value={this.state.value}
				          items={faxable_institutions}
				          getItemValue={(item) => item.name}
				          onChange={(event, value) => this.setState({value:value})}
          				  onSelect={(item) => this.checkInputInstitution(item)}
				          renderItem={(item, isHighlighted) => (
				              <div
				                style={isHighlighted ? styles.highlightedItem : styles.item}
				                key={item.abbr}
				              >
				                {item.name}
				              </div>
				            )}
				          renderMenu={children =>
				                <div className = "inputs" style={{ ...styles.menu, position: 'absolute', width: '100%' }}>
				                    {children}
				                </div>
				            }
				              wrapperStyle={{ position: 'relative', display: 'inline-block' }}
				              >
				          </Autocomplete>
		        </div>
          		<div className = "col-lg-1 col-md-1 col-sm-1 col-xs-1"></div> 
      		</div>
      		<div className="row"> 
		        <div className = "col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>  
		        <div className = "dialogue center col-lg-10 col-md-10 col-sm-10 col-xs-10">
				    <DropdownButton style={{marginTop:'10%'}}title="Divisions" onSelect={(eventKey:any)=>this.saveDivision(eventKey)}>
					      {this.state.divisionsState.map(function(element){
					      	return(<MenuItem eventKey={element}>{element}</MenuItem>)
					      })}
				    </DropdownButton>
		        </div>
          		<div className = "col-lg-1 col-md-1 col-sm-1 col-xs-1"></div> 
      		</div> 
      	</div>
      	<div id="searchSelection" style={{display:'none'}} className="cards jumbotron centerME">
      		<div className="row center">
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div className="dialogue"><u>{this.state.institution}</u></div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div className="dialogue"><u>{this.state.division}</u></div>
					</div>
      		</div>
      	</div>
      	<div className="cards jumbotron centerME">
      		<div className="row center">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="dialogue"><u>Account Validation</u></div>
						<div className="dialogueMed">{this.state.accountValidation}</div>
					</div>
      		</div>
      	</div>
		<div className="cards jumbotron centerME">
				<div className="row center">
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div className="dialogue"><u>Send Method</u></div>
						<div className="dialogueMed">{this.state.sendMethod}</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div className="dialogue"><u>Fax Number or ATON CUID</u></div>
						<div className="dialogueMed">{this.state.faxATON}</div>
					</div>
				</div>
		</div>
		<div className="cards jumbotron centerME">
				<div className="row center">		
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div className="dialogue"><u>Follow-Up Phone Number</u></div>
						<div className="dialogueMed">{this.state.followUpNum}</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div className="dialogue"><u>Follow-Up Email</u></div>
						<div className="dialogueMed">{this.state.followUpEmail}</div>
					</div>
				</div>
		</div>
		<div className="cards jumbotron centerME">
				<div className="row center">	
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="dialogue"><u>Other Intel</u></div><div className="dialogueMed">{this.state.otherIntel}</div>
					</div>
				</div>
      	</div>
    </div>


		)
	}
}
export function matchStateToTerm(item, value) {
  return (
    item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    item.number.toLowerCase().indexOf(value.toLowerCase()) !== -1
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