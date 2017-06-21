import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import faxable_institutions from '../data/faxable_institutions.js';
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

//meteor --settings settings.json
sendFax(){
  const url = this.refs.url.value
  const _this = this;
  console.log(this.state.number);
            Meteor.call('sendPhaxio', this.state.number, url,  function(err, resp){
              if(err){
                _this.setState({err: err})
              }
                _this.setState({sucess: resp})
              })
            }

            render() {
              return ( 
                <div className="container">       
                  <hr></hr>
                  <div className="row center">
                    <div className="pageTitle">FaxSimple</div>
                  </div>  
                  <hr></hr>
                  <div className="center row dialogue">What's your PDF URL?</div>
                  <div className="row ">
                      <div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
                      <div className = "centerME col-lg-4 col-md-4 col-sm-4 col-xs-4">
                          
                          <input
                          placeholder="url"
                          ref="url"
                          className="url form-control col-lg-8 col-md-8 col-sm-6 col-xs-6"
                          style={{
                            boxShadow:'none',
                            borderRadius:'4px'


                          }}
                          />
                          <button
                              className= "send btn btn-default col-lg-4 col-md-4 col-sm-6 col-xs-6"
                                  style={{
                                    
                                    boxShadow:'none',
                                    borderRadius:'4px',
                                    
                                    marginRight:'0'
                                  }}>
                                  Add
                          </button>
                      </div>
                      <div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
                  </div>
                  <div className="center row dialogue">What's the fax number?</div>
                  <div className="row"> 
                      <div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
                      <div className="center col-lg-4 col-md-4 col-sm-4 col-xs-4"> 
                          <button 
                              className= "send btn btn-default"
                              style={{
                                width:'500px',
                                boxShadow:'none',
                                borderRadius:'4px',
                              
                                marginRight:'0'
                              }}
                              onClick={this.sendFax}>send fax
                          </button>
                          <Autocomplete
                          inputProps={{

                            className: 'form-control',
                            placeholder: 'institution fax #',
                            style: {
                              
                              boxShadow:'none',
                              background: 'rgba(255, 255, 255, 0.9)',
                              borderBottomRightRadius:'0px',
                              borderBottomLeftRadius:'0px',
                              

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
                              key={item.name}
                              >
                              {item.name}
                              </div>
                              )}
                            >
                            </Autocomplete>

                      </div> 
                      <div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4"></div> 

                  </div>
                  {this.state.err ? <ErrorNotification /> : null}
                  {this.state.success ? <SuccessNotification /> : null}
                  </div>    
                  )
            }
          }

          export let styles = {
            item: {
              padding: '2px 6px',
              cursor: 'default'
            },

            highlightedItem: {
              color: 'white',
              background: 'hsl(200, 50%, 50%)',
              padding: '2px 6px',
              cursor: 'default'
            },

            menu: {
              border: 'solid 1px #ccc'
            }
          }