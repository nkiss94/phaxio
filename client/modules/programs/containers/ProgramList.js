import { composeWithTracker } from 'react-komposer';
import ProgramList from '../components/ProgramList.jsx';
import * as Collections from '/lib/collections';


function composer(props, onData){
	const userId = Meteor.userId();
  	if(userId && Meteor.subscribe('profiles.single', userId).ready() && Meteor.subscribe('programs.single', userId).ready() ){
  		const profiles = Collections.Profiles.find().fetch();
  		const programs = Collections.Programs.find().fetch();
  		onData(null, {profiles, programs})
  	};
};

export default composeWithTracker(composer)(ProgramList); 
