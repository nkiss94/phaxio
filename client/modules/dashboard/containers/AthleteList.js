import { composeWithTracker } from 'react-komposer';
import AthleteList from '../components/AthleteList.jsx';
import * as Collections from '/lib/collections';


function composer(props, onData){
	const userId = Meteor.userId();
  	if(userId && Meteor.subscribe('companies.single', userId).ready() && Meteor.subscribe('athletes.single', userId).ready() && Meteor.subscribe('profiles.single', userId).ready() ){
  		const athletes = Collections.Athletes.find().fetch();
  		const companies = Collections.Companies.find().fetch();
  		const profiles = Collections.Profiles.find().fetch();
  		onData(null, {athletes, companies, profiles})
  	};
};

export default composeWithTracker(composer)(AthleteList); 
