import React from 'react';
import { Link } from 'react-router';

class AthleteExercise extends React.Component {
    constructor(props) {
    super(props);
    this.recordExercise = this.recordExercise.bind(this);
  }
	render(){
    const {exercise} = this.props;
    console.log(this.props)
		return(
               <tr>
                    <td>{exercise.name}</td>
                    <td className=""><span className="label label-success">Available</span></td>
                    <td className="center">{exercise.sets}</td>
                    <td className="center">{exercise.reps}</td>
                    <td className="center"><input ref="weight" placeholder="Weight" /></td>
                    <td className="center"><button onClick={this.recordExercise}>Submit</button></td>
              </tr>

		)
  }
  recordExercise(){
    const name = this.props.exercise.name;
    const sets = this.props.exercise.sets;
    const reps = this.props.exercise.reps;
    const weight = this.refs.weight.value;
    const programId = this.props.exercise.program;
    const now = new Date();
    const reported_date  = now.toDateString();
    Meteor.call('record.exercise', name, sets, reps, weight, programId, reported_date)
  }
}

export default AthleteExercise; 


