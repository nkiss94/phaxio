import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import actions from '../actions/actions';

class Main extends React.Component {
    constructor(props){
    super(props);
    this.loginUser = this.loginUser.bind(this);
}
  render() {
    console.log(actions)
    return (
        <div>
             
                <div className="container">

                    
                        <form id="login-form" name="login-form" className="foc jumbotron cards centerME center" action="#" method="post">

                            <div className="text-center"><div className="pageTitle">Login</div></div>

                            <div className="form-group">
                                <input ref="username" type="text" id="login-form-username" name="login-form-username" className="foc inputs form-control" placeholder="username" />
                            </div>

                            <div className="form-group">
                                <input ref="password" type="password" id="login-form-password" name="login-form-password" className="foc inputs form-control" placeholder="Password" />
                            </div>

                            <div className="form-group">
                                <button onClick={this.loginUser} className="btn inputs foc btn-small btn-default" id="login-form-submit" name="login-form-submit" value="login">Login</button>
                            </div>

                        </form>
                    

                </div>
            
        </div>
    )
  }
    loginUser(event){
        event.preventDefault();
        const username = this.refs.username.value;
        const password = this.refs.password.value;
        actions.loginUser(username, password)
  }
}

export default Main;