import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import actions from '../actions/actions.js';
import Step1 from './Step1.js';
import Step2 from './Step2.js';
import Lesson from'./Lesson.js';
import Step3 from './Step3.js';
import Step4 from './Step4.js';

class Creator extends React.Component {
	constructor(props) {
    super(props);
    this.createExercise = this.createExercise.bind(this);
    this.getLesson = this.getLesson.bind(this);
    this.getSecondView = this.getSecondView.bind(this);
    this.getThirdView = this.getThirdView.bind(this);
    this.getFourthView = this.getFourthView.bind(this);
    this.state = {
      view: 'step1',
      week: '',
      index: ''
    }
  }
	render(){
		const index = this.props.programs.findIndex((program) => program.identifier === this.props.params.programId);
		const programId = this.props.params.programId;
		const program = this.props.programs[index];
		const lessonIndex = this.props.lessons.findIndex((lesson) => lesson.identifier === this.props.params.programId);
		const lesson = this.props.lessons[index];

	
		return(
			<div id="wizard">

            <div className="menubar">
              <div className="sidebar-toggler visible-xs">
                <i className="ion-navicon"></i>
              </div>

              <div className="page-title">
                Website
              </div>

            </div>

				<div className="content-wrapper">
					<div className="header">
						<div className="sidebar-toggler visible-xs">
							<i className="ion-navicon"></i>
						</div>

						<div className="steps clearfix">
							<div className={ this.state.view === "step1" ? "step active" : "step"}>
								<div>Step 1</div>
								<span></span>
							</div>
							<div className={this.state.view === "step2" || this.state.view === "lesson" ? "step active" : "step"}>
								<div>Step 2</div>
								<span></span>
							</div>
							<div className={this.state.view === "step3" ? "step active" : "step"}>
								<div>Step 3</div>
								<span></span>
							</div>
							<div className={this.state.view === "step4" ? "step active" : "step"}>
								<div>Launch!</div>
								<span></span>
							</div>
						</div>
					</div>
				</div>

				{this.state.view === "step1" ? <Step1 state={this.state} getSecondView = {this.getSecondView} index={index} programId={programId} program={program} lessons={this.lessons} />: null}
				{this.state.view === "step2" ? <Step2 state={this.state} getLesson={this.getLesson} getThirdView = {this.getThirdView} index={index} programId={programId} program={program} />: null}
				{this.state.view === "lesson" ? <Lesson state={this.state} getLesson={this.getLesson} createExercise = {this.createExercise} getSecondView={this.getSecondView} getThirdView = {this.getThirdView} index={index} programId={programId} program={program} lesson={lesson} />: null}
				{this.state.view === "step3" ? <Step3 state={this.state} getFourthView = {this.getFourthView} index={index} programId={programId} />: null}
				{this.state.view === "step4" ? <Step4 state={this.state} />: null}

			</div>
			
		)
	}
	getSecondView(){
		this.setState({view: "step2"})
	}

	getLesson(number1, number2){
		this.setState({week: number1})
		this.setState({index: number2})
		this.setState({view: "lesson"})
	}

	createExercise(){
		console.log("yo")
	}

	getThirdView(event){
		event.preventDefault();
		this.setState({view: "step3"})
	}

	getFourthView(){
		this.setState({view: "step4"})
	}

	handleSubmit(){
		console.log("hello")
	}

}

export default Creator; 