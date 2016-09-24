import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import {Link} from "react-router";
import actions from '../actions/actions.js';


class Login extends React.Component {
    constructor(props){
    super(props);
    this.loginUser = this.loginUser.bind(this);
}
  render() {
    return (
        <div>
             <div className="login login-bg login-parallax">
                <div className="container">

                    <div className="login-logo text-center">
                        <a> <img src="images/logo.png" alt=""/></a>
                    </div>

                    <div className="login-box btn-rounded">
                        <form id="login-form" name="login-form" className=" " action="#" method="post">

                            <div className="text-center"><h3>LOGIN</h3></div>

                            <div className="form-group">
                                <input ref="email" type="text" id="login-form-username" name="login-form-username" className="form-control" placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <input ref="password" type="password" id="login-form-password" name="login-form-password" className="form-control " placeholder="Password" />
                            </div>

                            <div className="form-group">
                                <button onClick={this.loginUser} className="btn btn-small btn-dark-solid full-width btn-rounded" id="login-form-submit" name="login-form-submit" value="login">Login</button>
                            </div>

                            <div className="form-group">
                                <Link to="/register" className="pull-left" data-toggle="modal">Need an account?</Link>
                                <a className="pull-right" data-toggle="modal"> Forgot password?</a>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
  }
    loginUser(event){
        event.preventDefault();
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        actions.loginUser(email, password)
  }
}

export default Login;