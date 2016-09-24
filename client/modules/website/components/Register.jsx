import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import Router from 'react-router';
import Menu from './Menu.jsx';
import actions from '../actions/actions.js';


class Register extends React.Component {
	constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.createAthlete = this.createAthlete.bind(this);
    this.state = {
      view: 'home',
      toggle: false
    }
  }

	render(){
		const company = this.props.params.company;
		return(
			<div>
		        <div id="content-wrapper">
					<div id="home3">
						<div className="st-pusher">
							<div className="st-content">

								<Menu 
									state={this.state}
									toggleMenu={this.toggleMenu}
									profiles={this.props.profiles}

							    />

								<div className="landing">
									<header id="company" className="alt">
										<h1><a className="company-name">{this.props.profiles[0].company}</a></h1>
										<a href="#nav" onClick={this.toggleMenu}>Menu</a>
									</header>

									<section id="subbanner">
										<h2>Register</h2>
									</section>
								</div>

								<div className="login login-bg login-parallax">
					                <div className="container">

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
					                                <button onClick={this.createAthlete} type="submit" className="btn btn-small btn-dark-solid full-width btn-rounded" id="login-form-submit" name="login-form-submit" value="login">Login</button>
					                            </div>

					                            <div className="form-group">
					                                <Link to="/login" className="pull-left" data-toggle="modal">Have an account?</Link>
					                            </div>
					                        </form>
					                    </div>

					                </div>
					            </div>
				


							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	toggleMenu(){
		if(!this.state.toggle){
			this.setState({toggle:true})
		}else{
			this.setState({toggle:false})
		}
	}

	createAthlete(event){
    	event.preventDefault();
	    const name = this.refs.name.value;
	    const email = this.refs.email.value;
	    const company = this.props.params.company;
	    const now = new Date();
	    const user_date  = now.toDateString();
	    actions.createUser(name, email, company, user_date)
  }


}

export default Register; 