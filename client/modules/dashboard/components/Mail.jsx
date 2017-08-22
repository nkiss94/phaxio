import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import faxable_institutions from '../../../../config/faxable_institutions.js';
import Autocomplete from 'react-autocomplete';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import ReactS3Uploader from 'react-s3-uploader';
import Dropzone from 'react-dropzone';
import countries from '../../../../config/countries.js';
import provinces from '../../../../config/provinces.js';

export default class Mail extends React.Component {
  constructor(props) {
    super(props);
    this.checkInput=this.checkInput.bind(this);
    this.addURL=this.addURL.bind(this);
    this.clearFile=this.clearFile.bind(this);
    this.sendMail=this.sendMail.bind(this);
    this.checkInputProvince=this.checkInputProvince.bind(this);
    this.placeInSendList=this.placeInSendList.bind(this);
    this.state = {
     institution : "+",
     url:null,
     err: null,
     success: null,
     countryCode: null,
     file:null,
     resp:null,
     prCode:null,
     Address:null,
     City:null,
     PostalorZip:null,
     Name:null,
     addedURL:null,
     dataUrlFile:null
    }
 }
 checkInput(value){ 
  this.setState({countryCode: value});
}
checkInputProvince(value){   
  this.setState({prCode: value});
}
onDrop(file){
    var myFile = file[0];
    this.setState({file:file[0].name,addedURL:null,resp:""});
    this.placeInSendList(myFile);
}
placeInSendList(file){
    var myFile = file;
    const _this = this;
    var reader = new FileReader();
    reader.onload = function(fileLoadEvent){
      document.getElementById("clearIcon").style.display = 'block';
      _this.setState({dataUrlFile:reader.result});
    }
    reader.readAsDataURL(myFile);
}
clearFile(){
  document.getElementById("clearIcon").style.display = 'none';
  this.setState({
    file:null,
    dataUrlFile:null,
    addedURL:null
  });
}
addURL(){
  document.getElementById("clearIcon").style.display = 'block';
  var val = document.getElementById("urlIn").value;
  this.setState({ 
    file: val,
    addedURL:val,
    dataUrlFile:null
  });
  console.log(this.state.addedURL);
}
sendMail(){
  var _this = this;
  var address = {
    name:document.getElementById("Name").value,
    address1:document.getElementById("Address").value,
    city:document.getElementById("City").value,
    zip:document.getElementById("PostalorZip").value,
    country:this.state.countryCode,
    state:this.state.prCode
  };
  if(this.state.addedURL != null ){
  Meteor.call('sendMailAddress',address,this.state.addedURL,function(err,res){
    if(res){
      _this.setState({
        resp:"Success!",
        file:null,
        dataUrlFile:null,
        addedURL:null
      });
    }
    console.log(err, res);
  });
  }
 else if(this.state.dataUrlFile != null ){
  Meteor.call('sendMailAddressWithUpload',address,this.state.dataUrlFile,function(err,res){
    if(res){
      _this.setState({
        resp:"Success!",
        file:null,
        dataUrlFile:null,
        addedURL:null
      });
    }
    console.log(err, res);
  });
  }
}
render() {
  return ( 
    <div className="container">  
      <div className="row center">
        <div className="pageTitle">Mailsimple</div>
      </div> 
      
      <div className=" jumbotron centerME">
          <div className="center row dialogue">Enter your PDF URL</div>
          <div className="row ">
              <div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
              <div className = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  
                  <input
                  placeholder="url"
                  ref="url"
                  id="urlIn"
                  className="url foc inputs form-control col-lg-8 col-md-8 col-sm-8 col-xs-8"
                  style={{

                    boxShadow:'none',
                    borderRadius:'4px'
                  }}
                  ></input>
                  <button
                      onClick={(event) => this.addURL()}
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
          <div className = "row">
            <div className = "col-lg-12 col-md-0 col-sm-0 col-xs-0"></div>
            <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <Dropzone 
                onDrop={this.onDrop.bind(this)}
                className="centerME"
                style={{
                marginTop:'10%',
                width: '100%',
                height: '200',
                borderWidth: 2,
                borderColor: '#666',
                borderStyle: 'dashed',
                borderRadius: 5}}>
              <div className="center row dialogue">
                  Or drag your files here
              </div>
              </Dropzone> 
            </div>
            <div className = "col-lg-12 col-md-0 col-sm-0 col-xs-0"></div>
          </div>
          <div style={{marginTop:'10%'}} className="dialogue center">Uploaded Files:</div>
            <div className="center DialgoueMed" >
              {
                  <div className="row center">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">{this.state.file}</div>
                    <span id="clearIcon" style={{display:'none'}} className="col-lg-2 col-md-2 col-sm-2 col-xs-2 glyphicon glyphicon-remove" onClick={(event) => this.clearFile()}></span>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
                  </div>
                
              }
            </div>
          <div style={{marginTop:'10%'}} className="dialogueMed center">Do not upload a file with more than 5 pages</div>
      </div>
      <div className=" jumbotron centerME">
      <div className="center row dialogue">Who are you sending to?</div>
      <div className="row" style={{marginTop:'5%'}}>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
          <input
                placeholder="Name"
                ref="Name"
                id="Name"
                className="url foc inputs form-control col-lg-4 col-md-4 col-sm-4 col-xs-4"
                style={{
                  width:'33.3333%',
                  boxShadow:'none',
                  borderRadius:'4px'
                }}
                ></input>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
      </div>
      <div className="row" style={{marginTop:'5%'}}>
        <input
            placeholder="Address"
            ref="Address"
            id="Address"
            className="url foc inputs form-control col-lg-4 col-md-4 col-sm-4 col-xs-4"
            style={{
              width:'50%',
              boxShadow:'none',
              borderRadius:'4px'
            }}
            ></input>
            <input
            placeholder="City"
            ref="City"
            id="City"
            className="url foc inputs form-control col-lg-4 col-md-4 col-sm-4 col-xs-4"
            style={{
              width:'30%',
              boxShadow:'none',
              borderRadius:'4px'
            }}
            ></input>
            <input
            placeholder="Postal/Zip Code"
            ref="PostalorZip"
            id="PostalorZip"
            className="url foc inputs form-control col-lg-4 col-md-4 col-sm-4 col-xs-4"
            style={{
              width:'20%',
              boxShadow:'none',
              borderRadius:'4px'
            }}
            ></input>

      </div>
      <div className="row" style={{marginTop:'5%'}}> 
          <div className = "center col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <Autocomplete
          inputProps={{
            id:'faxIn',
            className: 'foc form-control inputs',
            placeholder: 'Prov/State',
            style: {
              position:'relative',
              boxShadow:'none',
              background: '#ffffff',
              borderRadius:'4px'
            }
          }}
          menuStyle = {{
            borderRadius: '4px',
            borderTopRightRadius:'0px',
            borderTopLeftRadius:'0px',
            background: '#d1d1e0',
          }}
          shouldItemRender={matchStateToTerm}
          value={this.state.prCode}
          items={provinces}
          getItemValue={(item) => item.code}
          onChange={(event, value) => this.checkInputProvince(value)}
          onSelect={value => this.checkInputProvince(value)}
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
          <div className = "center col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <Autocomplete
          inputProps={{
            id:'faxIn',
            className: 'foc form-control inputs',
            placeholder: 'Country',
            style: {
              position:'relative',
              boxShadow:'none',
              background: '#ffffff',
              borderRadius:'4px'
            }
          }}
          menuStyle = {{
            borderRadius: '4px',
            borderTopRightRadius:'0px',
            borderTopLeftRadius:'0px',
            background: '#d1d1e0',
          }}
          shouldItemRender={matchStateToTerm}
          value={this.state.countryCode}
          items={countries}
          getItemValue={(item) => item.code}
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
      </div>  

      <div className="center row dialogue" style={{'marginTop':'5%'}}>{this.state.resp}</div>
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
            onClick={this.sendMail}>send mail
          </button>
          <div className = "col-lg-5 col-md-5 col-sm-4 col-xs-4"></div>      
      </div>      
      <hr/>
    </div>    
      )
  }
}


export function matchStateToTerm(item, value) {
  return (
    item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    item.code.toLowerCase().indexOf(value.toLowerCase()) !== -1
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