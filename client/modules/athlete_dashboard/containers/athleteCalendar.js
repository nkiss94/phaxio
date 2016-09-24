import { composeWithTracker } from 'react-komposer';
import athleteCalendar from '../components/athleteCalendar.jsx';
import * as Collections from '/lib/collections';

function composer(props, onData){
	const userId = Meteor.userId();
	const id = props.params.programId;
  const url = props.params.company;


  function selectedProgram(program){
		return program.identifier === id;
	}

  	if(
      userId && 
      Meteor.subscribe('purchased_programs.list', userId).ready() && 
      Meteor.subscribe('purchased.lesson', id).ready() && 
      Meteor.subscribe('programs.marketing.single', id).ready() && 
      Meteor.subscribe('profiles.marketing', url).ready() 
    ){
  		
      const events = [];
      const purchased_programs = Collections.PurchasedPrograms.find().fetch();
  		const program = purchased_programs.find(selectedProgram);
  		const id = program.identifier;
  		const lessons = Collections.Lessons.find().fetch();
      const programs = Collections.Programs.find().fetch();
      const startDate = (purchased_programs[0].startDate).replace(/-/g, ",");
      const realDate = new Date(startDate)
      const unadjusted_events = programs[0].lessons;
      const profiles = Collections.Profiles.find().fetch();
      
      for( i = 0; i < unadjusted_events.length; i++){
          events.push({
            allDay: true,
            title: 'Day'+' '+(i+1),
            startDate: new Date(realDate.getTime() + i * 86400000 ),
            endDate: new Date(realDate.getTime() + (i+1) * 86400000 )
          })

      }
      onData(null, {purchased_programs, lessons, programs, events, profiles})
  		}
};

export default composeWithTracker(composer)(athleteCalendar); 
