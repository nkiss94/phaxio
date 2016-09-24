import React from 'react';
import { Link } from 'react-router';
import actions from '../actions/actions.js';

const Step1 = React.createClass({
	render(){
		const program = this.props.program;
	
		return(
			<div>
				<section className="form-wizard">
					<form id="new-customer" method="post" action="#" role="form" onSubmit={this.initiateProgram}>
						<div className="step active animated fadeInRightStep">
							<div className="form-group">
							    <label>Name</label>
							    <input type="text" ref="program_name" className="form-control" name="customer[first_name]" defaultValue={program.name} />
						  	</div>
						  	<div className="form-group">
							    <label>Number of Weeks</label>
							    <input type="number" ref="program_weeks" className="form-control" name="customer[email]" defaultValue={program.weeks} />
						  	</div>
						  	<div className="form-group">
							    <label>Price</label>
							   	<input type="number" ref="program_price" className="form-control" name="customer[password]" defaultValue={program.price} />
							</div>
						  	<div className="form-group form-actions">
					      		<button  type="submit" className="button" data-step="2">
					      			<span>Next Step <i className="fa fa-angle-double-right"></i></span>
					      		</button>
						  	</div>
						</div>
					</form>
				</section>

			</div>
		)
	},
	initiateProgram(event){
		event.preventDefault();
		const identifier = this.props.programId;
		const program_name = this.refs.program_name.value;
		const program_weeks = this.refs.program_weeks.value;
		const program_price = this.refs.program_price.value;
		Meteor.call('updateYaProgram', identifier, program_name, program_weeks, program_price)
		this.props.getSecondView();
	}
});


export default Step1; 