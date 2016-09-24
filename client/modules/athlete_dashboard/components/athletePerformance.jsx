import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import {Link} from 'react-router';


class athletePerformance extends React.Component {
  render() {
    console.log(this.props)
    return(
    	<div>
            
            <div className="menubar">
              <div className="sidebar-toggler visible-xs">
                <i className="ion-navicon"></i>
              </div>

              <div className="page-title">
                Perforamnce
              </div>
            </div>

            <div className="content-wrapper">
              
              <div className="metrics clearfix">
                <div className="metric">
                  <span className="field">Days Done</span>
                  <span className="data">21/35</span>
                </div>
                <div className="metric">
                  <span className="field">Gains</span>
                  <span className="data">3</span>
                </div>
                <div className="metric">
                  <span className="field">Consistency</span>
                  <span className="data">85%</span>
                </div>
                <div className="metric">
                  <span className="field">Lbs Lifted</span>
                  <span className="data">15,120</span>
                </div>
              </div>

              <div className="current-program-title">
                  <h1>Hello</h1>
              </div>

            </div>

      </div>
    )
  }
}

export default athletePerformance;