import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';



class Business extends React.Component {
  render() {
    return (

          <div>
            
            <div className="menubar">
              <div className="sidebar-toggler visible-xs">
                <i className="ion-navicon"></i>
              </div>

              <div className="page-title">
                Business
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


              <div className="charts-half clearfix">
                
                <div className="chart pull-left">
                  <h3>
                    Sales per Day
                    <div className="total pull-right hidden-xs">
                      300 total
                      
                      <div className="change up">
                        <i className="fa fa-chevron-up"></i>
                        3.4%
                      </div>
                    </div>
                  </h3>
                  <div id="payments-chart"></div>
                </div>

                <div className="chart pull-right">
                  <h3>
                    Sales per Program
                    <div className="total pull-right hidden-xs">
                      $15,120 total
                      <div className="change up">
                        <i className="fa fa-chevron-up"></i>
                        2.7%
                      </div>
                    </div>
                  </h3>
                  <div id="signups-chart"></div>
                </div>

                <div className="chart pull-left">
                  <h3>
                    SignUps per Day
                    <div className="total pull-right hidden-xs">
                      45 total
                      <div className="change up">
                        <i className="fa fa-chevron-up"></i>
                      </div>
                    </div>
                  </h3>
                  <div id="payments-chart"></div>
                </div>

                <div className="chart pull-right">
                  <h3>
                    Athletes per Program
                    <div className="total pull-right hidden-xs">
                    45 total
                      <div className="change up">
                        <i className="fa fa-chevron-up"></i>
                        2.7%
                      </div>
                    </div>
                  </h3>
                  <div id="signups-chart"></div>
                </div>

                <div className="col-sm-6">
                  <div className="referrals">
                    <h3>Athlete Stats</h3>
                    <div className="referral">
                      <span>
                        Female
                        <div className="pull-right">
                          <span className="data">10</span>
                        </div>
                      </span>
                      <div className="progress">
                          <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                          </div>
                      </div>
                    </div>
                    <div className="referral">
                      <span>
                        Male
                        <div className="pull-right">
                          <span className="data">17</span> 
                        </div>
                      </span>
                      <div className="progress">
                          <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                          </div>
                      </div>
                    </div>
                    <div className="referral">
                      <span>
                        Average Age
                        <div className="pull-right">
                          <span className="data">29</span> 
                        </div>
                      </span>
                      <div className="progress">
                          <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                          </div>
                      </div>
                    </div>
                    <div className="referral">
                      <span>
                        Average Consistency Score
                        <div className="pull-right">
                          <span className="data">85%</span> 
                        </div>
                      </span>
                      <div className="progress">
                          <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                          </div>
                      </div>
                    </div>
                    <div className="referral">
                      <span>
                        Average Review Score
                        <div className="pull-right">
                          <span className="data">3 Stars</span> 
                        </div>
                      </span>
                      <div className="progress">
                          <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                          </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="referrals">
                    <h3>Athletes on Social Media</h3>
                    <div className="referral">
                      <span>
                        Facebook
                        <div className="pull-right">
                          <span className="data">104</span>  17%
                        </div>
                      </span>
                      <div className="progress">
                          <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                          </div>
                      </div>
                    </div>
                    <div className="referral">
                      <span>
                        Twitter
                        <div className="pull-right">
                          <span className="data">57</span>  10%
                        </div>
                      </span>
                      <div className="progress">
                          <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                          </div>
                      </div>
                    </div>
                    <div className="referral">
                      <span>
                        Instagram 
                        <div className="pull-right">
                          <span className="data">29</span>  6%
                        </div>
                      </span>
                      <div className="progress">
                          <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                          </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div> 

            </div>
          </div>
    )
  }
}

export default Business;