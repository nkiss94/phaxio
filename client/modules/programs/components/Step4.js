import React from 'react';
import { Link } from 'react-router';

const Step4 = React.createClass({
	render(){
		return(
			<div>

				<section className="form-wizard">
					<form id="new-customer" method="post" action="#" role="form">
						<div className="step active animated fadeInRightStep">
						  	<div className="form-group form-actions">
					      		<button type="submit" className="button" data-step="2">
					      			<span>Launch! <i className="fa fa-angle-double-right"></i></span>
					      		</button>
						  	</div>
						</div>
					</form>
				</section>

			</div>
		)
	}
})

export default Step4; 