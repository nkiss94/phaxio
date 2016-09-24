import { composeWithTracker } from 'react-komposer';
import athleteWorkout from '../components/athleteWorkout.jsx';
import * as Collections from '/lib/collections';

function composer(props, onData){
	const userId = Meteor.userId();
	const id = props.params.programId;
  const url = props.params.company;
  const workout = props.params.index;


  function selectedProgram(program){
		return program.identifier === id;
	}

  	if(
      userId &&
      Meteor.subscribe('purchased_programs.list', userId).ready() && 
      Meteor.subscribe('purchased.lesson', id).ready() && 
      Meteor.subscribe('programs.marketing.single', id).ready() && 
      Meteor.subscribe('profiles.marketing', url).ready() &&
      Meteor.subscribe('exercises.list', userId).ready()
      ){
  		
      const events = [];
      const purchased_programs = Collections.PurchasedPrograms.find().fetch();
  		const program = purchased_programs.find(selectedProgram);
  		const id = program.identifier;
  		const lessons = Collections.Lessons.find().fetch();
      const workouts = lessons[0].sublessons;
      const programs = Collections.Programs.find().fetch();
      const startDate = (purchased_programs[0].startDate).replace(/-/g, ",");
      const realDate = new Date(startDate)
      const unadjusted_events = programs[0].lessons;
      const profiles = Collections.Profiles.find().fetch();
      const exercises = Collections.Exercises.find().fetch();
      
      onData(null, {purchased_programs, lessons, programs, events, profiles, exercises})
  		}
};

export default composeWithTracker(composer)(athleteWorkout); 
