import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import {Link} from 'react-router';


class Program extends React.Component {
  render() {
    const {program} = this.props;
    return(
        <div className="box">
          <a className="image fit"><img src="images/weights.jpg" alt="" /></a>
          <div className="inner">
            <h3>{program.name}</h3>
            <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
            <a className="button fit">{program.price}</a>
          </div>
        </div>
    )
  }
}

export default Program;