import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class HeaderNav extends React.Component {
    constructor(props) {
    super(props);
    this.logoutUser=this.logoutUser.bind(this);
  }

    logoutUser(){
        Meteor.logout()
        browserHistory.push('/')
    }

    render() {
        const {state} = this.props;
        return (
            <nav className="container navbar">     
                <ul className="nav inputs nav-tabs">
                        <li onClick={() => this.props.selectTab('fax')} role="presentation"><a className={state.active_tab === 'fax' ? 'Active' : 'inActive'}>Fax</a></li>
                        <li onClick={() => this.props.selectTab('check_digits')} role="presentation"><a className={state.active_tab === 'check_digits' ? 'Active' : 'inActive'}>Check Digits</a></li>
                        <li className="dropdown" role="presentation">
                            <a className="dropdown-toggle" data-toggle="dropdown" className={state.active_tab === ('divisions'||'addDivision') ? 'Active' : 'inActive'}>
                                Divisions
                                <b className="caret"></b>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="center" onClick={() => this.props.selectTab('divisions')}>Find Divisions </li>
                                <li className="center" onClick={() => this.props.selectTab('addDivision')}>Add Divisions</li>
                            </ul>
                        </li>
                        <ul id="logout" className="nav nav-tabs navbar-right">
                            <li onClick={() =>this.logoutUser}><a className='inActive navbar-right'>Logout</a></li>
                        </ul> 
                </ul>    
            </nav>
    )
  }
}

export default HeaderNav;