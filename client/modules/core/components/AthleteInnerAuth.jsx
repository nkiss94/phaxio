import React from 'react';
import { Link } from 'react-router';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';
import AthleteInnerLayout from './AthleteInnerLayout.jsx';
import Login from '../../../modules/website/containers/Login.js';

const AthleteInnerAuth = React.createClass({
	render(){
		return(
  			<div>
				{Meteor.userId() ? <AthleteInnerLayout {...this.props}/> : <Login {...this.props} />}
			</div>
		)
	}
})

export default AthleteInnerAuth; 

