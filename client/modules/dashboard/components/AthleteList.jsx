import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Table from 'reactable';
import Athlete from './Athlete.jsx';

class AthleteList extends React.Component {
    constructor(props) {
    super(props);
    this.createAthlete = this.createAthlete.bind(this);
    this.state = {
    }
  }

  render() {
  var Table = Reactable.Table,
    Tr = Reactable.Tr,
    Td = Reactable.Td;
    return (
          <div id="reports">
            
            <div className="menubar">
              <div className="sidebar-toggler visible-xs">
                <i className="ion-navicon"></i>
              </div>

              <div className="page-title">
                Athletes
              </div>
            </div>

            <div className="content-wrapper">
              
              <div className="metrics clearfix">
                <div className="metric">
                  <span className="field">Athletes</span>
                  <span className="data">44</span>
                </div>
                <div className="metric">
                  <span className="field">Athletes/Trainer</span>
                  <span className="data">10.2</span>
                </div>
                <div className="metric">
                  <span className="field">Average Score</span>
                  <span className="data">3.2</span>
                </div>
                <div className="metric">
                  <span className="field">Active Today</span>
                  <span className="data">3</span>
                </div>
              </div>

            <section className="body-content ">

            <div className="page-content">
                <div className="container">

                        <div className="col-md-4">
                            <div className="team-member" >
                                <div className="team-img">
                                  <form onSubmit={this.createAthlete}>
                                    <h2>Invite an Athlete!</h2>
                                    <input type="text" placeholder="name" ref="name" />
                                    <input type="email" placeholder="email" ref="email" />
                                    <input type="submit" />
                                  </form>
                                </div>
                              </div>
                        </div>
                        
                        {(this.props.athletes).map((athlete, index) => <Athlete athlete={athlete} index={index} key={athlete.identifier} />)}

                    </div>
                </div>
           


        </section>

            </div>
          
          </div>
    )
  }
    createAthlete(event) {
    event.preventDefault();   
        const url = this.props.profiles[0].url;
        const name = this.refs.name.value;
        const email = this.refs.email.value;
        const now = new Date();
        const created  = now.toDateString();
        Meteor.call('new.athlete', created, name, email, url);
    }
}

export default AthleteList;