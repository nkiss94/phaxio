import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import faxable_institutions from '../../../../config/faxable_institutions.js';
import Autocomplete from 'react-autocomplete';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import ReactS3Uploader from 'react-s3-uploader';
import Dropzone from 'react-dropzone';
import SelectedDivision from './SelectedDivision';

export default class Fax extends React.Component {
  constructor(props) {
    super(props);
    this.sendFax=this.sendFax.bind(this);
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
      dataUrlFiles:[],
      resp:null,
      value: '',
      divisions: [],
      selectedDivision: null
    }
  }

  componentDidMount(){
    this.setState({divisions: this.props.divisions})
  }

  amendFax(num){
    var number = num.toString();
    if(number.length == 10){
      number = "+1" + number;
    }
    else if(number.length == 11){
      number = "+" + number;
    }
    else {
      alert("Invalid fax number! Please enter a new number.");
      return "error";
    }
    return number;
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
    Meteor.call('upload', finalNumber, previews,this.state.dataUrlFiles
      ,function(err,succ){
      if(err){
        _this.setState({resp:"Error!"});
      }
      else{
        _this.setState({resp:"Success!"});
        _this.setState({filesURL:[]});
        _this.setState({dataUrlFiles:[]});
        _this.setState({files:[]});

      }
    });
      
  }
  onDrop(file){

    var newFiles = this.state.files.slice();
    for(var i =0;i<file.length;i++){
      newFiles.push(file[i]);
      console.log(newFiles);
    }
    this.setState({files:newFiles,resp:""});
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
          <div className="pageTitle">Faxsimple</div>
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
                this.state.files.map((f,index) => 
                  <div className="row center" key={index}>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">{f.name}</div>
                    <span className="col-lg-2 col-md-2 col-sm-2 col-xs-2 glyphicon glyphicon-remove" onClick={(event) => this.deleteAWSFile(index)}></span>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
                  </div>
                )
              }
            </div>
            <div className="center DialgoueMed" >
              {
                this.state.filesURL.map((fu,index) => 
                  <div className="row center" key={index}>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">PDF {fu}</div>
                    <span className="col-lg-2 col-md-2 col-sm-2 col-xs-2 glyphicon glyphicon-remove" onClick={(event) => this.deleteURL(index)}></span>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
                  </div>
                )
              }
            </div>
          
        </div>
        <div className=" jumbotron centerME">
          <div className="center row dialogue">Where to?</div>
          <div className="row">
            <div className = "col-lg-3 col-md-3 col-sm-2 col-xs-2"></div>
            <div className = "center col-lg-6 col-md-6 col-sm-8 col-xs-8">
                <Autocomplete
                  inputProps={{
                    id:'faxIn',
                    className: 'foc form-control dialogueMed',
                    placeholder: 'divison',
                    style: {
                      borderRadius:'4px',
                      position:'relative',
                      boxShadow:'none',
                      background: '#ffffff',
                    }
                  }}
                   menuStyle = {{
                    background: '#d1d1e0',
                    height:'200px'
                  }}
                  shouldItemRender={matchStateToTerm}
                  value={this.state.value}
                  items={this.state.divisions}
                  getItemValue={(item) => item.name}
                  onSelect={(value, item) => {
                    this.setState({ value, selectedDivision: item,number:item.FaxNumber });
                  }}
                  onChange={(event, value) => {
                    this.setState({ value, number:value });
                  }}
                  renderItem={(item, isHighlighted) => (
                    <div
                      style={isHighlighted ? styles.highlightedItem : styles.item}
                      key={item._id}
                    >{item.name}</div>
                  )}
                  renderMenu={children =>
                        <div className = "inputs" style={{ ...styles.menu, position: 'absolute', width: '100%' }}>
                            {children}
                        </div>
                    }
                  wrapperStyle={{ position: 'relative', display: 'inline-block'}}

                />
            </div>
          </div>
          {this.state.selectedDivision ? <SelectedDivision state={this.state} /> : null} 
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
      item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
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