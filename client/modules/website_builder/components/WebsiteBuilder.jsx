import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import HomePage from './HomePage.jsx';
import AboutPage from './AboutPage.js';
import HowPage from './HowItWorksPage.jsx';
import ProgramsPage from './ProgramsPage.jsx';
import ProductsPage from './ProductsPage.jsx';
import StorePage from './StorePage.jsx';
import LoginPage from './LoginPage.jsx';
import RegisterPage from './RegisterPage.jsx';
import ContactPage from './ContactPage.jsx';

class WebsiteBuilder extends React.Component {
	constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.homeView = this.homeView.bind(this);
    this.howView = this.howView.bind(this);
    this.aboutView = this.aboutView.bind(this);
    this.programsView = this.programsView.bind(this);
    this.productsView = this.productsView.bind(this);
    this.storeView = this.storeView.bind(this);
    this.loginView = this.loginView.bind(this);
    this.registerView = this.registerView.bind(this);
    this.contactView = this.contactView.bind(this);
    this.state = {
      view: 'home',
      toggle: false
    }
  }
	render(){
		return(
	        <div>
	            <div>

					{this.state.view === "home" ? 
						<HomePage 
							state={this.state}
							profiles={this.props.profiles}
							websites={this.props.websites}
							homeView={this.homeView}
							howView={this.howView}
							aboutView={this.aboutView}
							programsView={this.programsView}
							productsView={this.productsView}
							storeView={this.storeView}
							loginView={this.loginView}
							registerView={this.registerView}
							contactView={this.contactView}
							toggleMenu={this.toggleMenu} />
					: null}

					{this.state.view === "about" ? 
						<AboutPage 
							state={this.state}
							profiles={this.props.profiles}
							websites={this.props.websites}
							homeView={this.homeView}
							howView={this.howView}
							aboutView={this.aboutView}
							programsView={this.programsView}
							productsView={this.productsView}
							storeView={this.storeView}
							loginView={this.loginView}
							registerView={this.registerView}
							contactView={this.contactView}
							toggleMenu={this.toggleMenu} />
					: null}

					{this.state.view === "how" ? 
						<HowPage 
							state={this.state}
							profiles={this.props.profiles}
							websites={this.props.websites}
							homeView={this.homeView}
							howView={this.howView}
							aboutView={this.aboutView}
							programsView={this.programsView}
							productsView={this.productsView}
							storeView={this.storeView}
							loginView={this.loginView}
							registerView={this.registerView}
							contactView={this.contactView}
							toggleMenu={this.toggleMenu} />
					: null}

					{this.state.view === "programs" ? 
						<ProgramsPage 
							state={this.state}
							profiles={this.props.profiles}
							websites={this.props.websites}
							programs={this.props.programs}
							productsView={this.productsView}
							homeView={this.homeView}
							howView={this.howView}
							aboutView={this.aboutView}
							programsView={this.programsView}
							storeView={this.storeView}
							loginView={this.loginView}
							registerView={this.registerView}
							contactView={this.contactView}
							toggleMenu={this.toggleMenu} />
					: null}

					{this.state.view === "products" ? 
						<ProductsPage 
							state={this.state}
							profiles={this.props.profiles}
							websites={this.props.websites}
							products={this.props.products}
							productsView={this.productsView}
							homeView={this.homeView}
							howView={this.howView}
							aboutView={this.aboutView}
							programsView={this.programsView}
							storeView={this.storeView}
							loginView={this.loginView}
							registerView={this.registerView}
							contactView={this.contactView}
							toggleMenu={this.toggleMenu} />
					: null}

					{this.state.view === "store" ? 
						<StorePage 
							state={this.state}
							profiles={this.props.profiles}
							websites={this.props.websites}
							homeView={this.homeView}
							howView={this.howView}
							aboutView={this.aboutView}
							programsView={this.programsView}
							productsView={this.productsView}
							storeView={this.storeView}
							loginView={this.loginView}
							registerView={this.registerView}
							contactView={this.contactView}
							toggleMenu={this.toggleMenu} />
					: null}

					{this.state.view === "login" ? 
						<LoginPage 
							state={this.state}
							profiles={this.props.profiles}
							websites={this.props.websites}
							homeView={this.homeView}
							howView={this.howView}
							aboutView={this.aboutView}
							programsView={this.programsView}
							productsView={this.productsView}
							storeView={this.storeView}
							loginView={this.loginView}
							registerView={this.registerView}
							contactView={this.contactView}
							toggleMenu={this.toggleMenu} />
					: null}

					{this.state.view === "register" ? 
						<RegisterPage 
							state={this.state}
							profiles={this.props.profiles}
							websites={this.props.websites}
							homeView={this.homeView}
							howView={this.howView}
							aboutView={this.aboutView}
							programsView={this.programsView}
							productsView={this.productsView}
							storeView={this.storeView}
							loginView={this.loginView}
							registerView={this.registerView}
							contactView={this.contactView}
							toggleMenu={this.toggleMenu} />
					: null}

					{this.state.view === "contact" ? 
						<ContactPage 
							state={this.state}
							profiles={this.props.profiles}
							websites={this.props.websites}
							homeView={this.homeView}
							howView={this.howView}
							aboutView={this.aboutView}
							programsView={this.programsView}
							productsView={this.productsView}
							storeView={this.storeView}
							loginView={this.loginView}
							registerView={this.registerView}
							contactView={this.contactView}
							toggleMenu={this.toggleMenu} />
					: null}

				</div>
			</div>
		)
	}

	homeView(){
		this.setState({view: "home"});
		this.toggleMenu();
	}

	aboutView(){
		this.setState({view: "about"})
		this.toggleMenu();
	}

	howView(){
		this.setState({view: "how"})
		this.toggleMenu();
	}

	programsView(){
		this.setState({view: "programs"})
		this.toggleMenu();
	}

	productsView(){
		this.setState({view: "products"})
		this.toggleMenu();
	}

	storeView(){
		this.setState({view: "store"})
		this.toggleMenu();
	}

	loginView(){
		this.setState({view: "login"})
		this.toggleMenu();	
	}

	registerView(){
		this.setState({view: "register"})
		this.toggleMenu();	
	}

	contactView(){
		this.setState({view: "contact"})
		this.toggleMenu();	
	}

	toggleMenu(){
		if(!this.state.toggle){
			this.setState({toggle:true})
		}else{
			this.setState({toggle:false})
		}
	}



}

export default WebsiteBuilder; 