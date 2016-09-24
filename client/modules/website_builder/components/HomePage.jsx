import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import Router from 'react-router';
import Menu from './Menu.jsx';
import styles from '../styles/inline/style.js';


class HomePage extends React.Component {
	constructor(props) {
    super(props);
    this.saveHome = this.saveHome.bind(this);
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
			              	<p className="btn btn-success pull-right" onClick={this.saveHome}>
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
							     	productsView={this.props.productsView}
							     	storeView={this.props.storeView}
							     	howView={this.props.howView}
							     	loginView={this.props.loginView}
							     	registerView={this.props.registerView}
							     	contactView={this.props.contactView}
							    />

								<div className="landing">
									<header id="company" className="alt">
										<h1><a className="company-name">{this.props.profiles[0].company}</a></h1>
										<a href="#nav" onClick={this.props.toggleMenu}>Menu</a>
									</header>

									<section id="banner">
										<i className="icon fa-diamond"></i>
										<h2 className="company-name">{this.props.profiles[0].company}</h2>
										<p>
											<input ref="slogan" className="slogan" defaultValue={ this.props.websites[0].slogan ? this.props.websites[0].slogan : "Your company slogan" }/>
										</p>
										<ul className="actions">
											<li><a href="#" className="button big special">Free Sign Up</a></li>
										</ul>
									</section>

									<section id="one" className="wrapper style1">
										<div className="inner">
											<article className="feature left">
												<span className="image"><img src="images/static-hero.png" alt="" /></span>
												<div className="content">
													<h2>
														<input className="headers" ref="header1" placeholder="Subheader" defaultValue={ this.props.websites[0].header1 ? this.props.websites[0].header1 : "First main header" } />
													</h2>
													<p>
					              						<textarea className="home-features" ref="content1" defaultValue={ this.props.websites[0].content1 ? this.props.websites[0].content1 : "Tell your athletes about your first awesome feature!" } />
					             			 		</p>
					              					<ul className="actions">
														<li>
															<a href="#" className="button alt">More</a>
														</li>
													</ul>
												</div>
											</article>
											<article className="feature right">
												<span className="image"><img src="images/feature2.png" alt="" /></span>
												<div className="content">
													<h2>
														<input className="headers" ref="header2" placeholder="Subheader" defaultValue={ this.props.websites[0].header2 ? this.props.websites[0].header2 : "Second main header" }/>
													</h2>
													<p>
														<textarea className="home-features" ref="content2" defaultValue={ this.props.websites[0].content2 ? this.props.websites[0].content2 : "Tell your athletes about your second awesome feature!" } />
													</p>
													<ul className="actions">
														<li>
															<a href="#" className="button alt">More</a>
														</li>
													</ul>
												</div>
											</article>
										</div>
									</section>

									<section id="two" className="wrapper special">
										<div className="inner">
											<header className="major narrow">
												<h2>
													<input className="media-header" ref="header3" placeholder="Subheader" defaultValue={ this.props.websites[0].header3 ? this.props.websites[0].header3 : "Third main header" }/>
												</h2>
												<p>
													<input className="media-slogan" ref="content3" defaultValue={ this.props.websites[0].content3 ? this.props.websites[0].content3 : "Tell your athletes about your community!" } />
												</p>
											</header>
											<div className="image-grid">
												<a href="#" className="image"><img src="images/feature1.png" alt="" /></a>
												<a href="#" className="image"><img src="images/feature1.png" alt="" /></a>
												<a href="#" className="image"><img src="images/feature1.png" alt="" /></a>
												<a href="#" className="image"><img src="images/feature1.png" alt="" /></a>
												<a href="#" className="image"><img src="images/feature1.png" alt="" /></a>
												<a href="#" className="image"><img src="images/feature1.png" alt="" /></a>
												<a href="#" className="image"><img src="images/feature1.png" alt="" /></a>
												<a href="#" className="image"><img src="images/feature1.png" alt="" /></a>
											</div>
											<ul className="actions">
												<li><a href="#" className="button big alt">Free Sign Up</a></li>
											</ul>
										</div>
									</section>

				
									<section id="three" className="wrapper style3 special" style={styles}>
										<div className="inner">
											<header className="major narrow	">
												<h2>
													<input className="cta-header" ref="cta" placeholder="CTA" defaultValue={ this.props.websites[0].cta ? this.props.websites[0].cta : "CTA" }/>
												</h2>
												<p>
													<input className="cta-slogan" ref="sub_cta" placeholder="SubCTA" defaultValue={ this.props.websites[0].sub_cta ? this.props.websites[0].sub_Cta : "Sub CTA" }/>
												</p>
											</header>
											<ul className="actions">
												<li><a href="#" className="button big alt">Free Sign Up</a></li>
											</ul>
										</div>
									</section>

				
									<section id="four" className="wrapper style2 special">
										<div className="inner">
											<header className="major narrow">
												<h2>Get in touch</h2>
												<p>{this.props.profiles[0].company} would love to hear from you!</p>
											</header>
											<form action="#" method="POST">
												<div className="container 75%">
													<div className="row uniform 50%">
														<div className="6u 12u$(xsmall)">
															<input name="name" placeholder="Name" type="text" />
														</div>
														<div className="6u$ 12u$(xsmall)">
															<input name="email" placeholder="Email" type="email" />
														</div>
														<div className="12u$">
															<textarea name="message" placeholder="Message" rows="4"></textarea>
														</div>
													</div>
												</div>
												<ul className="actions">
													<li><input type="submit" className="special" value="Submit" /></li>
													<li><input type="reset" className="alt" value="Reset" /></li>
												</ul>
											</form>
										</div>
									</section>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	saveHome(){
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

export default HomePage; 