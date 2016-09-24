import React from 'react';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';
import { Link } from 'react-router';

const AthleteSidebar = React.createClass({
    render(){
      return(
          <div>
            <div id="sidebar-clear" className="main-sidebar">

              <div className="current-user">
                <Link to="/athlete_profile" className="name">
                    <img className="avatar" src="/images/profile.png" />
                    <span>
                      Tim Corcoran
                      <i className="fa fa-chevron-down"></i>
                    </span>
                  </Link>
              </div>

              <div className="menu-section">
                <h3>Programs</h3>
                  <ul>
                    <li>
                      <Link to={`/${this.props.profiles[0].company}/athlete_programs`} className={ location.pathname == '/business' ? 'active' : null }>
                        <i className="ion-stats-bars"></i> <span>Programs</span>
                      </Link>
                    </li>
                  </ul>
              </div>

              <div className="menu-section">
                <h3>Performance</h3>
                  <ul>
                    <li>
                      <Link to={`/${this.props.profiles[0].company}/athlete_performance`} className={ location.pathname == '/trainers' ? 'active' : null }>
                        <i className="ion-stats-bars"></i> <span>Performance</span>
                      </Link>
                    </li>
                  </ul>
              </div>

              <div className="menu-section">
                <h3>Squad</h3>
                  <ul>
                    <li>
                      <Link to={`/${this.props.profiles[0].company}/athlete_squad`}  className={ location.pathname == '/athletes' ? 'active' : null }>
                        <i className="ion-person-stalker"></i> <span>Squad</span>
                      </Link>
                    </li>
                  </ul>
              </div>
              
            </div>
          </div>
    )
  }
})

export default AthleteSidebar;