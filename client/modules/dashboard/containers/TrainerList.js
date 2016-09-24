import { composeWithTracker } from 'react-komposer';
import TrainerList from '../components/TrainerList.jsx';
import * as Collections from '/lib/collections';


function composer(props, onData){
	const userId = Meteor.userId();
  	if(userId && Meteor.subscribe('companies.single', userId).ready() && Meteor.subscribe('trainers.single', userId).ready() && Meteor.subscribe('profiles.single', userId).ready() && Meteor.subscribe('items.list').ready() ){
  		const trainers = Collections.Trainers.find().fetch();
  		const companies = Collections.Companies.find().fetch();
  		const profiles = Collections.Profiles.find().fetch();
  		const items = Collections.Items.find().fetch();
  		onData(null, {trainers, companies, profiles, items})
  	};
};

export default composeWithTracker(composer)(TrainerList); 
