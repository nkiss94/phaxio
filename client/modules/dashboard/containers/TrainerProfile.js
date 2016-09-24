import { composeWithTracker } from 'react-komposer';
import TrainerProfile from '../components/TrainerProfile.jsx';
import * as Collections from '/lib/collections';


function composer(props, onData){
	const userId = Meteor.userId();
  	if(userId && Meteor.subscribe('trainers.single', userId).ready()  ){ 
  		const trainers = Collections.Trainers.find({"user": userId}).fetch();

  		onData(null, {trainers})
  	};
};


export default composeWithTracker(composer)(TrainerProfile);