import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import faxable_institutions from '../../../../config/faxable_institutions.js';
import Autocomplete from 'react-autocomplete';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import ReactS3Uploader from 'react-s3-uploader';
import Dropzone from 'react-dropzone';


export default class FaxSomething extends React.Component {
  constructor(props) {
    super(props);
    this.checkDigits=this.checkDigits.bind(this);
    this.sendFax=this.sendFax.bind(this);
    this.goHome=this.goHome.bind(this);
    this.checkInput=this.checkInput.bind(this);
    this.addURL=this.addURL.bind(this);
    this.intel=this.intel.bind(this);
    this.sendFaxUrl=this.sendFaxUrl.bind(this);
    this.sendFaxFile=this.sendFaxFile.bind(this);
    this.state = {
     institution : "+",
     url:null,
     err: null,
     success: null,
     number: null,
     files: [],
     filesURL: [],
     filesPreview:[]
    }
 }
 intel(){
    browserHistory.push('/institution_info')
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

 checkInput(value){
  this.setState({institution:value});    
  this.setState({number: value})
  console.log(this.state.number);
  console.log(this.state.institution);  
}

amendFax(number){
  //console.log("IM HERE");

  var faxNumber = number;
  console.log(faxNumber);
  var newNum = "";
        
        for (var i = 0; i < faxNumber.length; i++)
        {
            if ((faxNumber.substring(i, i+1) == "-") == false && (faxNumber.substring(i,i+1) == " " ) == false && 
              (faxNumber.substring(i,i+1) == "+" ) == false && (faxNumber.substring(i,i+1) == ")" ) == false 
              && (faxNumber.substring(i,i+1) == "(" ) == false) {            
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
sendFax(){
  var faxNum = this.amendFax(this.state.number);
  this.sendFaxUrl(faxNum);
  //this.sendFaxFile(faxNum);
}
//meteor --settings settings.json
sendFaxUrl(FinalNumber){
  console.log("faxing URLs");
  var finalNumber = FinalNumber;
  console.log(finalNumber);
  const _this = this;
  var previews = [];
  for(var i = 0;i<this.state.filesURL.length;i++){
    previews[i]= this.state.filesURL[i];
  }
  console.log(this.state.files);
  var pre = new File([""], "filename");
  console.log(pre);
  pre = this.state.files[0];
  console.log(S3);
  S3.upload({file:pre},
          function(e,r){
            console.log(r);
          }
  );
  if(finalNumber.length == 12 && previews.length>0){
  console.log("YAY");
            Meteor.call('sendPhaxio', finalNumber, previews,  function(err, resp){
              if(err){
                _this.setState({err: err})
              }
                _this.setState({sucess: resp});
                document.getElementById("urlIn").value = "";
                document.getElementById("faxIn").value = "";
                _this.setState({filesURL: []});
              }
              )
  }
  else{
    console.log("NOPE");
    return;
  }           
}

sendFaxFile(FinalNumber){
  console.log("faxing files");
  var reader = new FileReader();
  reader.addEventListener("loadend", function() {
    previews = reader.result;
   // reader.result contains the contents of blob as a typed array
  });
  var finalNumber = FinalNumber;
  console.log(finalNumber);
  const _this = this;
  var previews;
  /*for(var i = 0;i<this.state.files.length;i++){
    var blob = this.state.files[i].preview;
    previews[i] = reader.readAsArrayBuffer(blob);
    console.log(previews[i]);
  }*/
  previews = "/Users/akovalcik/Desktop/TD.pdf";
  if(finalNumber.length == 12){
  console.log("YAY");

            Meteor.call('sendPhaxioFileLib', finalNumber, previews,  function(err, resp){
              if(err){
                _this.setState({err: err})
              }
                _this.setState({sucess: resp});
                console.log(resp);
                document.getElementById("urlIn").value = "";
                document.getElementById("faxIn").value = "";
                _this.setState({files: []});
                
              }
              )
  }
  else{
    console.log("NOPE");
    return;
  }  
           
}
onDrop(files){
    this.setState({files:files});
    console.log({files}); 
}

addURL(){
  var val = document.getElementById("urlIn").value;
  console.log(val);
  this.setState({ 
    filesURL: this.state.filesURL.concat(val)
  });
  
}


render() {
  return ( 
    <div className="container"> 
      <ul className="nav inputs nav-tabs">
            <li role="presentation"><a className="inActive foc" href="" onClick={this.goHome}>Home</a></li>
            <li role="presentation" className="active"><a className="foc" href="" onClick={this.faxSomething}>Fax a Transfer</a></li>
            <li role="presentation"><a className="inActive foc" href="" onClick={this.checkDigits}>Calculate Check Digits</a></li>
            <li role="presentation"><a className="inActive foc" href="" onClick={this.intel}>Intel</a></li>
      </ul>      
      <div className="row center">
        <div className="pageTitle">FaxSimple</div>
      </div>  
      <div className="cards jumbotron centerME">
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
                //display:'none',
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
                this.state.files.map(f => <div key={f.name}>{f.name}</div>)
              }
              {
                this.state.filesURL.map((fu,index) => <div key={index}>{fu}</div>)
              }
            </div>
          
      </div>
      <div className="cards jumbotron centerME">
      <div className="center row dialogue">What's the fax number?</div>
      <div className="row"> 
          <div className = "col-lg-3 col-md-3 col-sm-2 col-xs-2"></div>  
          <div className = "center col-lg-6 col-md-6 col-sm-8 col-xs-8">
          <Autocomplete
          inputProps={{
            id:'faxIn',
            className: 'foc form-control inputs',
            placeholder: 'institution fax #',
            style: {
              position:'relative',
              boxShadow:'none',
              background: '#ffffff',
              borderRadius:'0px'
            }
          }}
          menuStyle = {{
            borderRadius: '4px',
            borderTopRightRadius:'0px',
            borderTopLeftRadius:'0px',
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
      <hr/>
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