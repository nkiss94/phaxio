import React from 'react';
import { Link } from 'react-router';

const Step3 = React.createClass({
	render(){
		return(
			<div>

				<section className="form-wizard">
					<form id="new-customer" method="post" action="#" role="form">
						<div className="step active animated fadeInRightStep">
							<div className="form-group">
							    <label>Supplement Instructions</label>
							    <input type="text" className="form-control" ref="program_supplements" placeholder="What supplements should be taken with this program?" />
						  	</div>
						  	<div className="form-group form-actions">
					      		<button onClick={this.handleSubmit} type="submit" className="button" data-step="2">
					      			<span>Next Step <i className="fa fa-angle-double-right"></i></span>
					      		</button>
						  	</div>
						</div>
					</form>
				</section>

			</div>
		)
	},

		handleSubmit(event){
		event.preventDefault();
		const identifier = this.props.programId;
		const program_supplements = this.refs.program_supplements.value;
		Meteor.call('updateSupplements', identifier, program_supplements)
		this.props.getFourthView();
	}
	
});

export default Step3; 