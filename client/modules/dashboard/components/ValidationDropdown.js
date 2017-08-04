import React from 'react';
import {browserHistory} from 'react-router';

class ValidationDropdown extends React.Component {

    render() {
        return (
    <div className="container">
       	<div className="row">
			<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
                <input className="foc inputs sideBySide form-control col-lg-6 col-md-6 col-sm-6 col-xs-6" placeholder="Hard Validation Rule "  />      
         	<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
         </div>
    </div>
    )
  }
}

export default ValidationDropdown;