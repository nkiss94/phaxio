import { composeWithTracker } from 'react-komposer';
import athletePerformance from '../components/athletePerformance.jsx';
import * as Collections from '/lib/collections';


function composer(props, onData){
	const userId = Meteor.userId();
  	if(userId && Meteor.subscribe('profiles.single', userId).ready() && Meteor.subscribe('purchased_programs.list', userId).ready() ) {
  		const profiles = Collections.Profiles.find().fetch();
  		const purchased_programs = Collections.PurchasedPrograms.find().fetch();
  		onData(null, {profiles, purchased_programs})
  	};
};

export default composeWithTracker(composer)(athletePerformance); 
