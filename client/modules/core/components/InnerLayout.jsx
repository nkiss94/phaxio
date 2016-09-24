import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Sidebar from './Sidebar.jsx';

const InnerLayout = React.createClass({
  render(){
    return(
        <div>
          <div id="dashboard">
            <div id="wrapper">
                
                <Sidebar />

                <div id="content">
                  {React.cloneElement(this.props.children, this.props)}
                </div>
          </div>
      </div>
        </div>
      )
    }
})

export default InnerLayout;