import React from 'react';
import {Link} from 'react-router';

class Options extends React.Component {
  render() {
    return (

                        <div className="row">
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                        <div className="centerME col-lg-10 col-md-10 col-sm-10 col-xs-10">
                            <div className="pull-left">
                                <div className=" btn btn-default inputs" onClick={this.props.checkDigits}>                          
                                    <div className="option center">
                                       Check an account number
                                    </div>
                                </div>
                            </div>

                            <div className="pull-right">
                                <div className=" btn btn-default inputs" onClick={this.props.faxSomething}>                          
                                    <div className="option center">
                                        Fax a transfer
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                        </div>
    )
  }
}

export default Options;