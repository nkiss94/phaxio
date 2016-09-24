import { composeWithTracker } from 'react-komposer';
import AthleteProfile from '../components/AthleteProfile.jsx';
import * as Collections from '/lib/collections';


function composer(props, onData){
	const userId = Meteor.userId();
  	if(userId && Meteor.subscribe('athletes.single', userId).ready()  ){ 
  		const athletes = Collections.Athletes.find({"user": userId}).fetch();

  		onData(null, {athletes})
  	};
};


export default composeWithTracker(composer)(AthleteProfile);