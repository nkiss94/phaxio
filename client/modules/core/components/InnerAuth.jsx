import React from 'react';
import { Link } from 'react-router';
import InnerLayout from './InnerLayout.jsx';
import Main from '../../../modules/marketing/components/Main.jsx';

const InnerAuth = React.createClass({
	render(){
		return(
  			<div>
				{Meteor.userId() ? <InnerLayout {...this.props}/> : <Main />}
			</div>
		)
	}
})

export default InnerAuth; 

