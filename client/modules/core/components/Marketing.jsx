import React from 'react';
import { Link } from 'react-router';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';

const Marketing = React.createClass({
	render(){
		return(
  			<div>
  		
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
})

export default Marketing; 

