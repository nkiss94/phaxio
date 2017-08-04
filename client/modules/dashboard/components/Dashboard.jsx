import React from 'react';
import {browserHistory} from 'react-router';
import Nav from './Nav';
import FaxCont from '../containers/FaxCont';
import CheckDigits from './CheckDigits';
import DivisionsCont from '../containers/DivisionsCont';
import AddDivisionCont from '../containers/AddDivisionCont';

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
            <div  className="container">     
                <Nav state={this.state} selectTab={this.selectTab} />
                <div>  
                    {this.state.active_tab === "fax" ? <FaxCont /> : null}
                    {this.state.active_tab === 'check_digits' ? <CheckDigits /> : null}
                    {this.state.active_tab === 'divisions' ? <DivisionsCont /> : null} 
                    {this.state.active_tab === 'addDivision' ? <AddDivisionCont /> : null}                   
                </div>       
            </div>
    )
  }
}

export default Dashboard;