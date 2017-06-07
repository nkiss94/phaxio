import React from 'react';
import {Link} from 'react-router';
import MainOptions from './MainOptions';
import {browserHistory} from 'react-router';

class FaxSomething extends React.Component {
    constructor(props) {
    super(props);
    this.sendFax=this.sendFax.bind(this);
    this.state = {

    }
  }

  sendFax(){
    // const number = this.refs.number.value;
    // const url = this.refs.url.value
    Meteor.call('sendPhaxio', function(error, response){
        if(error){
            console.log(error)
        } else {
            console.log(response)
        }
    })

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
                                Enter your fax number and pdf url
                            </div>
                           
                            <div>Hi!!!</div>
                            <input placeholder="4161234567" ref="number" className="form-control" />
                            <input placeholder="hercules url" ref="url" className="form-control" />
                            <button  onClick={() => this.sendFax()}>send</button>


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