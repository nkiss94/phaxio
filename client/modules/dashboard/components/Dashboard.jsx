import React from 'react';
import {browserHistory} from 'react-router';
import Nav from './Nav';
import Fax from './Fax';
import CheckDigits from './CheckDigits';
import Institutions from './Institutions';

class Dashboard extends React.Component {
    constructor(props) {
    super(props);
    this.selectTab = this.selectTab.bind(this);
    this.state = {
        active_tab: 'fax'
    }
  }

  selectTab(value){
    this.setState({active_tab: value})
  }

    render() {
        return (
            <div>     
                <Nav state={this.state} selectTab={this.selectTab} />
                <div className="cards jumbotron centerME center ">  
                    {this.state.active_tab === "fax" ? <Fax /> : null}
                    {this.state.active_tab === 'check_digits' ? <CheckDigits /> : null}
                    {this.state.active_tab === 'institutions' ? <institutions /> : null}               
                </div>       
            </div>
    )
  }
}

export default Dashboard;