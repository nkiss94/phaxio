import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import Autocomplete from 'react-autocomplete';
import faxable_institutions from '../../../../config/faxable_institutions.js';
import Dropzone from 'react-dropzone';

export default class InstitutionInfo extends React.Component {
	constructor(props){
		super(props);
		this.faxSomething=this.faxSomething.bind(this);
		this.goHome=this.goHome.bind(this);
		this.checkDigits=this.checkDigits.bind(this);
		this.intel=this.intel.bind(this);
		this.state={

		}
	}

checkDigits(){
    browserHistory.push('/check_digits')
}

faxSomething(){
    browserHistory.push('/fax_something')
}

goHome(){
    browserHistory.push('/Dashboard')
}

intel(){
    browserHistory.push('/institution_info')
}

render(){
	return(
	<div className="container">	
		<ul className="nav inputs nav-tabs">
            <li role="presentation"><a className="inActive foc" href="" onClick={this.goHome}>Home</a></li>
            <li role="presentation"><a className="inActive  foc" href="" onClick={this.faxSomething}>Fax a Transfer</a></li>
            <li role="presentation"><a className="inActive foc" href="" onClick={this.checkDigits}>Calculate Check Digits</a></li>
            <li role="presentation" className="active"><a className="foc" href="" onClick={this.intel}>Intel</a></li>
          
      	</ul> 
      	<div className="pageTitle center">Intel</div>
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
				          value={this.state.institution}
				          items={faxable_institutions}
				          getItemValue={(item) => item.number}
				          onChange={(event, value) => this.checkInput(value)}
				          onSelect={value => this.checkInput(value)}
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
		        <div className = "center col-lg-10 col-md-10 col-sm-10 col-xs-10">
				          <Autocomplete
				          inputProps={{
				            id:'faxIn',
				            className: 'foc form-control dialogueMed',
				            placeholder: 'division',
				            style: {
				              borderRadius:'4px',	
				              marginTop:'10%',	
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
				          value={this.state.institution}
				          items={faxable_institutions}
				          getItemValue={(item) => item.number}
				          onChange={(event, value) => this.checkInput(value)}
				          onSelect={value => this.checkInput(value)}
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
      	</div>
      	<div className="cards jumbotron centerME">
      		<div className="row center">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="dialogue"><u>Account Validation</u></div>
						<div className="dialogueMed">asasdasasdads</div>
					</div>
      		</div>
      	</div>
		<div className="cards jumbotron centerME">
				<div className="row center">
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div className="dialogue"><u>Send Method</u></div>
						<div className="dialogueMed">asasdasasdads</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div className="dialogue"><u>Fax Number or ATON CUID</u></div>
						<div className="dialogueMed">1 (800) 400-9999</div>
					</div>
				</div>
		</div>
		<div className="cards jumbotron centerME">
				<div className="row center">		
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div className="dialogue"><u>Follow-Up Phone Number</u></div>
						<div className="dialogueMed">1 (800) 400-9999</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div className="dialogue"><u>Follow-Up Email</u></div>
						<div className="dialogueMed">akovalcik@wealthsimple.com</div>
					</div>
				</div>
		</div>
		<div className="cards jumbotron centerME">
				<div className="row center">	
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="dialogue"><u>Other Intel</u></div><div className="dialogueMed">Account Number Range: 245-00000-00 TO 835-99999-99,
RESP Fax Number: 1-855-729-7931</div>
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