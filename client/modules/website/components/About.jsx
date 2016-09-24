import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import Router from 'react-router';
import Menu from './Menu.jsx';


class About extends React.Component {
	constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      view: 'home',
      toggle: false
    }
  }

	render(){
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
										<h2>About</h2>
									</section>
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

}

export default About; 