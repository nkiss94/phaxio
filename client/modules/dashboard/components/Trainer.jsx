import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import { Link } from 'react-router';

class Trainer extends React.Component {

  render() {
    const {trainer} = this.props;
    return (
        <div className="col-md-4">
        <Link to={`/trainers/${trainer.identifier}`}>
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
                <h5>{trainer.name}</h5>
                <span>{trainer.email}</span>
            </div>
        </Link>
        </div>

    )
  }
}

export default Trainer;