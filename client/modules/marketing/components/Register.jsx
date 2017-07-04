import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import actions from '../actions/actions';

class Main extends React.Component {
    constructor(props){
    super(props);
    this.createUser = this.createUser.bind(this);
}
  render() {
    return (
        <div>
             
                <div className="container">

                    
                        <form id="login-form" name="login-form" className="foc jumbotron cards centerME center" action="#" method="post">

                            <div className="text-center"><div className="pageTitle">Register</div></div>

                            <div className="form-group">
                                <input ref="email" type="text" id="login-form-username" name="login-form-username" className="foc inputs form-control" placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <input ref="password" type="password" id="login-form-password" name="login-form-password" className="foc inputs form-control" placeholder="Password" />
                            </div>

                            <div className="form-group">
                                <button onClick={this.createUser} className="btn inputs foc btn-small btn-default" id="login-form-submit" name="login-form-submit" value="login">Login</button>
                            </div>

                            <div className="form-group">
                                <Link to="/" className="pull-right inputs" data-toggle="modal"><font color="white">Have an account?</font></Link>
                            </div>
                        </form>
                    

                </div>
            
        </div>
    )
  }
    createUser(event){
        event.preventDefault();
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        actions.createUser(email, password)
  }
}

export default Main;