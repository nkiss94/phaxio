import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import { Link } from 'react-router';

class Athlete extends React.Component {

  render() {
    const {athlete} = this.props;
    return (
        <div className="col-md-4">
        <Link to={`/athletes/${athlete.identifier}`}>
            <div className="team-member">
                <div className="team-img">
                    <img src="images/person.png" alt=""/>
                </div>
                <div className="team-hover">
                    <div className="desk">
                        <h4>I love to desing</h4>
                        <p>I love to introduce myself as a hardcore Web Designer.</p>
                    </div>
                    <div className="s-link">
                        <div href="#"><i className="fa fa-facebook"></i></div>
                        <div href="#"><i className="fa fa-twitter"></i></div>
                        <div href="#"><i className="fa fa-google-plus"></i></div>
                    </div>
                </div>
        </div>
            <div className="team-title">
                <h5>{athlete.name}</h5>
                <span>{athlete.email}</span>
            </div>
        </Link>
        </div>

    )
  }
}

export default Athlete;