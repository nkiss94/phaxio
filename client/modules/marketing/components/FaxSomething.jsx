import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import faxable_institutions from '../data/faxable_institutions.js';
import Autocomplete from 'react-autocomplete';
import ErrorNotification from './ErrorNotification';
import SuccessNotification from './SuccessNotification';

class FaxSomething extends React.Component {
    constructor(props) {
    super(props);
    this.sendFax=this.sendFax.bind(this);
    this.state = {
       institution : 'Shareowner',
       err: null,
       success: null
  }

sendFax(){
    const url = this.refs.url.value
    const institution = this.state.institution
    for (var i=0; i < faxable_institutions.length; i++) {
      const _this = this;
        if (faxable_institutions[i].name === institution) {
            let institution = faxable_institutions[i].name
            let number = faxable_institutions[i].number
            Meteor.call('sendPhaxio', institution, number, function(err, resp){
              if(err){
                _this.setState({err: err})
              }
                _this.setState({sucess: resp})
            })
        }
    }
}

  render() {
    return (
      <div className="ws-layout-container ws-account-transfer">
        <div className="footer-padding">
            <div className="card-container">
                <div className="row-md header">
                    <div className="col-6">
                        <div className="title">
                            Funding
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="buttons">
                            <div className="button-new secondary-action">Logout</div>
                        </div>
                    </div>
                </div>
                <div className="row-md">
                    <div className="col-12">
                        <div className="card centered-question">
                            <div className="section content size-xs">
                                Enter your pdf and choose an institution
                            </div>
                           
                            <div>Hi!!!</div>
                            <input placeholder="enter url" ref="url" className="form-control" />
                            <Autocomplete
                              value={this.state.institution}
                              items={faxable_institutions}
                              getItemValue={(item) => item.name}
                              onChange={(event, value) => this.setState({ institution: value })}
                              onSelect={value => this.setState({ institution: value })}
                              renderItem={(item, isHighlighted) => (
                                <div
                                  style={isHighlighted ? styles.highlightedItem : styles.item}
                                  key={item.name}
                                >{item.name}</div>
                              )}
                            />
                            <button onClick={this.sendFax}>send fax</button>
                            {this.state.err ? <ErrorNotification /> : null}
                            {this.state.success ? <SuccessNotification /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default FaxSomething;

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