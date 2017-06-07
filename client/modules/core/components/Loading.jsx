import React from 'react';
import { Link } from 'react-router';
import{ Grid, Row, Col, PageHeader } from 'react-bootstrap';
import Loading from 'react-loading';

const LoadingScreen = React.createClass({
	render(){
		return(
			<div className="loader">
  				<div>
  					<Loading type="balls" color="#fab131" />
  				</div>
  			</div>
		)
	}
})

export default LoadingScreen; 

