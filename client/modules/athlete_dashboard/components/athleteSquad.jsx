import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import {Link} from 'react-router';


class athleteSquad extends React.Component {
  render() {
    return(
    	<div>
            
            <div className="menubar">
              <div className="sidebar-toggler visible-xs">
                <i className="ion-navicon"></i>
              </div>

              <div className="page-title">
                Squad
              </div>
            </div>

            <div className="content-wrapper">
              
              <div className="metrics clearfix">
                <div className="metric">
                  <span className="field">Trainers</span>
                  <span className="data">20</span>
                </div>
                <div className="metric">
                  <span className="field">Athletes</span>
                  <span className="data">150</span>
                </div>
                <div className="metric">
                  <span className="field">Programs</span>
                  <span className="data">10</span>
                </div>
                <div className="metric">
                  <span className="field">Sales</span>
                  <span className="data">$15,120</span>
                </div>
              </div>

            </div>
       	</div>
    )
  }
}

export default athleteSquad;