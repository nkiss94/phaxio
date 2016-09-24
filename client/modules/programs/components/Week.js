import React from 'react';
import { Link } from 'react-router';
import {Button, Modal, HelpBlock, FormGroup, FormControl, ControlLabel, Radio, Checkbox, Input} from 'react-bootstrap';
import Day from './Day'


class Week extends React.Component {
	constructor(props) {
    super(props);
  }
  
	render(){
			const getLesson = this.props.getLesson;
			const programId = this.props.programId;
			const week = this.props.week;
			const days = [];
			const dayTitle=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    		
    		for( var i = 0; i < dayTitle.length; i++){
    			days.push(<Day getLesson={getLesson} key={i} index={i+(7*(week-1))} day={dayTitle[i]} week={week} programId={programId} />)
   			 }
		
		return(
			<div>
				<div id="calendar">

					<div className="content-wrapper">
						<div id='fullcalendar' className="fc fc-ltr">
			

							<div className="fc-content">
								<div className="fc-view fc-view-month fc-grid">
									<table className="fc-border-separate">
										<thead>
											<tr className="fc-first fc-last new-week">
												<th className="fc-day-header fc-sun fc-widget-header new-day fc-first">
													Week {this.props.index + 1}
												</th>			
											</tr>
										</thead>
									

										<tbody>
											<tr className="fc-week fc-last">
												{days}
											</tr>
										</tbody>
									</table>
				
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		)
	}
}

export default Week; 