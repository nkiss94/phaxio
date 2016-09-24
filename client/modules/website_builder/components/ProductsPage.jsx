import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import Router from 'react-router';
import Menu from './Menu.jsx';
import styles from '../styles/inline/style.js';
import Product from './Product.jsx';


class ProductsPage extends React.Component {
	constructor(props) {
    super(props);
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
			              	<p className="btn btn-success pull-right" onClick={this.savePrograms}>
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

									<section id="subbanner">
										<h2>Our Products</h2>
									</section>
								</div>
				
			<div>
				<div id="main">
					<div className="inner">
						<div className="thumbnails">
							{(this.props.products).map((product) => <Product product={product} key={product.identifier} />)}
						</div>
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
}

export default ProductsPage; 