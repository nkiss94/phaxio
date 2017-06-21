import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import faxable_institutions from '../../../../config/faxable_institutions.js';
import Autocomplete from 'react-autocomplete';


export default class FaxSomething extends React.Component {
  constructor(props) {
    super(props);
    this.sendFax=this.sendFax.bind(this);
    this.checkInput=this.checkInput.bind(this);
    this.state = {
     institution : null,
     err: null,
     success: null,
     number: null
   }
 }

 checkInput(value){
  this.setState({institution:value});    
  this.setState({number: value})
  console.log(this.state.number);  
}

amendFax(number){
  //console.log("IM HERE");
  var faxNumber = number;
  console.log(faxNumber);
  var newNum = "";
        
        for (var i = 0; i < faxNumber.length; i++)
        {
            if ((faxNumber.substring(i, i+1) == "-") == false && (faxNumber.substring(i,i+1) == " " ) == false && (faxNumber.substring(i,i+1) == "+" ) == false) {            
                newNum = newNum.concat(faxNumber.substring(i,i+1));
            }
        }
        if(newNum.length == 10){
            newNum = "+1" + newNum;
        }
        else if(newNum.length == 11){
            newNum = "+" + newNum;
        }
        else {
            alert("Invalid fax number! Please enter a new number.");
        }
        return newNum;
}

//meteor --settings settings.json
sendFax(){
  var finalNumber = this.amendFax(this.state.number);
  console.log(finalNumber);
  const url = this.refs.url.value;
  const _this = this;
  if(finalNumber.length == 12){
  console.log("YAY");
            Meteor.call('sendPhaxio', finalNumber, url,  function(err, resp){
              if(err){
                _this.setState({err: err})
              }
                _this.setState({sucess: resp})
              })
  }
  else{
    console.log("NOPE");
    return;
  }           
}

render() {
  return ( 
    <div className="container">       
      <hr></hr>
      <div className="row center">
        <div className="pageTitle">FaxSimple</div>
      </div>  
      <hr></hr>
      <div className="cards jumbotron centerME">
          <div className="center row dialogue">What's your PDF URL?</div>
          <div className="row ">
              <div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
              <div className = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  
                  <input
                  placeholder="url"
                  ref="url"
                  className="url foc inputs form-control col-lg-8 col-md-8 col-sm-8 col-xs-8"
                  style={{

                    boxShadow:'none',
                    borderRadius:'4px'


                  }}
                  />
                  <button
                      className= "send foc inputs btn btn-default col-lg-4 col-md-4 col-sm-4 col-xs-4"
                          style={{
                            
                            boxShadow:'none',
                            borderRadius:'4px',
                          
                            marginRight:'0'
                          }}>
                          Add
                  </button>
              </div>
              <div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
          </div>
      </div>
      <div className="cards jumbotron centerME">
      <div className="center row dialogue">What's the fax number?</div>
      <div className="row"> 
          <div className = "col-lg-3 col-md-3 col-sm-2 col-xs-2"></div>  
          <div className = "center col-lg-6 col-md-6 col-sm-8 col-xs-8">
          <Autocomplete
          inputProps={{
            className: 'foc form-control inputs',
            placeholder: 'institution fax #',
            style: {
              position:'relative',
              boxShadow:'none',
              background: '#ffffff',
              borderBottomRightRadius:'0px',
              borderBottomLeftRadius:'0px'
            }
          }}
          menuStyle = {{
            borderRadius: '4px',
            borderTopRightRadius:'0px',
            borderTopLeftRadius:'0px',
            background: '#d1d1e0',
          }}
          value={this.state.institution}
          items={faxable_institutions}
          getItemValue={(item) => item.number}
          onChange={(event, value) => this.checkInput(value)}
          onSelect={
            value => this.checkInput(value)}
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
          <div className = "col-lg-3 col-md-3 col-sm-2 col-xs-2"></div> 
      </div>
      </div>
      <hr></hr>
      <div className = "row">
          <div className = "col-lg-5 col-md-5 col-sm-4 col-xs-4"></div>
          <button 
            className= "foc center inputs send btn btn-default col-lg-2 col-md-2 col-sm-4 col-xs-4"
            style={{
              
              boxShadow:'none',
              borderRadius:'4px',
            }}
            onClick={this.sendFax}>send fax
          </button>
          <div className = "col-lg-5 col-md-5 col-sm-4 col-xs-4"></div>      
      </div>          
    </div>    
      )
  }
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