import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import Router from 'react-router';
import Menu from './Menu.jsx';
import styles from '../styles/inline/style.js';


class AboutPage extends React.Component {
	constructor(props) {
    super(props);
    this.saveAbout = this.saveAbout.bind(this);
  }

	render(){
		return(
			<div>
				<div className="menubar">
		              <div className="sidebar-toggler visible-xs">
		                <i className="ion-navicon"></i>
		              </div>

		              <div className="page-title">
		                Website
		              </div>

		              	<Link to={`/${this.props.profiles[0].url}`}>
			              	<p className="btn btn-success pull-right" onClick={this.saveAbout}>
								<span>Save & Visit Website</span>
							</p>
						</Link>
		        </div>

		        <div id="content-wrapper">
					<div id="home3">
						<div className="st-pusher">
							<div className="st-content">

							    <Menu 
							     	toggleMenu={this.props.toggleMenu} 
							     	state={this.props.state} 
							     	homeView={this.props.homeView}
							     	aboutView={this.props.aboutView}
							     	programsView={this.props.programsView}
							     	storeView={this.props.storeView}
							     	howView={this.props.howView}
							     	loginView={this.props.loginView}
							     	contactView={this.props.contactView}
							    />

								<div className="landing">
									<header id="company" className="alt">
										<h1><a className="company-name">{this.props.profiles[0].company}</a></h1>
										<a href="#nav" onClick={this.props.toggleMenu}>Menu</a>
									</header>

									<section id="subbanner">
										<h2>About Us</h2>
									</section>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	saveAbout(){
		const user  = Meteor.userId();
		const slogan = this.refs.slogan.value;
		const header1 = this.refs.header1.value;
		const content1 = this.refs.content1.value;
		const header2 = this.refs.header2.value;
		const content2 = this.refs.content2.value;
		const header3 = this.refs.header3.value;
		const content3 = this.refs.content3.value;
		const cta = this.refs.cta.value;
		const sub_cta = this.refs.sub_cta.value;

		Meteor.call('update.website', user, slogan, header1, content1, header2, content2, header3, content3, cta, sub_cta)
	}

}

export default AboutPage; 