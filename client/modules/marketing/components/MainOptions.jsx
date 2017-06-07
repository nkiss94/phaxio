import React from 'react';
import {Link} from 'react-router';

class MainOptions extends React.Component {
  render() {
    return (
        <div>
            <div className="section">
                <div className="account-transfer-container">
                    <form className="form-inline size-sm">
                        <div className="row-md">
                            <div className="col-6 control-label centered">
                                <div className="centered" onClick={this.props.checkDigits}>                          
                                    <div className="option">
                                       Check an account number
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 control-label centered">
                                <div className="centered" onClick={this.props.faxSomething}>                          
                                    <div className="option">
                                        Fax a transfer
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
  }
}

export default MainOptions;