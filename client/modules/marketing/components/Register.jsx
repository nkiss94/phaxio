import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';
import { Link } from 'react-router';
import actions from '../actions/actions.js';


class Register extends React.Component {
    constructor(props){
    super(props);
    this.createUser = this.createUser.bind(this);
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

                            <div className="text-center"><h3>REGISTER</h3></div>

                            <div className="form-group">
                                <input type="text" id="login-form-username" ref="name" name="login-form-username" className="form-control" placeholder="Full Name" />
                            </div>

                            <div className="form-group">
                                <input type="text" id="login-form-email" ref="email" name="login-form-username" className="form-control" placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <input type="password" id="login-form-password" ref="password" name="login-form-password"  className="form-control " placeholder="Password" />
                            </div>

                            <div className="form-group">
                                <input type="text" id="login-form-company" ref="company" name="login-form-password" className="form-control " placeholder="Company" />
                            </div>

                            <div className="form-group">
                                <input type="text" id="login-form-url" ref="url" name="login-form-password" className="form-control " placeholder="URL" />
                            </div>

                            <div className="form-group">
                                <button onClick={this.createUser} type="submit" className="btn btn-small btn-dark-solid full-width btn-rounded" id="login-form-submit" name="login-form-submit" value="login">Login</button>
                            </div>

                            <div className="form-group">
                                <Link to="/login" className="pull-left" data-toggle="modal">Have an account?</Link>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    )
  }
  createUser(event){
    event.preventDefault();
    const name = this.refs.name.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const company  = this.refs.company.value;
    const url = this.refs.url.value;
    const now = new Date();
    const user_date  = now.toDateString();
    actions.createUser(name, email, company, password, url, user_date)
  }
}

export default Register;