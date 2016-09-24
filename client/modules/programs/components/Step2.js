import React from 'react';
import { Link } from 'react-router';
import {Button, Modal, HelpBlock, FormGroup, FormControl, ControlLabel, Radio, Checkbox, Input} from 'react-bootstrap';
import Week from './Week'



class Step2 extends React.Component {
	constructor(props) {
    super(props);
  }
	render(){
	
		const getLesson = this.props.getLesson;
		const lessons = this.props.program.lessons;
		const programId = this.props.programId;
		const state = this.props.state;
		const programWeeks = this.props.program.weeks;
	    const weeks = [];
		for( var i = 0; i < programWeeks; i++){
			weeks.push(<Week getLesson={getLesson} key={i} index={i} week={i+1} programId={programId} state={state} />)
			 }
   		
		return(
			
			<div>
				<div id="calendar">


					<div className="content-wrapper">
						<div id='fullcalendar' className="fc fc-ltr">
							
							<table className="fc-header">
								<tbody>
									<tr>
										<td className="fc-header-center">
											<span className="fc-header-title">
												<h2>{this.props.program.name}</h2>
											</span>
										</td>
									</tr>
								</tbody>
							</table>

							

							<div>
								{weeks}
							</div>





						</div>
							<section className="form-wizard">
								<form id="new-customer" method="post" action="#" role="form">
									<div className="step active animated fadeInRightStep">

									  	<div className="form-group form-actions">
								      		<button onClick={this.props.getThirdView} type="submit" className="button" data-step="2">
								      			<span>Next Step <i className="fa fa-angle-double-right"></i></span>
								      		</button>
									  	</div>
									</div>
								</form>
							</section>
						</div>
				</div>

			</div>
		)
	}
	createExercise(){
		Meteor.call('updateProgram', identifier)
	}

	handleSubmit(){
		console.log("cool")
	}
}

export default Step2; 