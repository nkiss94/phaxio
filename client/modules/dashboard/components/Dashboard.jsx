import React from 'react';
import {browserHistory} from 'react-router';
import Nav from './Nav';
import FaxCont from '../containers/FaxCont';
import CheckDigits from './CheckDigits';
import DivisionsCont from '../containers/DivisionsCont';
import Mail from './Mail';
import AddDivisionCont from '../containers/AddDivisionCont';
import EditDivisionCont from '../containers/EditDivisionCont';

class Dashboard extends React.Component {
    constructor(props) {
    super(props);
    this.selectTab = this.selectTab.bind(this);
    this.selectEditTab = this.selectEditTab.bind(this);
    this.state = {
        active_tab: 'fax'
    }
  }

  selectTab(value){
    this.setState({active_tab: value})
  }
  selectEditTab(
     active_tab,
     id,
     institution,
     cashOnly,
     division,
     onlyRegisteredAccounts,
     digitsOnly,
     Alphanumeric,
     accountNumPattern,
     AccountNumLength,
     startsWith, 
     soft_validation, 
     method,
     fax_aton_number, 
     call_number, 
     email, 
     other_intel,
     address,
     city,
     province,
     postalCode){
    this.setState({
        active_tab,
        id,
        institution,
        cashOnly,
        division, 
        onlyRegisteredAccounts,
        digitsOnly,
        Alphanumeric,
        accountNumPattern,
        AccountNumLength,
        startsWith, 
        soft_validation, 
        method,fax_aton_number, 
        call_number, 
        email, 
        other_intel,
        address,
        city,
        province,
        postalCode
    });
    console.log(this.state);
  }

    render() {
        return (
            <div  className="container">     
                <Nav state={this.state} selectTab={this.selectTab} />
                <div>  

                    {this.state.active_tab === "mail" ? <Mail /> : null}
                    {this.state.active_tab === "fax" ? <FaxCont /> : null}
                    {this.state.active_tab === 'check_digits' ? <CheckDigits /> : null}
                    {this.state.active_tab === 'divisions' ? <DivisionsCont 
                        selectEditTab={this.selectEditTab}
                    /> : null} 
                    {this.state.active_tab === 'addDivision' ? <AddDivisionCont /> : null}   
                    {this.state.active_tab === 'editDivision' ? <EditDivisionCont
                        id={this.state.id}
                        institution={this.state.institution}
                        cashOnly={this.state.cashOnly}
                        division={this.state.division}
                        onlyRegisteredAccounts={this.state.onlyRegisteredAccounts}
                        digitsOnly={this.state.digitsOnly}
                        Alphanumeric={this.state.Alphanumeric}
                        accountNumPattern={this.state.accountNumPattern}
                        AccountNumLength={this.state.AccountNumLength}
                        startsWith={this.state.startsWith}
                        soft_validation={this.state.soft_validation}
                        method={this.state.method}
                        fax_aton_number={this.state.fax_aton_number}
                        call_number={this.state.call_number}
                        email={this.state.email}
                        other_intel={this.state.other_intel}
                        address={this.state.address}
                        city={this.state.city}
                        province={this.state.province}
                        postalCode={this.state.postalCode}
                    />: null}                
                </div>       
            </div>
    )
  }
}

export default Dashboard;