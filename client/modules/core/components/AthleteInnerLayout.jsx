import React from 'react';
import {Row, Col} from 'react-bootstrap';
import AthleteSidebar from '../containers/AthleteSidebar.js';

const AthleteInnerLayout = React.createClass({
  render(){
    return(
        <div>
          <div id="dashboard">
            <div id="wrapper">
                
                <AthleteSidebar />

                <div id="content">
                  {React.cloneElement(this.props.children, this.props)}
                </div>
          </div>
      </div>
        </div>
      )
    }
})

export default AthleteInnerLayout;