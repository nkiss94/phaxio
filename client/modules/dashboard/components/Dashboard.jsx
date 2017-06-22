import React from 'react';
import {Link} from 'react-router';
import Options from './Options';
import {browserHistory} from 'react-router';

class Dashboard extends React.Component {
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
      <div className="container">
                    
                        
                        <div className="cards jumbotron centerME center ">  
                                    <div className="row pageTitle">
                                        What do you want to do?
                                    </div>
                                    <Options checkDigits={this.checkDigits} faxSomething={this.faxSomething} />
                                    
                        </div>
                        
                    
      </div>
    )
  }
}

export default Dashboard;