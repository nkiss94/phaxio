import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

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
            <div className="container">     
                <ul className="nav inputs nav-tabs">
                    <div onClick={() => this.props.selectTab('fax')}>
                        <li role="presentation" className={state.active_tab === 'fax' ? 'Active' : 'inActive'}>Fax</li>
                    </div>
                    <div onClick={() => this.props.selectTab('check_digits')}>
                        <li role="presentation" className={state.active_tab === 'check_digits' ? 'Active' : 'inActive'}>Check Digits</li>
                    </div>
                    <div onClick={() => this.props.selectTab('institutions')}>
                        <li role="presentation" className={state.active_tab === 'institutions' ? 'Active' : 'inActive'}>Institutions</li>
                    </div>
                    <li><button onClick={() =>this.logoutUser}>logout</button></li>
                </ul>     
            </div>
    )
  }
}

export default HeaderNav;