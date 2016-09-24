import React from 'react';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';
import { Link } from 'react-router';

const Sidebar = React.createClass({
    render(){
      return(
          <div>
            <div id="sidebar-clear" className="main-sidebar">

              <div className="current-user">
                <Link to="/landing" className="name">
                    <img className="avatar" src="/images/profile.png" />
                    <span>
                      Tim Corcoran
                      <i className="fa fa-chevron-down"></i>
                    </span>
                  </Link>
              </div>

              <div className="menu-section">
                <h3>Business</h3>
                  <ul>
                    <li>
                      <Link to="/business" className={ location.pathname == '/business' ? 'active' : null }>
                        <i className="ion-stats-bars"></i> <span>Business</span>
                      </Link>
                    </li>
                  </ul>
              </div>

              <div className="menu-section">
                <h3>Trainers</h3>
                  <ul>
                    <li>
                      <Link to="/trainers" className={ location.pathname == '/trainers' ? 'active' : null }>
                        <i className="ion-stats-bars"></i> <span>Trainers</span>
                      </Link>
                    </li>
                  </ul>
              </div>

              <div className="menu-section">
                <h3>Athletes</h3>
                  <ul>
                    <li>
                      <Link to="/athletes" className={ location.pathname == '/athletes' ? 'active' : null }>
                        <i className="ion-person-stalker"></i> <span>Athletes</span>
                      </Link>
                    </li>
                  </ul>
              </div>

              <div className="menu-section">
                <h3>Programs</h3>
                  <ul>
                    <li>
                      <Link to="/programs" className={ location.pathname == '/programs' ? 'active' : null }>
                        <i className="ion-calendar"></i> <span>Programs</span>
                      </Link>
                    </li>
                  </ul>
              </div>

              <div className="menu-section">
                <h3>Products</h3>
                  <ul>
                    <li>
                      <Link to="/products" className={ location.pathname == '/products' ? 'active' : null }>
                        <i className="ion-monitor"></i> <span>Products</span>
                      </Link>
                    </li>
                  </ul>
              </div>

              <div className="menu-section">
                <h3>Website</h3>
                  <ul>
                    <li>
                      <Link to="/website" className={ location.pathname == '/website' ? 'active' : null }>
                        <i className="ion-monitor"></i> <span>Website</span>
                      </Link>
                    </li>
                  </ul>
              </div>

            </div>
          </div>
    )
  }
})

export default Sidebar;