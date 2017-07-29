import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import faxable_institutions from '../../../../config/faxable_institutions.js';
import Autocomplete from 'react-autocomplete';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import ReactS3Uploader from 'react-s3-uploader';
import Dropzone from 'react-dropzone';

export default class Fax extends React.Component {
  constructor(props) {
    super(props);
    this.sendFax=this.sendFax.bind(this);
    this.checkInput=this.checkInput.bind(this);
    this.addURL=this.addURL.bind(this);
    this.sendFaxUrl=this.sendFaxUrl.bind(this);
    this.placeInSendList=this.placeInSendList.bind(this);
    this.deleteURL=this.deleteURL.bind(this);
    this.deleteAWSFile=this.deleteAWSFile.bind(this);
    this.state = {
      institution : "+",
      url:null,
      err: null,
      success: null,
      number: null,
      files: [],
      filesURL: [],
      filesPreview:[],
      dataUrlFiles:[],
      resp:null
    }
  }

  checkInput(value){
    this.setState({institution:value});
    this.setState({number: value})
    console.log(this.state.number);
    console.log(this.state.institution);
  }

  amendFax(number){
    var faxNumber = number;
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
      return "error";
    }
    return newNum;
  }

  sendFax(){
    var faxNum = this.amendFax(this.state.number);
    if(faxNum=="error"){
      return;
    }
    this.sendFaxUrl(faxNum,function(err,resp){
      if(err){

      }
      else{
        _this.setState({resp:"Successfully sent to Phaxio!"});
      }
    });
  }
 
  placeInSendList(file){
    console.log("here");
    var currentFiles = this.state.dataUrlFiles.slice();
    var myFile = file;
    const _this = this;
    var reader = new FileReader();
    reader.onload = function(fileLoadEvent){
      var currentFiles = _this.state.dataUrlFiles.slice();
      currentFiles.push({
        "name": file.name,
        "result" : reader.result
      });
      _this.setState({dataUrlFiles:currentFiles});
    }
    reader.readAsDataURL(myFile);
  }
  sendFaxUrl(finalNumber){
    const _this = this;
    var previews = [];
    var length = this.state.filesURL.length + this.state.dataUrlFiles.length;
    for(var i = 0;i<this.state.filesURL.length;i++){
      previews[i]= this.state.filesURL[i];
    }
      for(var i = 0;i<this.state.dataUrlFiles.length;i++){
        Meteor.call('upload', finalNumber, previews,this.state.dataUrlFiles[i]
          ,function(err,succ){
          if(err){
            _this.setState({resp:"Error!"});
          }
          else{
            console.log(succ);
            previews.push(succ);
            if(previews.length==length){
               Meteor.call('sendPhaxio',finalNumber,previews,function(err,resp){
                if(err){
                    _this.setState({resp:"Error!"});         
                  }
                  else{
                    _this.setState({resp:"Success!"});
                    _this.setState({filesURL:[]});
                    _this.setState({dataUrlFiles:[]});
                  }
               });
            }
          }
        });
      }
  }
  onDrop(file){
    var newFiles = this.state.files.slice();
    for(var i =0;i<file.length;i++){
      newFiles.push(file[i]);
    }
    this.setState({files:newFiles});
    for(var i =0;i<file.length;i++){
      this.placeInSendList(file[i]);
    }
  }
  deleteURL(index){
    var array = this.state.filesURL.slice();
    array.splice(index, 1);
    this.setState({filesURL: array });
  }
  deleteAWSFile(index){
    var files = this.state.files.slice();
    var fileURLs = this.state.dataUrlFiles.slice();
    files.splice(index, 1);
    fileURLs.splice(index, 1);
    this.setState({files: files });
    this.setState({dataUrlFiles: fileURLs });
  }
  addURL(){
    var val = document.getElementById("urlIn").value;
    this.setState({
      filesURL: this.state.filesURL.concat(val)
    });

  }
  render() {
    return (
      <div className="container">
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
              this.state.files.map((f,index) =>
                <div className="row center">
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" key={f.name}>{f.name}</div>
                  <span className="col-lg-2 col-md-2 col-sm-2 col-xs-2 glyphicon glyphicon-remove" onClick={(event) => this.deleteAWSFile(f.name,index)}></span>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
                </div>
              )
            }
          </div>
          <div className="center DialgoueMed" >
            {
              this.state.filesURL.map((fu,index) =>
                <div className="row center">
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" key={index}>PDF {fu}</div>
                  <span className="col-lg-2 col-md-2 col-sm-2 col-xs-2 glyphicon glyphicon-remove" onClick={(event) => this.deleteURL(index)}></span>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
                </div>
              )
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