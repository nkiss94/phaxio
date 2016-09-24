import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import Home from './Home.jsx';

class WebsiteBuilder extends React.Component {
	constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.aboutView = this.aboutView.bind(this);
    this.state = {
      view: 'home',
      toggle: false
    }
  }
	render(){
		return(
	        <div>
	            <div>
					{this.state.view === "home" ? <Home state={this.state} profiles={this.props.profiles} websites={this.props.websites} aboutView={this.aboutView} toggleMenu={this.toggleMenu} />: null}
				</div>
			</div>
		)
	}

	aboutView(){
		this.setState({view: "about"})
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