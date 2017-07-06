import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import {Link} from "react-router";
import {browserHistory} from 'react-router';
import data from '../../../../config/data.js';
import MdLoop from 'react-icons/lib/md/loop'


class CheckDigits extends React.Component {
    constructor(props) {
    super(props);
    this.faxSomething=this.faxSomething.bind(this);
    this.goHome=this.goHome.bind(this);
    this.checkDigits=this.checkDigits.bind(this);
    this.calculateDigits = this.calculateDigits.bind(this);
    this.chooseInstitution = this.chooseInstitution.bind(this);
    this.refreshState = this.refreshState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.intel=this.intel.bind(this);
    this.state = {
        institution_name: null,
        account_number: null,
        check_digit_1: ' ',
        check_digit_2: ' '
    }
  }

  onChange(e){
    this.setState({
        account_number: e.target.value
    })
  }

    refreshState(){
       this.setState({
        institution_name: null,
        account_number: null,
        check_digit_1: ' ',
        check_digit_2: ' '
       })
    }

        chooseInstitution(institution){
        const account_number = this.refs.account_number.value;
        this.setState({
            institution_name: institution
        }, () => {
            this.calculateDigits(this.state.institution_name, account_number)
        })
    }

    calculateDigits(institution, account_number){
        const firstDigit = account_number[0];
        const options = data[institution];
        const lastDigit = options[firstDigit];

        const nineDigits = account_number + lastDigit;

        var sum=0, delta=[0,1,2,3,4,-4,-3,-2,-1,0], deltaIndex, deltaValue;

        for (var i=0; i<nineDigits.length; i++ ){
        sum += parseInt(nineDigits.substring(i,i+1));
        }

        for (var i=nineDigits.length-1; i>=0; i-=2){   
        sum += delta[parseInt(nineDigits.substring(i,i+1))];
        } 

        if (10-(sum%10)===10){ return 0; }
        const check_digit = 10-(sum%10);

        this.setState({
            check_digit_1: nineDigits.slice(-1),
            check_digit_2: check_digit
        })
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
    intel(){
    browserHistory.push('/institution_info')
    }
  render() {
    return (
        <div>
                <div className="container">
                <ul className="nav inputs nav-tabs">
                        <li role="presentation"><a className="foc inActive" href="" onClick={this.goHome}>Home</a></li>
                        <li role="presentation"><a className="foc inActive" href="" onClick={this.faxSomething}>Fax a Transfer</a></li>
                        <li role="presentation" className=" active"><a className="foc" href="#">Calculate Check Digits</a></li>
                        <li role="presentation"><a className="inActive foc" href="" onClick={this.intel}>Intel</a></li>
                </ul>
                    
                            <div className="pageTitle center">Check Digit Calculator</div>
                            <hr></hr>
                            <div className="center">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4"></div>
                                        <input className=" col-lg-4 col-md-4 centerME url foc inputs form-control" placeholder="account #" ref="account_number" value={this.state.account_number} onChange={this.onChange} />
                                        <div className="col-lg-4 col-md-4"></div>
                                    </div>
                                    <div className="inputs" onClick={() => this.refreshState()}>
                                        <MdLoop size={18}/>
                                    </div>
                                    <div className = "inputs"><h3>Check digits:</h3></div>
                                        { this.state.check_digit_1 === 'd' ? <div className = "inputs"><h4>Account doesn't exist</h4></div> : this.state.check_digit_1 +' '+this.state.check_digit_2 }
                            </div>
                    <div className="row center">       
                        <div className="col-lg-4 col-md-4">
                            <div onClick={() => this.chooseInstitution('questrade')} className={this.state.institution_name === 'questrade' ? "team-member selected" : "team-member"}>
                                <div className=" team-img">
                                    <img src="http://findependencehub.com/wp-content/uploads/2015/03/questrade-300x300.png" alt="" />
                                </div>
                            </div>
                            <div className="inputs team-title">
                                <h3>Questrade</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div onClick={() => this.chooseInstitution('scotia')}  className={this.state.institution_name === 'scotia' ? "team-member selected" : "team-member"}>
                                <div className=" team-img">
                                    <img src="http://plancanada.ca/image/planv4/about/scotiabank.gif" alt="" />
                                </div>
                            </div>
                            <div className=" inputs team-title">
                                <h3>Scotia</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div onClick={() => this.chooseInstitution('rbc')} className={this.state.institution_name === 'rbc' ? "team-member selected" : "team-member"}>
                                <div className=" team-img">
                                    <img src="https://lh3.googleusercontent.com/vY6CcG84EiozSiZwM1v1_UFEeOK2ADXlHWVV-vgl0qkF-dNcpTr-Mme7YpTPc0YtHoU=w300" alt="" />
                                </div>
                            </div>
                            <div className="inputs team-title">
                                <h3>RBC</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row center">
                        <div className="col-lg-4 col-md-4">
                            <div onClick={() => this.chooseInstitution('cibc')} className={this.state.institution_name === 'cibc' ? "team-member selected" : "team-member"}>
                                <div className=" team-img">
                                    <img src="http://gigglesplayland.com/140-455-large/cibc-bank.jpg" alt="" />
                                </div>
                            </div>
                            <div className="inputs team-title">
                                <h3>CIBC</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div onClick={() => this.chooseInstitution('edward_jones')} className={this.state.institution_name === 'edward_jones' ? "team-member selected" : "team-member"}>
                                <div className=" team-img">
                                    <img src="https://lawrenceartscenterorg.r.worldssl.net/wp-content/uploads/2016/01/logo-edward-jones.png" alt="" />
                                </div>
                            </div>
                            <div className="inputs team-title">
                                <h3>Edward Jones</h3>
                            </div>
                        </div>
                        <div className="ccol-lg-4 col-md-4">
                            <div onClick={() => this.chooseInstitution('bmo')} className={this.state.institution_name === 'bmo' ? "team-member selected" : "team-member"}>
                                <div className=" team-img">
                                    <img src="http://www.ethiquette.ca/wp-content/uploads/2015/12/bmo-logo.jpg" alt="" />
                                </div>
                            </div>
                            <div className="inputs team-title">
                                <h3>BMO</h3>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
                
            
        
    )
  }
}

export default CheckDigits;