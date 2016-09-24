import React from 'react';
import { Link } from 'react-router';
import Exercise from './Exercise.js';


const Lesson = React.createClass({

	render(){
		const theseLessons = this.props.lesson.sublessons.filter((lesson) => lesson.index === this.props.state.index);
   		
		return(

			<div id="search">
				<div id="wrapper">

					<div>
						<div className="content-wrapper clearfix">

							<div className="filters">
								<h3 className="hidden-xs">Add Exercise</h3>
								<form>

									<div className="filter">
										<label>
										</label>
									</div>

									<div className="filter">
										<label>
											<input type="text" placeholder="Name" ref="sublesson_name" />
										</label>
									</div>
									<div className="filter">
										<label>
											<input type="number" placeholder="Sets" ref="sublesson_sets" />
										</label>
									</div>
									<div className="filter">
										<label>
											<input type="number" placeholder="Reps" ref="sublesson_reps" />
										</label>
									</div>
									<div className="filter">
										<label>
											<select ref="body_part">
											    <option value="Traps">Traps</option>
											    <option value="Back">Back</option>
											    <option value="Chest">Chest</option>
											    <option value="Shoulders">Shoulders</option>
											    <option value="Biceps">Biceps</option>
											    <option value="Triceps">Triceps</option>
											    <option value="Forearms">Forearms</option>
											    <option value="Abs & Core">Abs & Core</option>
											    <option value="Quads">Quads</option>
											    <option value="Hamstrings">Hamstrings</option>
											    <option value="Glutes">Glutes</option>
											    <option value="Calves">Calves</option>
											</select>
										</label>
									</div>
							
									<div className="filter">
										<label>
											<button onClick={this.updateDay}>Add Exercise</button>
										</label>
									</div>
								</form>
							</div>

							<div className="results">
								<table id="datatable-example">
				                    <thead>
				                        <tr>
				                            <th >
				                            	<input className="toggle-all" type="checkbox" />
				                            </th>
				                            <th >Video
				                            </th>
				                            <th >Exercise
				                            </th>
				                            <th >Target
				                            </th>
				                            <th >Sets
				                            </th>
				                           	<th >Reps
				                            </th>
				                        </tr>
				                    </thead>
				                    <tbody>
							            { theseLessons === 'undefined' ? null : (theseLessons).map((lesson, index) => <Exercise lesson={lesson} index={index} key={lesson.id} />)}
							        </tbody>
				    			</table>
						

								<div>
									<section className="form-wizard">
										<div id="new-customer" method="post" action="#" role="form">
											<div className="step active animated fadeInRightStep">

											  	<div className="form-group form-actions">
										      		<button onClick={this.props.getSecondView} className="button" data-step="2">
										      			<span><i className="fa fa-angle-double-left">Back to Overview</i></span>
										      		</button>
											  	</div>
											</div>
										</div>
									</section>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		)
	},

	updateDay(event){
		event.preventDefault();
		const identifier = this.props.programId;
		const week = this.props.state.week;
		const index = this.props.state.index;
		const name = this.refs.sublesson_name.value;
		const sets = this.refs.sublesson_sets.value;
		const reps = this.refs.sublesson_reps.value;
		const body = this.refs.body_part.value;

		Meteor.call('createStuff', identifier, week, index, name, sets, reps, body);
		// // this.props.getThirdView();
	},


	handleSubmit(){
		console.log("cool")
	}
});

export default Lesson; 