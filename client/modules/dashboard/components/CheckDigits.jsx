import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import {Link} from "react-router";
import data from '../../../../config/data.js';
import MdLoop from 'react-icons/lib/md/loop'


class CheckDigits extends React.Component {
    constructor(props) {
    super(props);
    this.calculateDigits = this.calculateDigits.bind(this);
    this.chooseInstitution = this.chooseInstitution.bind(this);
    this.refreshState = this.refreshState.bind(this);
    this.onChange = this.onChange.bind(this);
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

  render() {
    return (
        <div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="heading-title text-center">
                            <h3 className="text-uppercase">Check Digit Calculator</h3>
                            <input className="account-number" placeholder="account #" ref="account_number" value={this.state.account_number} onChange={this.onChange} />
                            <div onClick={() => this.refreshState()}>
                                <MdLoop size={18}/>
                            </div>
                            <div> Check digits:</div>
                                { this.state.check_digit_1 === 'd' ? <div>Account doesn't exist</div> : this.state.check_digit_1 +' '+this.state.check_digit_2 }
                        </div>

                        <div className="col-md-4">
                            <div onClick={() => this.chooseInstitution('questrade')} className={this.state.institution_name === 'questrade' ? "team-member selected" : "team-member"}>
                                <div className="team-img">
                                    <img src="http://findependencehub.com/wp-content/uploads/2015/03/questrade-300x300.png" alt="" />
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>Questrade</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div onClick={() => this.chooseInstitution('scotia')}  className={this.state.institution_name === 'scotia' ? "team-member selected" : "team-member"}>
                                <div className="team-img">
                                    <img src="http://plancanada.ca/image/planv4/about/scotiabank.gif" alt="" />
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>Scotia</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div onClick={() => this.chooseInstitution('rbc')} className={this.state.institution_name === 'rbc' ? "team-member selected" : "team-member"}>
                                <div className="team-img">
                                    <img src="https://lh3.googleusercontent.com/vY6CcG84EiozSiZwM1v1_UFEeOK2ADXlHWVV-vgl0qkF-dNcpTr-Mme7YpTPc0YtHoU=w300" alt="" />
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>RBC</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div onClick={() => this.chooseInstitution('cibc')} className={this.state.institution_name === 'cibc' ? "team-member selected" : "team-member"}>
                                <div className="team-img">
                                    <img src="http://gigglesplayland.com/140-455-large/cibc-bank.jpg" alt="" />
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>CIBC</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div onClick={() => this.chooseInstitution('edward_jones')} className={this.state.institution_name === 'edward_jones' ? "team-member selected" : "team-member"}>
                                <div className="team-img">
                                    <img src="https://lawrenceartscenterorg.r.worldssl.net/wp-content/uploads/2016/01/logo-edward-jones.png" alt="" />
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>Edward Jones</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div onClick={() => this.chooseInstitution('bmo')} className={this.state.institution_name === 'bmo' ? "team-member selected" : "team-member"}>
                                <div className="team-img">
                                    <img src="http://www.ethiquette.ca/wp-content/uploads/2015/12/bmo-logo.jpg" alt="" />
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>BMO</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default CheckDigits;