import React from 'react';
import { Link } from 'react-router';

const Day = React.createClass({

	render(){
		const getLesson = this.getLesson;
		const programId = this.props.programId;
		const week = this.props.week;
		const day = this.props.day;
		const index = this.props.index;
		
		return(
		
				<td className="fc-day fc-widget-content new-day fc-first fc-last">
					<div>
						<div className="fc-day-number">
							{this.props.day}
						</div>
						
						<div className="fc-day-content">
							<div>
								<button onClick={this.showMe}>Add Lesson</button>
							</div>
						</div>
					
					</div>
				</td>	
			
		)
	},
	showMe(){
		this.props.getLesson(this.props.week, this.props.index);
	}
})

export default Day; 


