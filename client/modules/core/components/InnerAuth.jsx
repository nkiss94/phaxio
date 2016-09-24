import React from 'react';
import { Link } from 'react-router';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';
import InnerLayout from './InnerLayout.jsx';
import Login from '../../../modules/marketing/components/Login.jsx';

const InnerAuth = React.createClass({
	render(){
		return(
  			<div>
				{Meteor.userId() ? <InnerLayout {...this.props}/> : <Login />}
			</div>
		)
	}
})

export default InnerAuth; 

