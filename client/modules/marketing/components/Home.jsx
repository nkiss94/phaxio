import React from 'react';
import {Link} from 'react-router';
import Options from './Options';
import {browserHistory} from 'react-router';

class Home extends React.Component {
    constructor(props) {
    super(props);
    this.checkDigits = this.checkDigits.bind(this);
    this.faxSomething = this.faxSomething.bind(this);
    this.state = {

    }
  }

    checkDigits(){
        browserHistory.push('/check_digits')
    }

    faxSomething(){
        browserHistory.push('/fax_something')
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
                                What do you want to do?
                            </div>
                           
                            <Options checkDigits={this.checkDigits} faxSomething={this.faxSomething} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Home;